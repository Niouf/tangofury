import { Component, OnInit , Inject} from '@angular/core';
import {  AlertController, LoadingController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../validators/email';
import { AuthProvider } from '../services/auth/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  inscBackAction: Subscription;
  element: HTMLElement;
  
  constructor(
    private authProvider: AuthProvider,
    private router : Router,
    private loadingCtrl:LoadingController,
    private alertCtrl : AlertController,
    private formBuilder: FormBuilder,
    public platform: Platform,
  ) {
    this.loginForm=this.formBuilder.group({
      email:[
        '',
        Validators.compose([Validators.required, EmailValidator.isValid])
      ],
      password:[
        '',
        Validators.compose([Validators.required,Validators.minLength(6)])
      ]
    });
  }

  
  goToSignup():void{
    this.router.navigateByUrl("SignUp");
  }

  goToResetPassword():void{
    this.router.navigateByUrl("ResetPassword");
  }



  ionViewDidLoad() {
  }

  goToAbout():void{
    this.router.navigateByUrl(`about`);
  }

  async loginUser() {
     if (!this.loginForm.valid) {
       console.log( `Form is not valid yet, current value: ${this.loginForm.value}` );
     } else {
       const email = this.loginForm.value.email;
       const password = this.loginForm.value.password;
       this.authProvider.loginUser(email, password).then( authData => {
          loading.dismiss().then(
                        () => {
                        window.location.replace('');
                      });
        }, error => {
          loading.dismiss().then(
                async () => { 
                let alert = await this.alertCtrl.create({ message: error.message, buttons: [{ text: 'Ok', role: 'cancel' }] });
                alert.present();
              });
            }
       );
      let loading = await this.loadingCtrl.create({
        message: 'Loading',
      });
      loading.present();
      
    } 

  }
  

  ngOnInit() {
    this.inscBackAction = this.platform.backButton.subscribe(() => {
      // Check this log in chrome: "chrome://inspect/#devices"             

      this.element = document.getElementById('backButton') as HTMLElement;
      this.element.click();
      // OR
      // this.router.navigate(['/anyPage']);

    }, error => {
      console.log('\n\nERROR:\n' + error.message + '\n\n');
    });
  }

}
