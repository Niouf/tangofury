import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PlaylistProvider } from '../services/playlist/playlist';
import { VideoProvider } from '../services/video/video';
import { ProfileProvider } from '../services/profile/profile';
import { Platform } from '@ionic/angular';
import { AuthProvider } from '../services/auth/auth';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
})
export class PlaylistPage implements OnInit {
  key : string;
  userKey : string;
  playlist:{};
  videos=[];
  role="visitor";

  constructor(
    private route: ActivatedRoute,
    public videoService:VideoProvider,
    public profileService:ProfileProvider,
    public playlistService:PlaylistProvider,
    public router:Router,
    public platform: Platform,
    public authService : AuthProvider,
  ) { 
    this.key=  this.route.snapshot.params['key'];

    this.userKey=  this.route.snapshot.params['userkey'];

    this.playlistService.getPlaylistById(this.userKey,this.key).then(result=>{
      this.playlist=result;
      return result;
    }).then(playlist=>{
      this.playlistService.getVideos(this.userKey,playlist).then((data)=>{
        this.videos=data;
      });
     }
    );

  }



  goToAbout():void{
    this.router.navigateByUrl(`about`);
  }

  goToHome():void{
    this.router.navigateByUrl(`home`);
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

  ngOnDestroy() {
    //this.inscBackButton.unsubscribe();
  }

}
