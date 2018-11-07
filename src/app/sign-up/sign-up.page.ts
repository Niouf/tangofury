import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email';
import { AuthProvider } from '../services/auth/auth';
import { Router } from '@angular/router';

/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.page.html',
})
export class SignUpPage {

  public loader;
  public signupForm:FormGroup;

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder,
    public router:Router,
    ) {
    this.signupForm = formBuilder.group({ email: [ "", Validators.compose([Validators.required, EmailValidator.isValid]) ], password: [ "", Validators.compose([Validators.minLength(6), Validators.required]) ] });
  }

  ionViewDidLoad() {
  }


  async presentLoading(message) {
    let loader = await this.loadingCtrl.create({
      message: message,
      duration: 500
    });
    await loader.present();
  }

  goToAbout():void{
    this.router.navigateByUrl(`about`);
  }

  signupUser(){
    if (!this.signupForm.valid) {
      console.log( `Need to complete the form, current value: ${this.signupForm.value}` );
    } else {
      const email: string = this.signupForm.value.email;
      const password: string = this.signupForm.value.password;
      this.authProvider.signupUser(email, password).then(user => { 
          this.authProvider.hydrateUser();
          this.router.navigateByUrl("home");
        }, error => {
            let message= error.message;
            this.showAlert(message);
        });
        this.presentLoading("loading")
      }
  }

  async showAlert(messageError){
    let alert=await this.alertCtrl.create({ message:messageError, buttons: [{ text: "Ok", role: "cancel" }] });
    await alert.present();
  }

  goBack(){
    this.router.navigateByUrl(`/login`);
  }
}
