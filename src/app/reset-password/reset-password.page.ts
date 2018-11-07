import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController } from '@ionic/angular'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email';
import { AuthProvider } from '../services/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  public resetPasswordForm : FormGroup

  constructor(public router:Router,
    public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public authProvider: AuthProvider, formBuilder: FormBuilder
    ) {
      this.resetPasswordForm = formBuilder.group({
        email: [
          "",
         Validators.compose([Validators.required, EmailValidator.isValid])
       ]
     });
   }


  resetPassword(): void {
  if (!this.resetPasswordForm.valid) {
    console.log( `Form is not valid yet, current value: ${this.resetPasswordForm.value}` );
  } else {
    const email: string = this.resetPasswordForm.value.email;
    this.authProvider.resetPassword(email).then(
      user => {
        let message="Check your email for a password reset link";
        this.showAlert(message);
      }, error => {
        let message="Error :( I'm sorry ...";
        this.showAlert(message);
        } 
      );
    }
  }
  
  async showAlert(message){
    let alert=await this.alertCtrl.create({ message:message, buttons: [{ text: "Ok", role: "cancel" }] });
    await alert.present();
  }


  back(){
    this.router.navigateByUrl("login");
  }

  ngOnInit() {
  }

}
