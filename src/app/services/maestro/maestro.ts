import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { IMaestro } from '../../interfaces/Maestro';
import { IVideo } from '../../interfaces/Video';


/*
  Generated class for the MaestroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root',
})
export class MaestroProvider {

  private baseUrl = "https://www.tango-agenda.com/web/app_dev.php/fr/rest/maestros";

  //public currentUser: User;

  public favoritesMaestros = new Array<IMaestro>();
  public maestros  = new Array<IMaestro>();
  constructor() {
  }

  loadMaestros(dateStart): Promise<any>{
    return new Promise((resolve, reject) => {
      if(this.maestros.length>0)resolve(this.maestros);
      var start_time = new Date().getTime();
      //Recupere les maestros de firebase :)
      firebase.database().ref(`/maestros-infos`).once("value")
      .then((querySnapshot) => {
        var request_time = new Date().getTime() - start_time;
        let arr=[];
        
        querySnapshot.forEach(function (doc) {  

          var imageClear=doc.child("image").val().replace("2018/03/","").replace("2018/04/","").replace("/","");
          
          var maestro = <IMaestro>{
            key: doc.key,
            idmaestro:doc.child("idmaestro").val(),
            name:doc.child("name").val(),
            slug:doc.child("slug").val(),
            surname: doc.child("surname").val(),
            nickname: doc.child("nickname").val(),
            facebook: doc.child("facebook").val(),
            wikipedia: doc.child("wikipedia").val(),
            siteweb:doc.child("siteweb").val(),
            homonyme: doc.child("homonyme").val(), 
            image: imageClear,
            imageDisplay:"https://firebasestorage.googleapis.com/v0/b/tango-videos-2ce36.appspot.com/o/maestros%2F"+imageClear+"?alt=media",
            role: doc.child("role").val(),
            description: doc.child("description").val(),
            isFavorite:false
          };
          
          maestro.videos=doc.child("videos").val();
          arr.push(maestro);
        });
    
        if (arr.length > 0) {
          this.maestros=arr;
          resolve(this.maestros);
        } else {
            resolve(null);
        }

      })
      .catch((error: any) => {
          reject(error);
      });

    });
  }

  getMaestro(slug): Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.database().ref(`/maestros-infos`).orderByChild('slug').equalTo(slug).once("value").then(
        (querySnapshot) => {
          querySnapshot.forEach(function (doc) {
            var imageClear=doc.child("image").val().replace("2018/03/","").replace("2018/04/","").replace("/","");
            
            var maestro = <IMaestro>{
              key: doc.key,
              id:doc.child("id").val(),
              name:doc.child("name").val(),
              slug:doc.child("slug").val(),
              surname: doc.child("surname").val(),
              nickname: doc.child("nickname").val(),
              facebook: doc.child("facebook").val(),
              wikipedia: doc.child("wikipedia").val(),
              siteweb:doc.child("siteweb").val(),
              homonyme: doc.child("homonyme").val(), 
              image: imageClear,
              imageDisplay:"https://firebasestorage.googleapis.com/v0/b/tango-videos-2ce36.appspot.com/o/maestros%2F"+imageClear+"?alt=media",
              role: doc.child("role").val(),
              description: doc.child("description").val(),
              isFavorite:false
            };
            resolve(maestro);
          })
        }
      );
    });
   }

   getMaestros(){
    return this.maestros;
  }

  setMaestros(maestrosList){
    return this.maestros=maestrosList;
  }


  setFavoritesMaestros(maestrosList){
    return this.favoritesMaestros=maestrosList;
  }

  getFavoritesMaestros(){
      return this.favoritesMaestros;
  }


  LoadListFavorites(user): Promise<any>{
    return new Promise((resolve, reject) => {
      let arr=[];
      let maestroIds=[];

      if(user.maestros != undefined){
        maestroIds=Object.values(user.maestros);
      }

      maestroIds.map(maestroUser=>{
         var maestroList=this.getMaestros();

         maestroList.map(maestro=>{ 
          
          if(maestro.key==maestroUser){
            var cpt=0;
            maestro.isFavorite=true;
            arr.push(maestro);

            //Recupere les 10 dernieres videos
            firebase.database().ref("maestros/"+maestro.key +"/videos").orderByChild("datePublication").limitToLast(10)
              .once("value")
              .then((querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                  if(user.lastconnexion<=doc.child("datePublication").val())cpt++;
                });

                maestro.newvideos=cpt;
              });
          };
        });
      })
      
      resolve(arr);
    });
  }






  removeListFavorites(maestro): Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            firebase.database().ref(`/userProfile/${user.uid}/maestros/`).once("value")
            .then((querySnapshot) => {
              querySnapshot.forEach(function (doc) {

                if(doc.val()==maestro.key){
                  firebase.database().ref(`/userProfile/${user.uid}/maestros/`).child(doc.key).remove()
                }
              });
              var cpt=0;
              for(var maestroF of this.favoritesMaestros){
                if(maestroF.key==maestro.key){
                  this.favoritesMaestros.splice(cpt, 1);
                }
                cpt=cpt+1;
              }

            })
          }
         }
       );
     });
  }



  addListFavorites(maestro): Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            firebase.database().ref(`/userProfile/${user.uid}/maestros/`).push(maestro.key)
            .then((obj: any) => {
                this.favoritesMaestros.push(maestro);
                resolve(obj);
            });
          }
         }
       );
    });
  }



   newMaestro(maestro){
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
             var uid=firebase.database().ref(`/maestros/`).push({
                  name: maestro.name,
                  surname: maestro.surname,
                  nickname: maestro.nickname,
                  role : maestro.role,
                  image : maestro.image,
                  siteweb:maestro.siteweb,
                  facebook:maestro.facebook,
                  wikipedia:maestro.wikipedia,
                  homonyme:maestro.homonyme,
                  description:maestro.description,
                  slug:maestro.slug
                });

                //recherche du maestro puis clonage
                this.getMaestro(maestro.slug).then(
                  maestro=>{
                    this.copyMaestro(maestro);
                  }
                );
              
                resolve(uid);

              this.loadMaestros(new Date());
          }
      });
    });
  }

  //Utile pour recréer la liste des maestros
  copyMaestro(maestro){
    return new Promise((resolve, reject) => {
        firebase.database().ref(`/maestros-infos/`).push({
          idmaestro:maestro.key,
          name: maestro.name,
          surname: maestro.surname,
          nickname: maestro.nickname,
          role : maestro.role,
          image : maestro.image,
          siteweb:maestro.siteweb,
          facebook:maestro.facebook,
          wikipedia:maestro.wikipedia,
          homonyme:maestro.homonyme,
          description:maestro.description,
          slug:maestro.slug
        }).then(()=>{
            resolve(true);
          }
        );
    });
  }


  editMaestro(maestro){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          firebase.database().ref(`/maestros-infos/${maestro.key}`).update({
            name: maestro.name,
            surname: maestro.surname,
            nickname: maestro.nickname,
            role : maestro.role,
            image : maestro.image,
            siteweb:maestro.siteweb,
            facebook:maestro.facebook,
            wikipedia:maestro.wikipedia,
            homonyme:maestro.homonyme,
            description:maestro.description,
            slug:maestro.slug
          });

          firebase.database().ref(`/maestros`).orderByChild('slug').equalTo(maestro.slug).once("value").then(
            (querySnapshot) => {
              querySnapshot.forEach(function (doc) {
                firebase.database().ref(`/maestros/${doc.key}`).update({
                  name: maestro.name,
                  surname: maestro.surname,
                  nickname: maestro.nickname,
                  role : maestro.role,
                  image : maestro.image,
                  siteweb:maestro.siteweb,
                  facebook:maestro.facebook,
                  wikipedia:maestro.wikipedia,
                  homonyme:maestro.homonyme,
                  description:maestro.description,
                  slug:maestro.slug
                });
              });
            }
          );
        }
    });
  }


  removeMaestro(maestro){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
            firebase.database().ref(`/maestros-infos/`).child(maestro.key).remove();
            firebase.database().ref(`/maestros`).orderByChild('slug').equalTo(maestro.slug).once("value").then(
              (querySnapshot) => {
                querySnapshot.forEach(function (doc) {
                  firebase.database().ref(`/maestros/`).child(doc.key).remove();
                });
              }
            );
          }
        }
      );
  }


}
