import { Component, OnInit,Input,OnChanges } from '@angular/core';
import { NavController,ModalController,LoadingController,ActionSheetController } from '@ionic/angular';
import { MaestroProvider } from '../services/maestro/maestro';
import { ProfileProvider } from '../services/profile/profile';
import { PlaylistProvider } from '../services/playlist/playlist';
import { AuthProvider } from '../services/auth/auth';
import { VideoProvider } from '../services/video/video';
import { ModalPlaylistComponent } from '../modal-playlist/modal-playlist.component';

@Component({
  selector: 'app-item-video',
  templateUrl: './item-video.component.html',
  styleUrls: ['./item-video.component.scss'],
})
export class ItemVideoComponent implements OnInit,OnChanges {
  @Input() videos;
  @Input() role='visitor';
  @Input() display='classic';
  @Input() playlist='';

  //display=this.elementRef.nativeElement.getAttribute('display')

  constructor(
    private actionSheetCtrl:ActionSheetController,
    private loadingCtrl:LoadingController,
    public modalCtrl: ModalController,
    //public datepipe: DatePipe,
    private videoService:VideoProvider,
    public authService:AuthProvider,
    public profileService:ProfileProvider,
    public maestroService:MaestroProvider,
    private playlistService:PlaylistProvider,
    public navCtrl:NavController,        
  ) { 
    this.profileService.getUserRole().then(role=>{
      this.role=role;
    });
  }
  playVideo(video){
    this.videoService.playVideo(video);
  }

  ngOnChanges() {
  }

  removeTopVideo(video){
    this.videoService.removeTopVideo(video);
    this.removeVideoFromList(video);
  }

  removeVideoFromPlaylist(video,playlist){
    this.playlistService.removeVideo(video,playlist);
    this.removeVideoFromList(video);
  }

  removeVideoFromList(video){
    var index = this.videos.indexOf(video);
    if (index > -1) {
      this.videos.splice(index, 1);
    }
  }

  addTopVideo(video){
    this.videoService.addTopVideo(video);
  }

  async addPlaylistModal(video){
    const modal = await this.modalCtrl.create({component:ModalPlaylistComponent,componentProps: { video:video}});
    modal.present();
  }


  async actionVideo(video){

    var myButtons=[
    {
        text: 'Add to playlist',
        icon: "add",
        handler: () => {
          this.addPlaylistModal(video);
        }
      }
    ];

    if(this.role=="admin"){
      myButtons.push(
        {
          text: 'Add to Top videos',
          icon :"star",
          handler: () => {
            this.videoService.addTopVideo(video);
          }
        },
        {
          text: 'Define as tango',
          icon:"settings",
          handler: () => {
            this.videoService.setType(video,"tango");
          }
        },
        {
          text: 'Define as vals',
          icon:"settings",
          handler: () => {
            this.videoService.setType(video,"vals");
          }
        },
        {
          text: 'Define as milonga',
          icon:"settings",
          handler: () => {
            this.videoService.setType(video,"milonga");
          }
        },
        {
          text: 'Define as Lesson',
          icon:"settings",
          handler: () => {
            this.videoService.setType(video,"lesson");
          }
        },
        {
          text: 'Define as other video type',
          icon:"settings",
          handler: () => {
            this.videoService.setType(video,"other");
          }
        },
        {
          text: 'Delete',
          icon:"remove-circle",
          handler: () => {
            this.removeVideoFromList(video);
            this.videoService.deleteVideo(video);
          }
        },
      );
    }

    myButtons.push(
      {
        text: 'Cancel',
        icon:"",
        handler: () => {
          console.log("cancel");
        }
      }
    );

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons:myButtons
    });

    
    actionSheet.present();
  }

  ngOnInit() {
    
  }

}
