import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { IPlaylist } from '../../interfaces/Playlist';
import { AuthProvider } from '../auth/auth';


/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root',
})
export class ProfileProvider {

  dateConnexion = "";
  videoWatched = [];
  nbConnexionUser=0;
  public lastConnexion;
  role="";
  user=[];
  userId;

  constructor( 
    private authService:AuthProvider
  ) {
  }
  
  logConnexion(): Promise<any>{
    return new Promise((resolve, reject) => {
      var myDate=this.formatDate(new Date());
      //Récupère la dernière connexion et la met ensuite à jour
      this.dateConnexion=myDate;
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
              //log le nombre de fois conncecté
              firebase.database().ref(`/userProfile/${user.uid}/nbConnexion/`).once("value")
              .then((querySnapshot) => {
                  var nbConnexion=querySnapshot.val();
                  nbConnexion=nbConnexion+1;
                  //Log la derniere date de connexion
                  firebase.database().ref(`/userProfile/${user.uid}/nbConnexion/`).set(nbConnexion);
                  this.nbConnexionUser=nbConnexion;
                });

                //Log la derniere date de connexion
                firebase.database().ref(`/userProfile/${user.uid}/lastconnexion/`).set(myDate);
                resolve(myDate);
              }
        });
    });
  }


  getUserData():Promise<any>{
    return new Promise((resolve, reject) => {
      if(this.user.length>0)resolve(this.user);
      
      var myDate=this.formatDate(new Date());
      //Récupère la dernière connexion et la met ensuite à jour
      this.dateConnexion=myDate;
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            firebase.database().ref(`/userProfile/${user.uid}`).once("value")
            .then((snapshot) => {
                this.user=snapshot.val();
                this.userId=user.uid;
                resolve(this.user);
            });
          }else{
            resolve(false);
          }
        }
      );
    });
  }


  getVideosWatched(){
    return(this.videoWatched);
  }

  getNbConnexion(): Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            firebase.database().ref(`/userProfile/${user.uid}/nbConnexion/`).once("value").then((querySnapshot) => {
              var nbConnexion=querySnapshot.val();
              this.nbConnexionUser=nbConnexion;
              resolve(nbConnexion);
            });
          }
        }
      )
    })
  }

  loadVideosWatched(userId): Promise<any>{
    return new Promise((resolve, reject) => {
            firebase.database().ref(`/userProfile/${userId}/videos-watched/`).limitToLast(150).once("value")
            .then((querySnapshot) => {
              let arr = [];
              querySnapshot.forEach(function (doc) {
                  arr.push(doc.val());
              });
              if (arr.length > 0) {
                  this.videoWatched=arr;
                  resolve(arr);
              } else {
                  resolve(null);
              }

            })
            .catch((error: any) => {
                reject(error);
            });
    });
  }

  setRole(role){
    this.role=role;
  }

  retrieveRole(){
    return this.role;
  }

  getUserId(): Promise<any>{
    return new Promise((resolve, reject) => {
    var testUser=firebase.auth().onAuthStateChanged(
      user => {
        resolve(user.uid);
      });
    });
  }

  retrieveUserId(){
    return this.userId;
  }

  getUserRole(): Promise<any>{
    return new Promise((resolve, reject) => {
        var role="visitor";
        
        if(this.role){
          resolve(this.role);
        }

        var testUser=firebase.auth().onAuthStateChanged(
          user => {
            if(user){
              var role=firebase.database().ref(`/userProfile/${user.uid}`).once("value")
              .then((querySnapshot) => {
                  if(querySnapshot.val().role==null){
                    resolve("visitor")
                  }else{
                    this.role=querySnapshot.val().role;
                    resolve(querySnapshot.val().role);
                  }
                })
            }else{
              resolve("visitor");
            }
          }
        );

        if(!testUser){
          resolve("visitor");
        }
    });
  }

  returnRole(){
    return this.role;
  }


  setLastConnexion(dateConnexion){
    this.lastConnexion=dateConnexion;
  }
 
  returnLastConnexion(){
    return this.lastConnexion;
  }


  getLastConnexion(): Promise<any>{
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          user => {
            if(user){
              firebase.database().ref(`/userProfile/${user.uid}/lastconnexion/`).once("value")
              .then((querySnapshot) => {
                  resolve(querySnapshot.val());
                });
              }
          }
        );
    });
  }

  setVideoSeen(video){
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
              firebase.database().ref(`/userProfile/${user.uid}/videos-watched/`).push(video.youtubeId);
              return true;
          }
      });
    }


  addPlaylist(name):Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
                var uid=firebase.database().ref(`/userProfile/${user.uid}/playlists/`).push({title:name});
                resolve(uid);
          }
      });
    });
  }


  editPlaylist(playlist){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          firebase.database().ref(`/userProfile/${user.uid}/playlists/${playlist.key}`).update({
            title:playlist.title,
            selection:playlist.selection,
            description:playlist.description,
            image:playlist.image
          });
        }
    });
  }

  removePlaylist(playList){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
            firebase.database().ref(`/userProfile/${user.uid}/playlists/`).child(playList.key).remove();
          }
        }
      );
  }

  getPlaylists(): Promise<any>{
    return new Promise((resolve, reject) => {

        firebase.auth().onAuthStateChanged(
          user => {
            if(user){
              var req=`/userProfile/${user.uid}/playlists/`;
              firebase.database().ref(req).once("value")
              .then((querySnapshot) => {
                  let arr = [];
                  querySnapshot.forEach(function (doc) {
                      arr.push({
                        key: doc.key, 
                        title: doc.child("title").val(),
                        selection: doc.child("selection").val(),
                        description: doc.child("description").val(),
                        image: doc.child("image").val(),
                      });
                  });
                  resolve(arr.reverse());
                });
              }
          }
        );



    });

  }


  formatDate(myDate){
    var mm = myDate.getMonth() + 1; // getMonth() is zero-based
    var dd = myDate.getDate();

    return [myDate.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
          ].join('-');
  }


  addVideoToPlaylist(video,playlist=null,ref=null){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          var req="";
            if(ref==null){
              req=`/userProfile/${user.uid}/playlists/${playlist.key}/videos`;
            }else{
              req=`/userProfile/${user.uid}/playlists/${ref.key}/videos`;
            }
              firebase.database().ref(req).push({
              id:video.id,
              description:video.description,
              title:video.title,
              datePublication:video.datePublication,
              urlImage:video.urlImage,
              youtubeId:video.youtubeId,
            });
            return true;
          }
        }
      );
  }


  playVideo(video){
    if (this.videoWatched.indexOf(video.id) > -1) {
        video.seen=true;
    }else{
        this.videoWatched.push(video.id);
        video.seen=true;
        this.setVideoSeen(video);
    }


    window.open("https://www.youtube.com/watch?v="+video.youtubeId);

  }
  

}
