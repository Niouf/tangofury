import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController,ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProfileProvider } from '../services/profile/profile';
import { PlaylistProvider } from '../services/playlist/playlist';
import { AuthProvider } from '../services/auth/auth';
import { IPlaylist } from '../interfaces/Playlist';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the ModalPlaylistEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-playlist-edit',
  templateUrl: 'modal-playlist-edit.component.html',
})
export class ModalPlaylistEditComponent {
  role="user";
  public playlistForm: FormGroup;
  public playlistName:string;
  public playlistSelection:boolean;
  public playlistDescription:string;
  public playlistImage:string;
  public namePl= "";
  public selectionPl= false;
  public descriptionPl="";
  public imagePl="";
  public playlist;
  public imageLoaded="";
  private selectedFile=null;

  constructor(public playlistService:PlaylistProvider,
    public loadingCtrl:LoadingController,
    public authService:AuthProvider,
    private profileService: ProfileProvider,
    private formBuilder:FormBuilder,
    public authProvider:AuthProvider,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private modalController:ModalController,
    private file:File,
    private transfer: FileTransfer,
    private fileChooser:FileChooser,
    private afStorage: AngularFireStorage,
    private http:HttpClient,
    ) {
    this.profileService.getUserRole().then(role=>{
        this.role=role;
      }
    );

    this.playlist = this.navParams.data.playlist;
    this.playlistForm = formBuilder.group({playlistName: [''],playlistDescription: [''],playlistImage: [''],playlistSelection: ['']});
    this.namePl=this.playlist.title;
    this.selectionPl=this.playlist.selection;
    this.descriptionPl=this.playlist.description;
    this.imagePl=this.playlist.image;
  }

  ionViewDidLoad() {
  }

  modifyPlaylist(){
    this.playlist.title=this.namePl;
    this.playlist.selection=this.selectionPl;
    this.playlist.description=this.descriptionPl;
    this.playlist.image=this.imagePl;
    this.profileService.editPlaylist(this.playlist);
    this.dismiss();
  }

  dismiss(){
    this.modalController.dismiss();
  }

  onFileSelected(event){
    this.selectedFile=event.target.files[0];
  }

  uploadToStorage(){
    
    this.afStorage.upload('/selections/'+this.selectedFile.name, this.selectedFile).then(msg=>{
      this.imagePl=this.selectedFile.name;
    });
  }
  

}
