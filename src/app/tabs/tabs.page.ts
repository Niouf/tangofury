import { Component } from '@angular/core';
import { ProfileProvider } from '../services/profile/profile';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { GeneralProvider } from '../services/general/general';
//import { ThrowStmt } from '@angular/compiler';
import { AuthProvider } from '../services/auth/auth';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  role:"visitor";

  tabPlacement="top";
  tabLayout="icon-top";
  tabMode="mobile";
  loginDisplay=true;

  constructor(
    private profileService:ProfileProvider,
    public generalService:GeneralProvider,
    private authService: AuthProvider,
    private platform: Platform,
    private router:Router,
    ){
    
    this.profileService.getUserRole().then(role=>{
      this.role=role;
      //console.log("chargement du role de l'utilisateur",this.role);
    });
    
    if (this.platform.is("cordova")) {
      this.loginDisplay=false;
      this.authService.lockAuth(this.role);
      this.tabPlacement="bottom";
    }else{
      this.tabPlacement="top";
    }

    /*
    if (this.platform.isPortrait()) {
      console.log("bottom")
      this.tabPlacement="bottom";
      this.tabLayout="icon-top";
      this.tabMode="mobile";
    }else{
      console.log("top")
      this.tabPlacement="top";
      this.tabLayout="icon-start";
      this.tabMode="desktop";
    }
    */

    
  }

  goToLogin(){
    this.router.navigateByUrl(`login`);
  }


  goToAbout(){
    this.router.navigateByUrl(`about`);
  }
}
