import { Component } from '@angular/core';
import { NavController,ModalController,LoadingController } from '@ionic/angular';
import { Meta, Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { MaestroProvider } from '../services/maestro/maestro';
import { ProfileProvider } from '../services/profile/profile';
import { AuthProvider } from '../services/auth/auth';
import { VideoProvider } from '../services/video/video';
import { ModalPlaylistComponent } from "../modal-playlist/modal-playlist.component";
import { DatePipe } from '@angular/common';
import { ActionSheetController } from '@ionic/angular';
import { GeneralProvider } from '../services/general/general';
import { element } from 'protractor';


/**
 * Generated class for the LastVideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-last-videos',
  templateUrl: 'lastvideos.page.html',
  
})
export class LastvideosPage {

  maestros  = new Array<any>();
  favoritesMaestros = new Array<any>();
  displayTopVideos=4;
  videos =[];
  videosVals=[];
  videosMilongas=[];
  videosOthers=[];
  videosLessons=[];
  videosTango=[];
  topVideos = [];
  role="user";
  offsetAll=0;
  offsetVals=0;
  offsetMilongas=0;
  offsetOthers=0;
  offsetLessons=0;
  loading;
  type: string = "all";

  constructor(
    private router:Router,
    private actionSheetCtrl:ActionSheetController,
    private loadingCtrl:LoadingController,
    public modalCtrl: ModalController,
    //public datepipe: DatePipe,
    private videoService:VideoProvider,
    public authService:AuthProvider,
    public profileService:ProfileProvider,
    public maestroService:MaestroProvider,
    public navCtrl:NavController,
    public generalService:GeneralProvider,
    private titleService: Title,
    public metaService:Meta
    ) 
  {
    this.titleService.setTitle("Latest tango videos");
    this.metaService.addTag({ name: 'description', content: 'Watch the latest tango videos on Youtube. You can also filter by type : milonga, vals, tango ...' });

    this.profileService.getUserRole().then(role=>{
        this.role=role;
    });

    this.loadInfos().then(
      ()=>{
        this.loadVideos(0);
        this.loadVals(0);
        this.loadMilongas(0);
        this.loadLessons(0);
        this.loadOthers(0); 
      }
    );
  }

  ngOnInit() {

    // Try to remove META-Tags
    try{
      document.querySelector("meta[name='description']").remove();
    } catch (e){
  
    }
  
    // Add the new META-Tags
    var description = document.createElement('meta');
    description.name = "description";
    description.content = "Watch all the latest tango videos uploaded on youtube";
    document.getElementsByTagName('head')[0].appendChild(description);
  }

  async loadInfos(){
    await this.generalService.initPage();
    this.role=this.profileService.returnRole();
    this.favoritesMaestros=this.maestroService.getFavoritesMaestros();
    this.topVideos=this.videoService.getTopvideos(0);
    return true;
  }
  

  ionViewWillEnter(){

  }


  async loadVideos(offset){
    let loading = await this.loadingCtrl.create({
      message: 'Loading videos',
    });
    loading.present();

    this.videoService.getVideos(null,null,offset).then(
      results=>{

          results.forEach(elementResult => {
            var testPresent=true;

            this.videos.forEach(elementVideo => {
              if(elementResult.key==elementVideo.key){
                testPresent=false;
              } 
            });
            
            if(testPresent==true){
              console.log(elementResult.title)
              this.videos.push(elementResult);
            }
          });

        loading.dismiss();
      }
    )
  }

  async loadVals(offset){
    let loading = await this.loadingCtrl.create({
      message: 'Loading',
    });
    loading.present();
    this.videoService.getVideos(null,"vals",offset).then(
      results=>{
          results.forEach(elementResult => {
            var testPresent=true;
            
            this.videosVals.forEach(elementVideo => {
              if(elementResult.key==elementVideo.key){
                testPresent=false;
              } 
            });
            
            if(testPresent==true){
              this.videosVals.push(elementResult);
            }
          });

        loading.dismiss();
      }
    )
  }

  async loadMilongas(offset){
    let loading = await this.loadingCtrl.create({
      message: 'Loading',
    });
    loading.present();
    this.videoService.getVideos(null,"milonga",offset).then(
      results=>{
        results.forEach(elementResult => {
          var testPresent=true;
          
          this.videosMilongas.forEach(elementVideo => {
            if(elementResult.key==elementVideo.key){
              testPresent=false;
            } 
          });
          
          if(testPresent==true){
            this.videosMilongas.push(elementResult);
          }
        });

        loading.dismiss();
      }
    )
  }

  async loadLessons(offset){
    let loading = await this.loadingCtrl.create({
      message: 'Loading',
    });
    loading.present();
    this.videoService.getVideos(null,"lesson",offset).then(
      results=>{
        results.forEach(elementResult => {
          var testPresent=true;
          
          this.videosLessons.forEach(elementVideo => {
            if(elementResult.key==elementVideo.key){
              testPresent=false;
            } 
          });
          
          if(testPresent==true){
            this.videosLessons.push(elementResult);
          }
        });

        loading.dismiss();
      }
    )
  }

  async loadOthers(offset){
    let loading = await this.loadingCtrl.create({
      message: 'Loading',
    });
    loading.present();
    this.videoService.getVideos(null,"other",offset).then(
      results=>{
        results.forEach(elementResult => {
          var testPresent=true;
          
          this.videosOthers.forEach(elementVideo => {
            if(elementResult.key==elementVideo.key){
              testPresent=false;
            } 
          });
          
          if(testPresent==true){
            this.videosOthers.push(elementResult);
          }
        });
        loading.dismiss();
      }
    )
  }



  doRefresh(event) {
      this.videos =[];
      this.videosVals=[];
      this.videosMilongas=[];
      this.videosOthers=[];
      this.videosLessons=[];
      this.videosTango=[];
      this.topVideos = [];

      this.generalService.reInitFirstLoad();
      this.loadInfos().then(
        ()=>{
          this.loadVideos(0);
          this.loadVals(0);
          this.loadMilongas(0);
          this.loadLessons(0);
          this.loadOthers(0); 
          console.log("refresh fin");
          event.target.complete();
        }
      ); 
  }


  doInfinite(infiniteScroll,offset,type) {
    offset=offset+20;
    if(type=="all"){
      this.loadVideos(offset);
      this.offsetAll=offset;
      //changement de fonctionnement sur infinite scroll
      infiniteScroll.target.complete();
    }

    if(type=="vals"){
      this.loadVals(offset);
      this.offsetVals=offset;
      //changement de fonctionnement sur infinite scroll
      infiniteScroll.target.complete();
    }

    if(type=="milonga"){
      this.loadMilongas(offset);
      this.offsetMilongas=offset;
      //changement de fonctionnement sur infinite scroll
      infiniteScroll.target.complete();
    }


    if(type=="lessons"){
      this.loadLessons(offset);
      this.offsetLessons=offset;
      //changement de fonctionnement sur infinite scroll
      infiniteScroll.target.complete();
    }


    if(type=="other"){
      this.loadOthers(offset);
      this.offsetOthers =offset;
      //changement de fonctionnement sur infinite scroll
      infiniteScroll.target.complete();
    }

  }

  

  goToAbout():void{
    this.router.navigateByUrl(`about`);
    //this.navCtrl.goForward('/about');
  }



}
