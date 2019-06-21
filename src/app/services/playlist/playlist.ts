import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { IPlaylist } from '../../interfaces/Playlist';
import { ProfileProvider } from '../../services/profile/profile';
import { IVideo } from '../../interfaces/Video';


/*
  Generated class for the PlaylistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root',
})
export class PlaylistProvider {
  videos=[];
  selections=[];
  constructor(private profileService:ProfileProvider) {
  }


  async getSelections(limit=6){
    if(this.selections.length == 0 || this.selections==null){
      var selections=[];

      var req=`/userProfile/NbtwzggJpfYmu1rN4lqdCNBBSVu1/playlists/`;
      
      await firebase.database().ref(req).orderByChild("selection").equalTo(true).limitToLast(limit).once("value",
        (querySnapshot) => {
          
           querySnapshot.forEach(function (doc) {
            selections.push({
              key: doc.key,
              title: doc.child("title").val(),
              image: doc.child("image").val(),
              description: doc.child("description").val()
            });
          });
          selections=selections.reverse();


          selections.forEach(selection => {
            var storage = firebase.storage();

            if(selection.image.includes("selections")){
              selections.push(selection);
            }else{
              storage.ref("/selections/"+selection.image).getDownloadURL().then(imageFire=>{
                selection.image=imageFire;
              });
            }
          });
        });

        this.selections=selections;
    }
    
    
    return(this.selections);
  }

  getPlaylistById(userKey,key): Promise<any>{
    return new Promise((resolve, reject) => {
      //Récupère la playlist en fonction de sa clef
      var req=`/userProfile/${userKey}/playlists/${key}`;
      firebase.database().ref(req).once("value")
            .then((querySnapshot) => {
              var playlist=<IPlaylist>{
                key: querySnapshot.key,
                title: querySnapshot.child("title").val(),
                image: querySnapshot.child("image").val(),
                description: querySnapshot.child("description").val(),
                selection:querySnapshot.child("selection").val()
              }
              resolve(playlist);
            });
    });
  }

  getVideos(userKey,playlist): Promise<any>{
    return new Promise((resolve, reject) => {
      var req=`/userProfile/${userKey}/playlists/${playlist.key}/videos`;
      var videosWatched=this.profileService.getVideosWatched();
      firebase.database().ref(req).once("value")
      .then((querySnapshot) => {
          let arr = [];
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

            if(videosWatched.indexOf(video.youtubeId)>-1){
              video.seen=true;
            }

            arr.push(video);
          });

          this.videos=arr.reverse();
          resolve(this.videos);
      });
    });
  }

  getVideosWithoutLoading(){
    return this.videos;
  }

  addVideoToList(video){
    this.videos.unshift(video);
  }


  removeVideo(video,playlist): Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            var req=`/userProfile/${user.uid}/playlists/${playlist.key}/videos/${video.key}`;
            firebase.database().ref(req).remove()
            .then((querySnapshot) => {
                resolve(true);
              });
          }
        }
      );
    });
  }

}
