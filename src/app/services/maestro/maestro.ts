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

      //Recupere les maestros de firebase :)
      firebase.database().ref(`/maestros`).once("value")
      .then((querySnapshot) => {
        let arr=[];

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
            imageDisplay:imageClear,
            role: doc.child("role").val(),
            description: doc.child("description").val(),
            isFavorite:false
          };

          maestro.videos=doc.child("videos").val();
          arr.push(maestro);
          //this.maestros.push(maestro);
        });

        if (arr.length > 0) {
          this.maestros=arr;
          //this.maestros.reverse();
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
      firebase.database().ref(`/maestros`).orderByChild('slug').equalTo(slug).once("value").then(
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
              imageDisplay:imageClear,
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
      let maestroIds=Object.values(user.maestros);

      maestroIds.map(maestroUser=>{
         let fav=[];
         var maestroList=this.getMaestros();

          firebase.database().ref("maestros/"+maestroUser +"/videos").orderByChild("datePublication").limitToLast(10)
          .once("value")
          .then((querySnapshot) => {
            var cpt=0;
            querySnapshot.forEach(function (doc) {
              if(user.lastconnexion<=doc.child("datePublication").val())cpt++;
            });
            
            
            maestroList.map(maestro=>{
              
              if(maestro.key==maestroUser){
                maestro.newvideos=cpt;
                arr.push(maestro);
              }
            })
          });
      })
      
        
        
      
      resolve(arr);

      /*
      if(this.favoritesMaestros.length>0)resolve(this.favoritesMaestros);

      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
            firebase.database().ref(`/userProfile/${user.uid}/maestros/`).once("value")
            .then((querySnapshot) => {
             
              var maestroList=this.getMaestros();
              let arr = [];

              querySnapshot.forEach(function (doc) {
                  for( let maestro of maestroList){

                    if(maestro.key==doc.val()){
                      maestro.isFavorite=true;
                      //récupère les nouvelles videos depuis la date saisie
                      
                      firebase.database().ref("maestros/"+maestro.key +"/videos").orderByChild("datePublication").limitToLast(10)
                      .once("value")
                      .then((querySnapshot) => {
                        var cpt=0;
                        querySnapshot.forEach(function (doc) {
                          if(dateStart<=doc.child("dateAdd").val())cpt++;
                        });
                        maestro.newvideos=cpt;

                      });
                      
                      arr.push(maestro);
                    }
                  }
              });
              
              
              if (arr.length > 0) {
                this.setFavoritesMaestros(arr);
                resolve(arr);
              } else {
                  resolve([]);
              }

            })
            .catch((error: any) => {
                reject(error);
            });
          }
         }
       );
       */

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
                if(maestroF.id==maestro.id){
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
                resolve(uid);

              this.loadMaestros(new Date());
          }
      });
    });
  }


  editMaestro(maestro){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
          firebase.database().ref(`/maestros/${maestro.key}`).update({
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
        }
    });
  }


  removeMaestro(maestro){
    firebase.auth().onAuthStateChanged(
      user => {
        if(user){
            firebase.database().ref(`/maestros/`).child(maestro.key).remove();
          }
        }
      );
  }


}
