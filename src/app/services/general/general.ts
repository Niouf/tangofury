import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { NavController,LoadingController,ModalController,AlertController,Platform  } from '@ionic/angular';
import { MaestroProvider } from '../maestro/maestro';
import { ProfileProvider } from '../profile/profile';
import { PlaylistProvider } from '../playlist/playlist';
import { AuthProvider } from '../auth/auth';
import { VideoProvider } from '../video/video';
import { IMaestro } from '../../interfaces/Maestro';
import { IVideo } from '../../interfaces/Video';
import { IPlaylist } from '../../interfaces/Playlist';
import { resolve } from 'q';
import { isDefined } from '@angular/compiler/src/util';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root',
})
export class GeneralProvider {

  firstLoad=false;

  displayTopVideos=0;
  videosLast =[];
  topVideos = new Array<IVideo>();
  selections = new Array<IPlaylist>();
  loadiTop=false;
  loadiMaestros=false;
  loadiSelections=false;
  role="visitor";
  offsetAll=0;
  videosWatched=[];
  maestros  = new Array<IMaestro>();
  favoritesMaestros= new Array<IMaestro>();
  lastConnexion;
  loadMaestroInfos=false;
  loadProfileInfos=false;
  user=[];
  userId;

  constructor(
    private alertService:AlertController ,
    private videoService:VideoProvider,
    public modalCtrl: ModalController,
    private LoadingCtrl: LoadingController,
    public authService:AuthProvider,
    public profileService:ProfileProvider,
    public maestroService:MaestroProvider,
    public playlistService:PlaylistProvider,
    public navCtrl: NavController,
    public plateform:Platform,
  ) {
    //this.initPage();
  }

  async initPage(){
    if(this.firstLoad==false){
        let loading = await this.LoadingCtrl.create({
        message: 'Loading many stuff, Tangofury will be ready soon !',
      });
      await loading.present();
      var start_time = new Date().getTime();

      //Chargement des maestros
      
      await this.maestroService.loadMaestros(new Date()).then(
        ()=>{
          this.loadMaestroInfos=true;
          var request_time = new Date().getTime() - start_time;
          resolve(this.loadMaestroInfos);
        }
      );
      
      //Chargement des séléctions
      var storage = firebase.storage();
      this.playlistService.getSelections().then((data)=>{
        data.forEach(selection => {
          storage.ref("selections/"+selection.image).getDownloadURL().then(imageFire=>{
            selection.image=imageFire;
            this.selections.push(selection);
          });
          var request_time = new Date().getTime() - start_time;
          //console.log("selection termine "+request_time)
          resolve(this.selections);
        });
      })

      //chargement des tops videos
      this.videoService.getVideos(null,null,0,true).then(
        results=>{
          this.videoService.setTopVideos(results);
          var request_time = new Date().getTime() - start_time;
          //console.log("top videos done "+request_time)
        }
      );


      //Chargement de l'utilisateur
      await this.profileService.getUserData().then(user=>{
          if(user){
            this.user=user;
            this.userId=user.key;
            this.profileService.setRole(user.role);
            var request_time = new Date().getTime() - start_time;
            //console.log("loading user ok "+request_time)
            this.profileService.logConnexion();
          }else{
            this.profileService.setRole("user");
          }
        }
      );

      
      if(this.profileService.retrieveRole()!='user'){
        await this.maestroService.LoadListFavorites(this.user).then(list=>{
          this.maestroService.setFavoritesMaestros(list)
          var request_time = new Date().getTime() - start_time;
          //console.log("loading favs ok "+request_time)
        });

        this.profileService.loadVideosWatched(this.profileService.retrieveUserId()).then(()=>{
          var request_time = new Date().getTime() - start_time;
          //console.log("loading video watched ok "+request_time);
        })
        
      }

      await loading.dismiss();

    }
    this.firstLoad=true;
    return "finish";
  }


  tfIsLoaded(){
    return this.firstLoad;
  }

  reInitFirstLoad(){
    this.firstLoad=false;
  }


  async presentAlert(){
    let alert = await this.alertService.create({
      header: 'Do you like Tango Fury ?',
      message: 'Give your advice on Google Play to help Tango Fury to grow up !',
      buttons: [
        {
          text: 'Yes ! :)',
          handler: () => {
            window.open("https://play.google.com/e/apps/details?id=tango.fury");
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }

      ]
    });
    await alert.present();
  }




}
