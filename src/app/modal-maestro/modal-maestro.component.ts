import { Component, OnInit,Input } from '@angular/core';
import { NavController, NavParams,LoadingController,ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileProvider } from '../services/profile/profile';
import { MaestroProvider } from '../services/maestro/maestro';
import { AuthProvider } from '../services//auth/auth';
import { IMaestro } from '../interfaces/Maestro';


@Component({
  selector: 'app-modal-maestro',
  templateUrl: './modal-maestro.component.html',
  styleUrls: ['./modal-maestro.component.scss']
})
export class ModalMaestroComponent implements OnInit {
  public roleUser="user";
  public personKey:string;
  public key="";
  public personName: string;
  public name="";
  public personSurname: string;
  public surname="";
  public personNickname: string;
  public nickname="";
  public personRole : string;
  public role="";
  public personImage : string;
  public image="";
  public personSite:string;
  public siteweb="";
  public personFb:string;
  public fb="";
  public personWikipedia:string;
  public wikipedia="";
  public personHomonyme:boolean;
  public homonyme=false;
  public personDescription:string;
  public description="";
  public personSlug:string;
  public slug="";
  maestroNew=<IMaestro>{};
  public personForm: FormGroup;
  maestro=<IMaestro>{};
  @Input() maestroLoad=<IMaestro>{};
  constructor(
    public maestroService:MaestroProvider,
    public loadingCtrl:LoadingController,
    public authService:AuthProvider,
    private profileService: ProfileProvider,
    private formBuilder:FormBuilder,
    public authProvider:AuthProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalController:ModalController,
  ){ 

     this.profileService.getUserRole().then(role=>{
        this.roleUser=role;
      }
    );

    this.maestroLoad = this.navParams.data.maestro;

    this.personForm = formBuilder.group({
      personKey: [''],
      personNickname: [''],
      personSurname: [''],
      personHomonyme: [''],
      personName: [''],
      personSite: [''],
      personWikipedia: [''],
      personFb: [''],
      personDescription: [''],
      personImage: [''],
      personRole: [''],
      personSlug: [''],
    });

    if(this.maestroLoad){
      this.maestro=this.maestroLoad;
      this.name=this.maestro.name;
      this.key=this.maestro.key;
      this.surname=this.maestro.surname;
      this.nickname=this.maestro.nickname;
      this.fb=this.maestro.facebook;
      this.wikipedia=this.maestro.wikipedia;
      this.siteweb=this.maestro.siteweb;
      this.homonyme=this.maestro.homonyme;
      this.description=this.maestro.description;
      this.role=this.maestro.role;
      this.image=this.maestro.image;
      this.slug=this.maestro.slug;
    }

  }

  ionViewDidLoad() {
  }

  process(){
    
    if(this.key!= null)this.maestro.key=this.key;
    
    if(this.name!= null){
      this.maestro.name=this.name;
    }else{
      this.maestro.name="";
    }

    

    if(this.surname !=null){
      this.maestro.surname=this.surname;
    }else{
      this.maestro.surname="";
    }

    if(this.nickname!=null){
      this.maestro.nickname=this.nickname;
    }else{
      this.maestro.nickname="";
    }
    

    if(this.fb!=null){
      this.maestro.facebook=this.fb;
    }else{
      this.maestro.facebook="";
    }
    

    if(this.wikipedia!=null){
      this.maestro.wikipedia=this.wikipedia;
    }else{
      this.maestro.wikipedia="";
    }
    

    if(this.siteweb !=null){
      this.maestro.siteweb=this.siteweb;
    }else{
      this.maestro.siteweb="";
    }
    

    if(this.homonyme!=null){
      this.maestro.homonyme=this.homonyme;
    }else{
      this.maestro.homonyme=false;
    }
    

    if(this.description!=null){
      this.maestro.description=this.description;
    }else{
      this.maestro.description="";
    }

    if(this.maestro.role !=null){
      this.maestro.role=this.role;
    }else{
      this.maestro.role="";
    }

    if(this.image!=null){
      this.maestro.image=this.image;
    }else{
      this.maestro.image="";
    }
    
    if(this.slug!=null){
      this.maestro.slug=this.slug;
    }else{
      this.maestro.slug="";
    }
   


    if(this.key != ""){
      this.maestroService.editMaestro(this.maestro);
    }else{
      this.maestroService.newMaestro(this.maestro);
    } 
   
    //this.viewCtrl.dismiss();
    this.dismiss();
  }

  dismiss(){
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
