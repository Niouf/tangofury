import { Component, OnInit , Inject} from '@angular/core';

import { ProfileProvider } from './../services/profile/profile';
import { AuthProvider } from '../services/auth/auth';
import { MaestroProvider } from '../services/maestro/maestro';
import { PlaylistProvider } from '../services/playlist/playlist';
import { IVideo } from '../interfaces/Video';
import { HttpClient } from '@angular/common/http';
//import { LoginPage } from "../login/login";
import { VideoProvider } from '../services/video/video';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  role="visitor";
  resultImport="";
  resultClear="";
  public importMaestro="";
  public importNumMaestro=0;
  public youtubeIdList=[];
  sitemap=[];
  inscBackAction: Subscription;
  element: HTMLElement;

constructor(
  private MaestroService:MaestroProvider,
  private videosService:VideoProvider,
  private http:HttpClient,
  private profileService:ProfileProvider,
  private authService:AuthProvider,
  private router:Router,
  public platform: Platform,
  private playlistService:PlaylistProvider,
  ) {
    
    this.profileService.getUserRole().then(role=>{
        this.role=role;
      }
    );
    

  //****************Pour réinitialiser les videos************************
  var eAll=0;
  if(eAll==1){
    var maestroList= this.MaestroService.getMaestros();
    firebase.database().ref(`videos/`).remove();

    for(var maestro of maestroList){
      firebase.database().ref(`maestros/${maestro.key}/videos/`).remove();
    }
  }
  var emptyArray=[];
  this.videosService.setVideos(emptyArray);


  if(eAll==0){
    //Initialise le tableau d'id Youtube
    this.videosService.loadAllVideos().then(result=>{
      this.videosService.getAllVideos().forEach(item=>{
        this.youtubeIdList.push(item.youtubeId);
      });
    })
  }
  
}

async clearVideos(){
  let eArray=[];
  let allVideos;
  let cpt=0;
  //get all videos
  await this.videosService.loadAllVideos().then(videos=>{
    allVideos=videos;
  });

  //check if videos have same id
  

  allVideos.forEach(needle=>{
    cpt++;
    this.resultClear="Traitement video "+cpt+ "/"+allVideos.length;
    allVideos.forEach(video=>{
      if(needle.youtubeId==video.youtubeId){
        
        if(needle.key != video.key){
          if(video.topVideo!=true){
            //supprime dans le general mais pas dans les maestros
            console.log("doublon "+video.title)
            this.videosService.deleteVideo(video);
            
            //supprime dans le general et dans le maestro
            //this.videosService.deleteVideo(video)
          }
        }
      }
    })
    
  });

}


importVideos(){

  var req=`https://www.tango-agenda.com/web/app_dev.php/fr/imports-youtube`;
  
  this.http.get(req).subscribe(
      result=>{
          this.resultImport="Imports completed";
      },
      error=>{
        this.resultImport="Imports completed";
      },
      ()=>{
        this.resultImport="Imports completed";
      }
  );
  

  //imports dans Firebase    

  this.resultImport="Loading ... please wait.";

  //Récupère la liste des maestros
  var maestroList= this.MaestroService.getMaestros();

  if(maestroList.length ==0){
    this.MaestroService.loadMaestros(new Date()).then(result=>{
      this.MaestroService.setMaestros(result);
      maestroList=result;
      this.launchImport(maestroList)
    });
  }else{
    this.launchImport(maestroList)
  }
}

async launchImport(maestroList){
  var cpt=1;
  
  var ytKey="AIzaSyDjZZJFivBihtQBNWhlY3s8HTci9YJ8vw0";

  for(var maestro of maestroList){

    var search=maestro.surname+" "+maestro.name;
    //var search2=maestro.nickname+" "+maestro.name;
    
    if(maestro.nickname)search=search+" "+maestro.nickname;

    if(maestro.homonyme==true)search=search + " tango";
    var req="https://www.googleapis.com/youtube/v3/search?key="+ytKey+"&order=date&maxResults=50&part=snippet&q="+search;
    
    this.importMaestro=maestro.surname +" "+maestro.name;
    this.resultImport="Loading ... please wait. " + " - " + this.importMaestro + " "+ cpt + "/" + maestroList.length;

    await this.getVideoFromSearch(req,maestro);  
    cpt++;  

    //if(cpt>2)break;
  }
  this.resultImport ="Terminé ! ";

  this.videosService.loadAllVideos().then(allVideos=>{
    if(allVideos){
      this.videosService.setVideos(allVideos);
    }
    this.resultImport = "Terminé ! Update des videos terminé .";
  });
}

