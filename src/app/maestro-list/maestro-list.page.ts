import { Component, OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController,ToastController,ActionSheetController,ModalController  } from '@ionic/angular';
import { Meta, Title } from "@angular/platform-browser";
import { Router } from '@angular/router';
import { MaestroProvider } from '../services/maestro/maestro';
import { ProfileProvider } from '../services/profile/profile';
import { ModalMaestroComponent } from '../modal-maestro/modal-maestro.component';
import { AuthProvider } from '../services/auth/auth';
import { VideoProvider } from '../services/video/video';
//import { MaestroPage } from "../-maestro/-maestro";
import { DatePipe } from '@angular/common';
import { IMaestro } from '../interfaces/Maestro';
import * as firebase from 'firebase';
import { GeneralProvider } from '../services/general/general';

@Component({
  selector: 'app-maestro-list',
  templateUrl: './maestro-list.page.html',
  styleUrls: ['./maestro-list.page.scss'],
})
export class MaestroListPage implements OnInit {
  maestros  = new Array<any>();
  favoritesMaestros = new Array<any>();
  roleUser="visitor";
  role: string = "visitor";

  constructor(
    public router: Router,
    private actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    private loadingCtrl:LoadingController,
  
    private modalCtrl:ModalController,
    private titleService: Title,
    public metaService:Meta,
    public maestroService:MaestroProvider,
    public generalService:GeneralProvider,
    public profileService:ProfileProvider,
  ) {

    this.titleService.setTitle("All tango maestros");
    this.metaService.addTag({ name: 'description', content: 'Pick a tango maestro in the list and see all his latest videos' });

    this.profileService.getUserRole().then(role=>{
      this.roleUser=role;
      this.role=role;
    });

    //this.initPage();
    this.loadInfos();
  }

  async loadInfos(){
    await this.generalService.initPage();
    this.role=this.profileService.returnRole();
    this.favoritesMaestros=this.maestroService.getFavoritesMaestros();
    this.maestros=this.maestroService.getMaestros();
  }


  async initMaestros(){
    let loading = await this.loadingCtrl.create({
      message: 'Loading maestros',
    });
    await loading.present();

    if(this.maestroService.getMaestros().length>0){
      this.maestros=this.maestroService.getMaestros()
      await loading.dismiss();
    }else{
      this.maestroService.loadMaestros(new Date()).then(async data=>{
        this.maestros=data;
         await loading.dismiss();
      });
    }
    
    this.favoritesMaestros=this.maestroService.getFavoritesMaestros();
  }

  resetMaestros(){
    this.maestros=this.maestroService.getMaestros();
  }

  goToDetail(maestro){
    this.router.navigateByUrl(`/tabs/(tango-maestros:maestro-details/${maestro.slug})`);
    //this.router.navigateByUrl(`/maestro/${maestro.slug}`);
    //this.navCtrl.push(PersonPage, maestro);
  }


  //searchbar
  getItems(ev: any) {
    // Reset items back to all of the items
    this.resetMaestros();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.maestros = this.maestros.filter((item) => {
        var lachaine=item.surname+" "+" "+item.nickname+" "+item.name;
        return (lachaine.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  goToAbout():void{
    this.router.navigateByUrl(`about`);
  }

  async toggleFavoriteMaetro(maestro){
    if(maestro.isFavorite==true){
      this.maestroService.removeListFavorites(maestro);
      maestro.isFavorite=false;
      var toast=await this.toastCtrl.create({
          message: maestro.surname+ " " +maestro.name+' removed from favorites',
          duration: 2000
        });
      toast.present();
    }else{
      this.maestroService.addListFavorites(maestro);
      maestro.isFavorite=true;
      var toast=await this.toastCtrl.create({
        message: maestro.surname+ " " +maestro.name+' added to favorites',
        duration: 2000
      });
      toast.present();
    }
  }


  removeMaestro(maestro){
    var result = confirm("Do you really want to delete this maestro ? ");
    if (result) {
      this.maestroService.removeMaestro(maestro);
      var index = this.maestros.indexOf(maestro);
      if (index > -1) {
        this.maestros.splice(index, 1);
      }
    }
  }

  goToMaestro(maestro){ 
    var link='/tabs/tango-maestros/'+maestro.slug;
    this.router.navigateByUrl(link);
    return false;
  }

  async addMaestro(){
    let modal = await this.modalCtrl.create({
      component:ModalMaestroComponent
    });
    await modal.present();
  }

  async actionMaestro(maestro){
    if(this.roleUser=="admin"){
      var myButtons=[
        {
          text: 'Modify maestro',
          icon: "settings",
          handler: async() => {
            let modal = await this.modalCtrl.create(
              {
                component:ModalMaestroComponent,
                componentProps :{maestro:maestro}
               
              });
            await modal.present();
          }
        },{
          text: 'Delete maestro',
          icon: "remove",
          handler: () => {
            this.removeMaestro(maestro);
          }
        }
      ];
  
  
      myButtons.push(
        {
          text: 'Cancel',
          icon:"",
          handler: () => {
              console.log("cancel");
          }
        }
      );
  
      let actionSheet = await this.actionSheetCtrl.create({
        header: 'Actions',
        buttons:myButtons
      });
      await actionSheet.present();
    }
    
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
    description.content = "Pick one of the best tango maestros in the world";
    document.getElementsByTagName('head')[0].appendChild(description);
  }

}
