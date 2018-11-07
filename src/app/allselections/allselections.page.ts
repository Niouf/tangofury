import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { PlaylistProvider } from '../services/playlist/playlist';
import { IPlaylist } from '../interfaces/Playlist';
import { Router } from '@angular/router';
import { LoadingController  } from '@ionic/angular';

@Component({
  selector: 'app-allselections',
  templateUrl: './allselections.page.html',
  styleUrls: ['./allselections.page.scss'],
})
export class AllselectionsPage implements OnInit {

  selections = new Array<IPlaylist>();
  
  constructor(
    public playlistService:PlaylistProvider,
    private router:Router,
    private loadingCtrl: LoadingController,
  ) { 
    
  }

  goToPlaylist(playlist){
    this.router.navigateByUrl(`/tabs/(home:selection/NbtwzggJpfYmu1rN4lqdCNBBSVu1/${playlist.key})`);
  }

  ngOnInit() {
    this.loadAllSelections();
  }

  async loadAllSelections(){
    let loading = await this.loadingCtrl.create({
      message: 'Loading all selections... ',
    });
    loading.present();
    var storage = firebase.storage();

    this.playlistService.getSelections(1000).then((data)=>{
      data.forEach(selection => {

        if(selection.image.includes("selections")){
          this.selections.push(selection);
        }else{
          storage.ref("/selections/"+selection.image).getDownloadURL().then(imageFire=>{
            selection.image=imageFire;
            this.selections.push(selection);
            
          });
        }
        loading.dismiss();
      

      });
    });
  }

}
