import { Component  } from '@angular/core';
import { Router } from '@angular/router';
import { NavController,LoadingController,ModalController  } from '@ionic/angular';
import { MaestroProvider } from '../services/maestro/maestro';
import { ProfileProvider } from '../services/profile/profile';
import { PlaylistProvider } from '../services/playlist/playlist';
import { GeneralProvider } from '../services/general/general';
import { AuthProvider } from '../services/auth/auth';
import { VideoProvider } from '../services/video/video';
import { IMaestro } from '../interfaces/Maestro';
import * as firebase from 'firebase';
import { IVideo } from '../interfaces/Video';
import { IPlaylist } from '../interfaces/Playlist';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  displayTopVideos=0;
  videosLast =[];
  topVideos = new Array<IVideo>();
  selections = new Array<IPlaylist>();
  loadiTop=false;
  loadiMaestros=false;
  loadiSelections=false;
  role="visitor";
  offsetAll=0;
  videosWatched=[];
  maestros  = new Array<IMaestro>();
  favoritesMaestros= new Array<IMaestro>();

  constructor(
    private videoService:VideoProvider,
    public modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    public authService:AuthProvider,
    public profileService:ProfileProvider,
    public maestroService:MaestroProvider,
    public playlistService:PlaylistProvider,
    public generalService:GeneralProvider,
    public navCtrl: NavController,
    private router:Router,
    
  ){
    //this.profileService.getUserRole().then(role=>{this.role=role});
    //this.loadingHome();
    this.loadInfos()
  }

  async loadInfos(){
    await this.generalService.initPage();
    this.role=this.profileService.returnRole();
    this.favoritesMaestros=this.maestroService.getFavoritesMaestros();
    this.selections=await this.playlistService.getSelections();
    this.topVideos=await this.videoService.getTopvideos(0);
  }

  doRefresh(event) {
    this.generalService.reInitFirstLoad();
    this.loadInfos().then(()=>{
      event.target.complete();
    });
  }

  goToMaestro(maestro){ 
    var link='/tabs/tango-maestros/'+maestro.slug;
    this.router.navigateByUrl(link);
    return false;
  }

  goToAllSelections(){
    this.router.navigateByUrl(`/tabs/tango-selections-all`);
  }

  goToPlaylist(playlist){
    this.router.navigateByUrl(`/tabs/(home:selection/NbtwzggJpfYmu1rN4lqdCNBBSVu1/${playlist.key})`);
  }

  goToAllselections(){
    this.router.navigateByUrl(`/tabs/(home:tango-selections-all)`);
  }

  goToDetail(maestro){
    this.router.navigateByUrl(`/tabs/(tango-maestros:maestro-details/${maestro.slug})`);
  }

  goToProfile():void{
    this.router.navigateByUrl("ProfilePage");
  }

  goToLogin(){
    this.router.navigateByUrl(`login`);
  }

  goToAbout():void{
    this.router.navigateByUrl(`about`);
  }
  

  playVideo(video){
    this.videoService.playVideo(video);
    //this.actionVideo(video);
  }


  removeTopVideo(video){
    this.videoService.removeTopVideo(video);
    var index = this.topVideos.indexOf(video);
    if (index > -1) {
      this.topVideos.splice(index, 1);
    }
  }

  addTopVideo(video){
    this.videoService.addTopVideo(video);
  }

  loadMoreTopVideos() {
 
   this.displayTopVideos=this.displayTopVideos+12;
          //chargement des top videos
          this.videoService.getVideos(null,null,this.displayTopVideos,true).then(
            results=>{

              this.topVideos=results;
            }
          );
  }
  

}
