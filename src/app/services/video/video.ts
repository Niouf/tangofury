import { Injectable } from '@angular/core';
import {Platform,LoadingController } from '@ionic/angular';
import * as firebase from 'firebase';
import { ProfileProvider } from '../../services/profile/profile';
import { MaestroProvider } from '../../services/maestro/maestro';
import { IVideo } from '../../interfaces/Video';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the VideoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root',
})
export class VideoProvider {


  public videos  = new Array<IVideo>();
  topVideos=[];
  allVideos=[];
  allMilongas=[];
  allVals=[];
  allOthers=[];
  allLessons=[];
  limitOffset=24;

  constructor( 
    private loadingCtrl: LoadingController,
    public profileService:ProfileProvider,
    public maestroService:MaestroProvider,
    public platform:Platform,
    
  ) {
  }
  
  launchVideo(video){
    window.open("https://www.youtube.com/watch?v="+video.youtubeId);
  }


  getVideos(maestro,type="",offset=0,topvideos=false):Promise<any>{
    return new Promise((resolve)=>{
      if(maestro==null){
        if(type==null){
          if(topvideos==true){
            //affiche les top videos
            var fb=firebase.database().ref(`/videos`).orderByChild("topVideo").equalTo(1).limitToLast(offset+24);
            
          }else{
            //vue par défaut
            var fb=firebase.database().ref(`/videos`).orderByChild("datePublication").limitToLast(offset+24);
          }
        }else{
          var fb=firebase.database().ref(`/videos`).orderByChild("type").equalTo(type).limitToLast(offset+24);
        }
      }else{
        if(type==null){
          var fb=firebase.database().ref("maestros/"+maestro.key +"/videos").orderByChild("datePublication").limitToLast(offset+24);
        }else{
          var fb=firebase.database().ref("maestros/"+maestro.key +"/videos").orderByChild("type").equalTo(type).limitToLast(offset+24);
        }
      }
     

      var videosWatched=this.profileService.getVideosWatched();

      fb.once("value")
      .then((querySnapshot) => {
        let arr=[];
        let arrTop=[];
        
        querySnapshot.forEach(function (doc) {  
          var video = <IVideo>{
            key: doc.key,
            id:doc.child("id").val(),
            title:doc.child("title").val(),
            youtubeId:doc.child("youtubeId").val(),
            urlImage:doc.child("urlImage").val(),
            datePublication:doc.child("datePublication").val(),
            description:doc.child("description").val(),
            importUser:doc.child("importUser").val(),
            topVideo:doc.child("topVideo").val(),
            type:doc.child("type").val(),
            valid:doc.child("valid").val(),
            dateAdd:doc.child("dateAdd").val(),
            seen:false
          };
          
          //Si la video est dans le tableau des vues on la passe en seen true
          if(videosWatched.indexOf(video.youtubeId)>-1){
            video.seen=true;
          }

          if(video.valid){
            arr.push(video);
          }
          
        });
        
        if (arr.length > 0) {
          resolve(arr.reverse());
        } else {
            resolve([]);
        }

      });
    
    });
  }





  loadAllVideos(): Promise<any>{
    return new Promise((resolve, reject) => {

      firebase.database()
        .ref(`/videos`)
        .orderByChild("datePublication")
        //.limitToLast(8000)
        .once("value")
        .then((querySnapshot) => {
          let arr=[];
          let arrTop=[];

          querySnapshot.forEach(function (doc) {  

            var video = <IVideo>{
              key: doc.key,
              id:doc.child("id").val(),
              title:doc.child("title").val(),
              youtubeId:doc.child("youtubeId").val(),
              urlImage:doc.child("urlImage").val(),
              datePublication:doc.child("datePublication").val(),
              description:doc.child("description").val(),
              importUser:doc.child("importUser").val(),
              topVideo:doc.child("topVideo").val(),
              type:doc.child("type").val(),
              valid:doc.child("valid").val(),
              dateAdd:doc.child("dateAdd").val(),
              seen:false
            };
            
            if(video.valid){
              arr.push(video);
              if(video.topVideo)arrTop.push(video);
            }
            
          });
  
          if (arr.length > 0) {

            this.allVideos=arr;
            this.topVideos=arrTop;
            this.allVideos.reverse();
            resolve(this.allVideos);
          } else {
              resolve(null);
          }
  
        });
    });
  }


  addToVideos(video){
    this.allVideos.unshift(video);
  }

  setVideos(videos){
    this.allVideos=videos;

    for(let video of this.allVideos){
      if(video.type=="milonga")this.allMilongas.push(video);
      if(video.type=="vals")this.allVals.push(video);
      if(video.type=="other")this.allOthers.push(video);
      if(video.type=="lesson")this.allLessons.push(video);
    }

  } 


  getAllVideos(){
    return this.allVideos;
  }



  async presentLoading(message) {
    let loader = await this.loadingCtrl.create({
      message: message,
      duration: 500
    });
    await loader.present();
  }


  getTopvideos(offset){
    return this.topVideos.slice(offset,offset+this.limitOffset);
  }

  setTopVideos(videos){
    this.topVideos=videos;
  }

  addTopVideo(video){
    this.presentLoading("Setting as a top video");
    video.topVideo=1;
    firebase.database().ref(`/videos/${video.key}`).set(video);
    this.topVideos.unshift(video);
  }

  removeTopVideo(video){
    video.topVideo=0;
    firebase.database().ref(`/videos/${video.key}`).set(video);
  }

  playVideo(video){
    video.seen=true;
    this.profileService.setVideoSeen(video);
    window.open("https://www.youtube.com/watch?v="+video.youtubeId);
  }

  setType(video,type){
    video.type=type;

    this.maestroService.getMaestros().forEach(maestro => {
      this.findVideo(video,"maestros/"+maestro.key+"/videos","setType",type).then();
    });

    //delete video from general
    this.findVideo(video,"videos","setType",type).then();

    return true;
  }

  deleteVideo(video){
    //delete video from maestros
    this.maestroService.getMaestros().forEach(maestro => {
      this.findVideo(video,"maestros/"+maestro.key+"/videos","delete",null).then();
    });

    //delete video from general
    this.deleteGeneralVideo(video);
  }

  deleteGeneralVideo(video){
    firebase.database().ref("videos/"+video.key).set(null);
    firebase.database().ref(`/videos-deleted/`).push(video.youtubeId);
  }


  async getDeletedVideos(){
    var deletedVideos=Array();

    const querySnapshot= await firebase.database().ref("videos-deleted").once("value");

    querySnapshot.forEach(function (doc) {
      deletedVideos.push(doc.val());
    });

    return deletedVideos;
  }

  findVideo(video,target,operation,type): Promise<any>{
    return new Promise((resolve, reject) => {
  
      //trouve la video 
      firebase.database()
        .ref(target)
        .orderByChild("youtubeId")
        .equalTo(video.youtubeId)
        .once("value")
        .then((querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            if(operation=="delete"){
              video.valid=0;
              firebase.database().ref(target+"/"+doc.key).set(video);
            }

            if(operation=="setType"){
              video.type=type;
              firebase.database().ref(target+"/"+doc.key).set(video);
            }
          });

        });
    });
  }


}
