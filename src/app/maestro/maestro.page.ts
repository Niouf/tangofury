import { Component, OnInit , Inject} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Meta, Title } from "@angular/platform-browser";
import {NavController, NavParams,LoadingController,ToastController,ActionSheetController,ModalController  } from '@ionic/angular';
import { IMaestro } from '../interfaces/Maestro';
import { MaestroProvider } from '../services/maestro/maestro';
import { ProfileProvider } from '../services/profile/profile';
//import { ModalPlaylistPage } from "../modal-playlist/modal-playlist";
import { VideoProvider } from '../services/video/video';
import { GeneralProvider } from '../services/general/general';


@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.page.html',
  styleUrls: ['./maestro.page.scss'],
})
export class MaestroPage implements OnInit {

  maestro : IMaestro;
  videos =[];
  videosVals=[];
  videosMilongas=[];
  videosOthers=[];
  videosTango=[];
  videosLessons=[];
  videosWatched=[];

  offsetAll=0;
  offsetMilongas=0;
  offsetVals=0;
  offsetOthers=0;
  offsetLessons=0;
  role="visitor";

  isFavorite= false;

  type: string = "all";
  slug:string;

  constructor(
      private route: ActivatedRoute,
      public router: Router,
      private maestroService:MaestroProvider,
      private videoService:VideoProvider,
      private profileService:ProfileProvider,
      public toastCtrl: ToastController,
      private loadingCtrl:LoadingController,
      private titleService: Title,
      public metaService:Meta,
      public generalService:GeneralProvider,
    ) {
      this.slug=  this.route.snapshot.params['slug'];
      this.initMaestro(this.slug);

      this.profileService.getUserRole().then(role=>{
            this.role=role;
          }
      );
  }




  async initMaestro(slug){
    await this.generalService.initPage();

    let loading = await this.loadingCtrl.create({
      message: 'Loading maestro',
    });
    loading.present();
    
    await this.loadMaestroData(this.slug).then(()=>{
      this.loadVideos(0);  
      this.loadVals(0);
      this.loadMilongas(0);
      this.loadLessons(0);
      this.loadOthers(0);
    });
    
    loading.dismiss();
  }


  loadMaestroData(slug): Promise<any>{
    return new Promise((resolve, reject) => {
      this.maestroService.getMaestro(slug).then(results=>{
        this.maestro=results;
        this.titleService.setTitle("Tango videos of "+this.maestro.surname+" "+this.maestro.name);
        this.metaService.addTag({ name: 'description', content: "Watch new tango, vals and milongas videos of "+this.maestro.surname+" "+this.maestro.name });
    
        this.isFavorite=this.checkFavorite(this.maestro);
        resolve(this.maestro);
      });
    });
  }

  goToAbout():void{
    this.router.navigateByUrl(`about`);
  }

  goToMaestros(){
    //this.router.navigateByUrl(`tango-maestros`);
    this.router.navigateByUrl(`tabs/(tango-maestros:tango-maestros)`);
    
    //this.router.navigateByUrl(`tango-maestros`);
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
    description.content = "Latest videos of "+this.maestro.surname+" "+this.maestro.nickname+" "+this.maestro.name;
    document.getElementsByTagName('head')[0].appendChild(description);
  }

  checkFavorite(maestro){
    if(this.maestroService.getFavoritesMaestros()){
      for(var fav of this.maestroService.getFavoritesMaestros()){
        if(maestro.id == fav.id){
          return true;
        }
      }
      return false;
    }else{
      return false;
    }
  }

  async loadVideos(offset){
    let loading = await this.loadingCtrl.create({
      message: 'Loading',
    });
    loading.present();

    this.videoService.getVideos(this.maestro,null,offset).then(
      results=>{
        results.forEach(elementResult => {
          var testPresent=true;
          
          this.videos.forEach(elementVideo => {
            if(elementResult.key==elementVideo.key){
              testPresent=false;
            } 
          });
          
          if(testPresent==true){
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

    this.videoService.getVideos(this.maestro,"vals",offset).then(
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

    this.videoService.getVideos(this.maestro,"milonga",offset).then(
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

    this.videoService.getVideos(this.maestro,"other",offset).then(
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
    
    this.videoService.getVideos(this.maestro,"lesson",offset).then(
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
    this.initMaestro(this.slug).then(()=>{
      event.target.complete();
    });
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
      this.offsetOthers=offset;
      //changement de fonctionnement sur infinite scroll
      infiniteScroll.target.complete();
    }

  }

  openLink(link){
    window.open(link);
  }


  async toggleFavoriteMaetro(maestro){
    if(this.isFavorite==true){
      this.maestroService.removeListFavorites(maestro);
      
      const toast = await this.toastCtrl.create({
        message: "Updating your favorite's list",
        duration: 2000
      });
      toast.present();

      this.isFavorite=false;
    }else{
      this.maestroService.addListFavorites(maestro);
      const toast = await this.toastCtrl.create({
        message: "Adding this maestro to your favorite's list",
        duration: 2000
      });
      toast.present();
      this.isFavorite=true;
    }
  }
  
}
