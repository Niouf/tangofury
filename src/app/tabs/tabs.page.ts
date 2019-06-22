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
  role="";

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
    this.loadTabsInfos();
  }

  async loadTabsInfos(){
    this.profileService.getUserRole().then(role=>{
      this.role=role;
      if (this.platform.is("cordova")) {
        this.authService.lockAuth(this.role);
      }
    });

    if (this.platform.is("cordova")) {
      this.loginDisplay=false;
      this.tabPlacement="bottom";
    }else{
      this.tabPlacement="top";
    }  
  }

  goToLogin(){
    this.router.navigateByUrl(`login`);
  }


  goToAbout(){
    this.router.navigateByUrl(`about`);
  }
}
