import { Component, OnInit } from '@angular/core';
import { NavController,ModalController,ActionSheetController } from '@ionic/angular';
import { AuthProvider } from '../services/auth/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileProvider } from '../services/profile/profile';
import { Router } from '@angular/router';
import { ModalPlaylistEditComponent } from '../modal-playlist-edit/modal-playlist-edit.component';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.page.html',
  styleUrls: ['./playlist-list.page.scss'],
})
export class PlaylistListPage implements OnInit {


  public playlistForm: FormGroup;
  public listPlaylist = [];
  public namePl= "";
  public userId="";
  public role="visitor";
  displayConnect=false;
  
  constructor(
    public modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController ,
    public authService:AuthProvider,
    private profileService: ProfileProvider,
    private formBuilder:FormBuilder,
    public authProvider:AuthProvider,
    private router:Router
    ){ 
      this.profileService.getUserRole().then(role=>{
            this.role=role;
            if(role=="visitor")this.displayConnect=true;
            return role;
          }
      )

      /*
      this.profileService.getUserRole().then(role=>{
        this.role=role;
        }
      ).then(role=>{
        this.authService.lockAuth(role);
      });
  
      this.videos=this.playlistService.getVideosWithoutLoading();
      */

      this.profileService.getUserId().then(id=>{
        this.userId=id;
      });
      this.playlistForm = formBuilder.group({playlistName: ['']});

    }


  ionViewWillEnter(){
    this.getPlaylists();
}

addPlaylist(){
  if(this.playlistForm.value.playlistName!=null && this.playlistForm.value.playlistName!=""){
    var playlistName=this.namePl;
    this.namePl="";
    this.profileService.addPlaylist(playlistName);
    this.getPlaylists();
  }
}


getPlaylists(){
  this.profileService.getPlaylists().then(data => {
    this.listPlaylist=data;
  });
}

removePlaylist(playList){
  var result = confirm("Do you really want to delete this playlist ? ");
  if (result) {
    this.profileService.removePlaylist(playList);
    this.getPlaylists();
  }
}


showPlaylist(playList){
  let urlPL=`/tabs/playlist-user/${this.userId}/${playList.key}`;
  //urlPL=`/tabs/(home:playlist/NbtwzggJpfYmu1rN4lqdCNBBSVu1/${playList.key})`
  
  this.router.navigateByUrl(urlPL);
}


goToLogin(){
  this.router.navigateByUrl(`login`);
}



 async actionPlaylist(playlist){
  var myButtons=[
    {
      text: 'Modify playlist',
      icon: "settings",
      handler: async() => {
        const modal = await this.modalCtrl.create({component:ModalPlaylistEditComponent,componentProps: { playlist:playlist}});
        modal.present();
      }
    },{
      text: 'Delete Playlist',
      icon: "remove",
      handler: () => {
        this.removePlaylist(playlist);
      }
    }
  ];


  myButtons.push(
    {
      text: 'Cancel',
      icon:"",
      handler: () => {
         // console.log("cancel");
      }
    }
  );

  let actionSheet = await this.actionSheetCtrl.create({
    header: 'Actions',
    buttons:myButtons
  });
  
  actionSheet.present();
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
  description.content = "";
  document.getElementsByTagName('head')[0].appendChild(description);
}

  goToAbout():void{
    this.router.navigateByUrl(`about`);
  }


}