getVideoFromSearch(req,maestro): Promise<any>{
  return new Promise((resolve) => {
    //d'abord récupérer les videos du maestro

    this.videosService.getVideos(maestro,null,10000000).then(
      response=>{
        var maestroVideos=[];;

        response.forEach(item=>{
          maestroVideos.push(item.youtubeId);
        });

        //lancement de la requete de recherche
        this.http.get(req,maestro).subscribe(
          data => {
            data['items'].forEach(item=>{

              var video=this.hydrateVideo(item);
              
              //this.MaestroService.getVideosMaestro(maestro);

              //test si la video existe
              if(video.youtubeId){
                //Noeud général
                if(this.youtubeIdList.indexOf(video.youtubeId)>-1){
                  //La vidéo existe dans le noeud général on fait rien
                }else{
                  //Ajout de la vidéo dans le noeud général
                  if ( video.youtubeId !==null && video.youtubeId !=="" ){
                      firebase.database().ref(`videos/`).push(video)
                      .then((snap) => {
                      
                        video.key=snap.key;

                        // ajout de l'id de la video dans le tableau d'id general
                        this.youtubeIdList.push(video.youtubeId);
                      });
                  }
                }

                //Noeud du maestro
                if(maestroVideos.indexOf(video.youtubeId)>-1){
                }else{
                  firebase.database().ref(`/maestros/${maestro.key}/videos/`).push(video);
                  maestroVideos.unshift(video);
                }
                  
                resolve("done");
              }
              
            });
          },
          err=>{console.log(err)},
          ()=>{
            //console.log("finit" + " " + maestro.name + " " + request )
          
              }
        );
        //Fin de la recherche youtube

      }
    );

    
  });
}


hydrateVideo(item){
  //var video = <IVideo>{};
  var video=<any>{};
  video.title=item.snippet.title;
  video.youtubeId="";
  if(item.id.videoId){
    video.youtubeId=item.id.videoId;
  }else{
    if(item.videoId)video.youtubeId=item.videoId;
  }
  
  video.urlImage=item.snippet.thumbnails.high.url;
  video.datePublication=item.snippet.publishedAt;
  video.description=item.snippet.description;
  video.importUser="bot";
  video.topVideo=false;
  video.type="";
  if(video.title){
    if(video.title.toLowerCase().indexOf("vals")>-1)video.type="vals";
    if(video.title.toLowerCase().indexOf("waltz")>-1)video.type="vals";
    if(video.title.toLowerCase().indexOf("milonga")>-1)video.type="milonga";
    if(video.title.toLowerCase().indexOf("workshop")>-1)video.type="lesson";
    if(video.title.toLowerCase().indexOf("lesson")>-1)video.type="lesson";
    if(video.title.toLowerCase().indexOf("class")>-1)video.type="lesson";
  }
  if(video.type){
    // on garde le type actuel
  }else{
    if(video.description){
      if(video.description.toLowerCase().indexOf("vals")>-1)video.type="vals";
      if(video.description.toLowerCase().indexOf("waltz")>-1)video.type="vals";
      if(video.description.toLowerCase().indexOf("milonga")>-1)video.type="milonga";
      if(video.description.toLowerCase().indexOf("workshop")>-1)video.type="lesson";
      if(video.description.toLowerCase().indexOf("lesson")>-1)video.type="lesson";
      if(video.description.toLowerCase().indexOf("class")>-1)video.type="lesson";
    }
  }


  video.valid=true;
  video.dateAdd=this.formatDate(new Date());

  return video;
}



formatDate(myDate){
  var mm = myDate.getMonth() + 1; // getMonth() is zero-based
  var dd = myDate.getDate();

  return [myDate.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
        ].join('-');
}

logOut(){
  this.authService.logoutUser();
  this.profileService.setRole("visitor");
  //this.router.navigateByUrl(`/tabs/(home:home)`);
  this.router.navigateByUrl(`login`);
}

rateTF(){
    window.open("https://play.google.com/store/apps/details?id=tango.fury");
}


generateSitemap(){
  let sitemap=[
   "https://www.tangofury.com/tabs/home",
   "https://www.tangofury.com/tabs/latest",
   "https://www.tangofury.com/tabs/tango-maestros",
   "https://www.tangofury.com/tabs/tango-selections-all",
  ]

  this.playlistService.getSelections().then((selections)=>{
    selections.forEach(selection=>{
      sitemap.push("https://www.tangofury.com/tabs/selection/NbtwzggJpfYmu1rN4lqdCNBBSVu1/"+selection.key)
    })
  });

  var maestroList= this.MaestroService.getMaestros();
  maestroList.forEach(maestro=>{
    sitemap.push("https://www.tangofury.com/tabs/tango-maestros/"+maestro.slug+"");
  })

  return sitemap;
}

  ngOnInit() {

    this.sitemap=this.generateSitemap();

    // Try to remove META-Tags
    try{
      document.querySelector("meta[name='description']").remove();
    } catch (e){
  
    }
  
    // Add the new META-Tags
    var description = document.createElement('meta');
    description.name = "description";
    description.content = "Informations about the Tango Fury project";
    document.getElementsByTagName('head')[0].appendChild(description);

    this.inscBackAction = this.platform.backButton.subscribe(() => {
      // Check this log in chrome: "chrome://inspect/#devices"             

      this.element = document.getElementById('backButton') as HTMLElement;
      this.element.click();
      // OR
      // this.router.navigate(['/anyPage']);

    }, error => {
      console.log('\n\nERROR:\n' + error.message + '\n\n');
    });
  }

}
