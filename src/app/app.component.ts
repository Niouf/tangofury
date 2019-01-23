import { SwUpdate } from '@angular/service-worker';
import { Component , OnInit} from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private swUpdate: SwUpdate, 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((evt) => {
                //console.log('service worker updated');
            });
    
            this.swUpdate.checkForUpdate().then(() => {
                // noop
            }).catch((err) => {
                console.error('error when checking for update', err);
            });
        }}

    ngOnInit(){

    }
}
