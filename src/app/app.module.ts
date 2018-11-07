import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA  } from '@angular/core';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule  } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

import * as firebase from 'firebase';
import { ModalPlaylistComponent } from './modal-playlist/modal-playlist.component';
import { ModalMaestroComponent } from './modal-maestro/modal-maestro.component';
import { ModalPlaylistEditComponent } from './modal-playlist-edit/modal-playlist-edit.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

var firebaseConfig = {
  apiKey: "AIzaSyCVa04BCfCUaYUPcZloAnlxa4nK1Tmo7ps",
  authDomain: "tango-videos-2ce36.firebaseapp.com",
  databaseURL: "https://tango-videos-2ce36.firebaseio.com",
  projectId: "tango-videos-2ce36",
  storageBucket: "tango-videos-2ce36.appspot.com",
  messagingSenderId: "594224538752"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    ModalPlaylistComponent,
    ModalMaestroComponent, 
    ModalPlaylistEditComponent
  ],
  entryComponents: [ModalMaestroComponent,ModalPlaylistComponent,ModalPlaylistEditComponent],
  imports:[
    CommonModule,
    IonicModule.forRoot(),     
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FileTransfer,
    FileChooser,
    File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA,
  ],
})
export class AppModule {}
