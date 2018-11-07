import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { ActivatedRoute,Router } from '@angular/router';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable({
  providedIn: 'root',
})
export class AuthProvider {


  user: {};
  constructor(private router:Router) {

  }




  getUser(){
    return this.user;
  }

  loadUserInfos():Promise<any>{
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(
        user => {
          if(user){
              this.user=user;

              //CHangement de la date de dernière connexion
              var myDate=this.formatDate(new Date());
              firebase.database().ref(`/userProfile/${user.uid}/lastconnexion/`).set(myDate);

              resolve(user);
            }
        }
      )
    });
  }
  

  lockAuth(role){
    if(role=="visitor"){
      this.router.navigateByUrl(`/login`);
    }
  }

  loginUser(email:string,password:string):Promise<any>{
    return firebase.auth().signInWithEmailAndPassword(email,password);
  }

  signupUser(email:string,password:string):Promise<any>{
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(newUser=>{
      })
      .catch(error=>{
        console.error(error);
        throw new Error(error);
      })
  }


  hydrateUser(){
    firebase.auth().onAuthStateChanged(
      newUser => {
        if(newUser){
          var myDate=this.formatDate(new Date());
          firebase.database().ref(`/userProfile/${newUser.uid}/lastconnexion/`).set(myDate);
          firebase.database().ref(`/userProfile/${newUser.uid}/role/`).set("user");
          firebase.database().ref(`/userProfile/${newUser.uid}/nbConnexion/`).set(0);
          }
      }
    );
  }

  formatDate(myDate){
    var mm = myDate.getMonth() + 1; // getMonth() is zero-based
    var dd = myDate.getDate();

    return [myDate.getFullYear(),
            (mm>9 ? '' : '0') + mm,
            (dd>9 ? '' : '0') + dd
          ].join('-');
  }

  resetPassword(email:string):Promise<void>{
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser():Promise<void>{
    const userId: string = firebase.auth().currentUser.uid;
    firebase
      .database()
      .ref(`/userProfile/${userId}`)
      .off();
      window.location.replace('');
    return firebase.auth().signOut();
  }

}
