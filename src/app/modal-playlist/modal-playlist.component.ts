import { Component, OnInit } from '@angular/core';
import { NavController, NavParams,LoadingController,ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileProvider } from '../services/profile/profile';
import { AuthProvider } from '../services/auth/auth';
import { PlaylistProvider } from '../services/playlist/playlist';

@Component({
  selector: 'app-modal-playlist',
  templateUrl: './modal-playlist.component.html',
  styleUrls: ['./modal-playlist.component.scss']
})
export class ModalPlaylistComponent implements OnInit {

  video:{};
  public playlistForm: FormGroup;
  public listPlaylist = [];
  public namePl= "";
  public playlistName ="";

  constructor(
    public loadingCtrl:LoadingController,
    public authService:AuthProvider,
    private profileService: ProfileProvider,
    private formBuilder:FormBuilder,
    public authProvider:AuthProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalController: ModalController,
    public playlistService:PlaylistProvider,
  ) { 
    //récupère les données
    this.video = this.navParams.data;
    this.playlistForm = this.formBuilder.group({playlistName: ['']})

    this.getPlaylists();
  }

  addPlaylist(){
    this.playlistName = this.playlistForm['playlistName'];
    if(this.playlistForm.value.playlistName!=null && this.playlistForm.value.playlistName!=""){
      var playlistName=this.namePl;
      this.namePl="";
      this.profileService.addPlaylist(playlistName).then((ref)=>{
          this.profileService.addVideoToPlaylist(this.video,null,ref);
        }
      );
      this.modalController.dismiss();
      this.playlistService.addVideoToList(this.video);
      this.presentLoading("Creating and saving your playlist.");
    }
  }

  dismiss(){
    this.modalController.dismiss();
  }

  getPlaylists(){
    this.profileService.getPlaylists().then(data => {
      this.listPlaylist=data;
    });
  }

  addToPlaylist(playlist){
    this.profileService.addVideoToPlaylist(this.video,playlist);
    this.playlistService.addVideoToList(this.video);
    this.modalController.dismiss();
    this.presentLoading("Updating your playlist");
  }

  async presentLoading(message) {
    let loader = await this.loadingCtrl.create({
      message: message,
      duration: 500
    });
    await loader.present();
  }

  ngOnInit() {
  }

}
