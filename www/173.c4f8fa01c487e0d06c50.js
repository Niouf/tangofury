(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{OlGY:function(l,n,e){"use strict";e.r(n);var t=e("CcnG"),o=e("TpLW"),u=e("qNh5"),i=e("Rt4g"),a=e("B6Tt"),r=e("qyVB"),s=e("iqUP"),c=(e("OO+k"),function(l,n,e,t){return new(e||(e=Promise))(function(o,u){function i(l){try{r(t.next(l))}catch(l){u(l)}}function a(l){try{r(t.throw(l))}catch(l){u(l)}}function r(l){l.done?o(l.value):new e(function(n){n(l.value)}).then(i,a)}r((t=t.apply(l,n||[])).next())})}),d=function(l,n){var e,t,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,t=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(l,i)}catch(l){u=[6,l],t=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},p=function(){function l(l,n,e,t,o,u,i,a){var r=this;this.MaestroService=l,this.videosService=n,this.http=e,this.profileService=t,this.authService=o,this.router=u,this.platform=i,this.playlistService=a,this.role="visitor",this.resultImport="",this.resultClear="",this.importMaestro="",this.importNumMaestro=0,this.youtubeIdList=[],this.sitemap=[],this.profileService.getUserRole().then(function(l){r.role=l}),this.videosService.setVideos([]),this.videosService.loadAllVideos().then(function(l){r.videosService.getAllVideos().forEach(function(l){r.youtubeIdList.push(l.youtubeId)})})}return l.prototype.clearVideos=function(){return c(this,void 0,void 0,function(){var l,n,e=this;return d(this,function(t){switch(t.label){case 0:return n=0,[4,this.videosService.loadAllVideos().then(function(n){l=n})];case 1:return t.sent(),l.forEach(function(t){e.resultClear="Traitement video "+ ++n+"/"+l.length,l.forEach(function(l){t.youtubeId==l.youtubeId&&t.key!=l.key&&1!=l.topVideo&&(console.log("doublon "+l.title),e.videosService.deleteVideo(l))})}),[2]}})})},l.prototype.importVideos=function(){var l=this;this.http.get("https://www.tango-agenda.com/web/app_dev.php/fr/imports-youtube").subscribe(function(n){l.resultImport="Imports completed"},function(n){l.resultImport="Imports completed"},function(){l.resultImport="Imports completed"}),this.resultImport="Loading ... please wait.";var n=this.MaestroService.getMaestros();0==n.length?this.MaestroService.loadMaestros(new Date).then(function(e){l.MaestroService.setMaestros(e),l.launchImport(n=e)}):this.launchImport(n)},l.prototype.launchImport=function(l){return c(this,void 0,void 0,function(){var n,e,t,o,u,i,a,r=this;return d(this,function(s){switch(s.label){case 0:n=1,e="AIzaSyDjZZJFivBihtQBNWhlY3s8HTci9YJ8vw0",t=0,o=l,s.label=1;case 1:return t<o.length?(i=(u=o[t]).surname+" "+u.name,u.nickname&&(i=i+" "+u.nickname),1==u.homonyme&&(i+=" tango"),a="https://www.googleapis.com/youtube/v3/search?key="+e+"&order=date&maxResults=50&part=snippet&q="+i,this.importMaestro=u.surname+" "+u.name,this.resultImport="Loading ... please wait.  - "+this.importMaestro+" "+n+"/"+l.length,[4,this.getVideoFromSearch(a,u)]):[3,4];case 2:s.sent(),n++,s.label=3;case 3:return t++,[3,1];case 4:return this.resultImport="Termin\xe9 ! ",this.videosService.loadAllVideos().then(function(l){l&&r.videosService.setVideos(l),r.resultImport="Termin\xe9 ! Update des videos termin\xe9 ."}),[2]}})})},l.prototype.getVideoFromSearch=function(l,n){var e=this;return new Promise(function(t){e.videosService.getVideos(n,null,1e7).then(function(o){var u=[];o.forEach(function(l){u.push(l.youtubeId)}),e.http.get(l,n).subscribe(function(l){l.items.forEach(function(l){var o=e.hydrateVideo(l);o.youtubeId&&(e.youtubeIdList.indexOf(o.youtubeId)>-1||null!==o.youtubeId&&""!==o.youtubeId&&s.database().ref("videos/").push(o).then(function(l){o.key=l.key,e.youtubeIdList.push(o.youtubeId)}),u.indexOf(o.youtubeId)>-1||(s.database().ref("/maestros/"+n.key+"/videos/").push(o),u.unshift(o)),t("done"))})},function(l){console.log(l)},function(){})})})},l.prototype.hydrateVideo=function(l){var n={};return n.title=l.snippet.title,n.youtubeId="",l.id.videoId?n.youtubeId=l.id.videoId:l.videoId&&(n.youtubeId=l.videoId),n.urlImage=l.snippet.thumbnails.high.url,n.datePublication=l.snippet.publishedAt,n.description=l.snippet.description,n.importUser="bot",n.topVideo=!1,n.type="",n.title&&(n.title.toLowerCase().indexOf("vals")>-1&&(n.type="vals"),n.title.toLowerCase().indexOf("waltz")>-1&&(n.type="vals"),n.title.toLowerCase().indexOf("milonga")>-1&&(n.type="milonga"),n.title.toLowerCase().indexOf("workshop")>-1&&(n.type="lesson"),n.title.toLowerCase().indexOf("lesson")>-1&&(n.type="lesson"),n.title.toLowerCase().indexOf("class")>-1&&(n.type="lesson")),n.type||n.description&&(n.description.toLowerCase().indexOf("vals")>-1&&(n.type="vals"),n.description.toLowerCase().indexOf("waltz")>-1&&(n.type="vals"),n.description.toLowerCase().indexOf("milonga")>-1&&(n.type="milonga"),n.description.toLowerCase().indexOf("workshop")>-1&&(n.type="lesson"),n.description.toLowerCase().indexOf("lesson")>-1&&(n.type="lesson"),n.description.toLowerCase().indexOf("class")>-1&&(n.type="lesson")),n.valid=!0,n.dateAdd=this.formatDate(new Date),n},l.prototype.formatDate=function(l){var n=l.getMonth()+1,e=l.getDate();return[l.getFullYear(),(n>9?"":"0")+n,(e>9?"":"0")+e].join("-")},l.prototype.logOut=function(){this.authService.logoutUser(),this.profileService.setRole("visitor"),this.router.navigateByUrl("login")},l.prototype.rateTF=function(){window.open("https://play.google.com/store/apps/details?id=tango.fury")},l.prototype.generateSitemap=function(){var l=["https://www.tangofury.com/tabs/(home:home)","https://www.tangofury.com/tabs/(latest:latest)","https://www.tangofury.com/tabs/(tango-maestros:tango-maestros)"];return this.playlistService.getSelections().then(function(n){n.forEach(function(n){l.push("https://www.tangofury.com/tabs/(home:selection/NbtwzggJpfYmu1rN4lqdCNBBSVu1/"+n.key+")")})}),this.MaestroService.getMaestros().forEach(function(n){l.push("https://www.tangofury.com/tabs/(tango-maestros:maestro-details/"+n.slug+")")}),l},l.prototype.ngOnInit=function(){var l=this;this.sitemap=this.generateSitemap();try{document.querySelector("meta[name='description']").remove()}catch(l){}var n=document.createElement("meta");n.name="description",n.content="Informations about the Tango Fury project",document.getElementsByTagName("head")[0].appendChild(n),this.inscBackAction=this.platform.backButton.subscribe(function(){l.element=document.getElementById("backButton"),l.element.click()},function(l){console.log("\n\nERROR:\n"+l.message+"\n\n")})},l}(),h=function(){},f=e("pMnS"),m=e("ra/t"),v=e("ntG5"),y=e("M9A9"),b=e("ZYCi"),g=e("Ip0R"),w=e("CI40"),k=e("fHOL"),V=e("tXrQ"),I=e("t/Na"),R=e("YxxD"),S=t.Pa({encapsulation:0,styles:[[""]],data:{}});function Q(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,15,"ion-card",[],null,null,null,m.V,m.f)),t.Qa(1,49152,null,0,v.h,[t.l],null,null),(l()(),t.Ra(2,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,m.S,m.h)),t.Qa(3,49152,null,0,v.j,[t.l],null,null),(l()(),t.Ra(4,0,null,0,1,"ion-icon",[["name","settings"]],null,null,null,m.Ea,m.s)),t.Qa(5,49152,null,0,v.A,[t.l],{name:[0,"name"]},null),(l()(),t.gb(-1,0,[" Parameters "])),(l()(),t.Ra(7,0,null,0,8,"ion-card-content",[],null,null,null,m.R,m.g)),t.Qa(8,49152,null,0,v.i,[t.l],null,null),(l()(),t.Ra(9,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Lougout from Tango Fury ?"])),(l()(),t.Ra(11,0,null,0,4,"p",[["class","center"]],null,null,null,null,null)),(l()(),t.Ra(12,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(l,n,e){var o=!0,u=l.component;return"click"===n&&(o=!1!==t.bb(l,14).onClick(e)&&o),"click"===n&&(o=!1!==u.logOut()&&o),o},m.P,m.d)),t.Qa(13,49152,null,0,v.f,[t.l],null,null),t.Qa(14,16384,null,0,y.a,[[2,b.l],t.l],null,null),(l()(),t.gb(-1,0,[" Logout "]))],function(l,n){l(n,5,0,"settings")},null)}function T(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,23,"ion-card",[],null,null,null,m.V,m.f)),t.Qa(1,49152,null,0,v.h,[t.l],null,null),(l()(),t.Ra(2,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,m.S,m.h)),t.Qa(3,49152,null,0,v.j,[t.l],null,null),(l()(),t.Ra(4,0,null,0,1,"ion-icon",[["name","sync"]],null,null,null,m.Ea,m.s)),t.Qa(5,49152,null,0,v.A,[t.l],{name:[0,"name"]},null),(l()(),t.gb(-1,0,[" Administration "])),(l()(),t.Ra(7,0,null,0,16,"ion-card-content",[],null,null,null,m.R,m.g)),t.Qa(8,49152,null,0,v.i,[t.l],null,null),(l()(),t.Ra(9,0,null,0,6,"p",[["class","center"]],null,null,null,null,null)),(l()(),t.Ra(10,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(l,n,e){var o=!0,u=l.component;return"click"===n&&(o=!1!==t.bb(l,12).onClick(e)&&o),"click"===n&&(o=!1!==u.importVideos()&&o),o},m.P,m.d)),t.Qa(11,49152,null,0,v.f,[t.l],null,null),t.Qa(12,16384,null,0,y.a,[[2,b.l],t.l],null,null),(l()(),t.gb(-1,0,[" Import "])),(l()(),t.Ra(14,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.gb(15,null,["",""])),(l()(),t.Ra(16,0,null,0,0,"hr",[],null,null,null,null,null)),(l()(),t.Ra(17,0,null,0,6,"p",[["class","center"]],null,null,null,null,null)),(l()(),t.Ra(18,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(l,n,e){var o=!0,u=l.component;return"click"===n&&(o=!1!==t.bb(l,20).onClick(e)&&o),"click"===n&&(o=!1!==u.clearVideos()&&o),o},m.P,m.d)),t.Qa(19,49152,null,0,v.f,[t.l],null,null),t.Qa(20,16384,null,0,y.a,[[2,b.l],t.l],null,null),(l()(),t.gb(-1,0,[" Clear multiple items "])),(l()(),t.Ra(22,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.gb(23,null,["",""]))],function(l,n){l(n,5,0,"sync")},function(l,n){var e=n.component;l(n,15,0,e.resultImport),l(n,23,0,e.resultClear)})}function O(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.gb(1,null,[" "," "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function C(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,10,"ion-card",[],null,null,null,m.V,m.f)),t.Qa(1,49152,null,0,v.h,[t.l],null,null),(l()(),t.Ra(2,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,m.S,m.h)),t.Qa(3,49152,null,0,v.j,[t.l],null,null),(l()(),t.Ra(4,0,null,0,1,"ion-icon",[["name","world"]],null,null,null,m.Ea,m.s)),t.Qa(5,49152,null,0,v.A,[t.l],{name:[0,"name"]},null),(l()(),t.gb(-1,0,[" Sitemap "])),(l()(),t.Ra(7,0,null,0,3,"ion-card-content",[],null,null,null,m.R,m.g)),t.Qa(8,49152,null,0,v.i,[t.l],null,null),(l()(),t.Ja(16777216,null,0,1,null,O)),t.Qa(10,278528,null,0,g.j,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var e=n.component;l(n,5,0,"world"),l(n,10,0,e.sitemap)},null)}function x(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,11,"ion-header",[],null,null,null,m.Ca,m.q)),t.Qa(1,49152,null,0,v.y,[t.l],null,null),(l()(),t.Ra(2,0,null,0,9,"ion-toolbar",[["color","dark"]],null,null,null,m.Xa,m.K)),t.Qa(3,49152,null,0,v.Xa,[t.l],{color:[0,"color"]},null),(l()(),t.Ra(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,m.Q,m.e)),t.Qa(5,49152,null,0,v.g,[],null,null),(l()(),t.Ra(6,0,null,0,2,"ion-back-button",[["defaultHref","/"],["id","backButton"]],null,[[null,"click"]],function(l,n,e){var o=!0;return"click"===n&&(o=!1!==t.bb(l,8).onClick(e)&&o),o},m.N,m.b)),t.Qa(7,49152,null,0,v.c,[t.l],{defaultHref:[0,"defaultHref"]},null),t.Qa(8,16384,null,0,w.a,[[2,b.l],[2,k.a],V.a,t.l],{defaultHref:[0,"defaultHref"]},null),(l()(),t.Ra(9,0,null,0,2,"ion-title",[["class","center"]],null,null,null,m.Wa,m.L)),t.Qa(10,49152,null,0,v.Ya,[t.l],null,null),(l()(),t.gb(-1,0,["About"])),(l()(),t.Ra(12,0,null,null,44,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,m.Y,m.m)),t.Qa(13,49152,null,0,v.r,[t.l],null,null),(l()(),t.Ra(14,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["About Tango Fury"])),(l()(),t.Ra(16,0,null,0,18,"ion-card",[],null,null,null,m.V,m.f)),t.Qa(17,49152,null,0,v.h,[t.l],null,null),(l()(),t.Ra(18,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,m.S,m.h)),t.Qa(19,49152,null,0,v.j,[t.l],null,null),(l()(),t.Ra(20,0,null,0,1,"ion-icon",[["name","heart"]],null,null,null,m.Ea,m.s)),t.Qa(21,49152,null,0,v.A,[t.l],{name:[0,"name"]},null),(l()(),t.gb(-1,0,[" Do you like Tango Fury ? "])),(l()(),t.Ra(23,0,null,0,11,"ion-card-content",[],null,null,null,m.R,m.g)),t.Qa(24,49152,null,0,v.i,[t.l],null,null),(l()(),t.Ra(25,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Give some "])),(l()(),t.Ra(27,0,null,null,1,"ion-icon",[["name","star"]],null,null,null,m.Ea,m.s)),t.Qa(28,49152,null,0,v.A,[t.l],{name:[0,"name"]},null),(l()(),t.gb(-1,null,[" to Tango Fury on the Google Play Store ! :) "])),(l()(),t.Ra(30,0,null,0,4,"p",[["class","center"]],null,null,null,null,null)),(l()(),t.Ra(31,0,null,null,3,"ion-button",[],null,[[null,"click"]],function(l,n,e){var o=!0,u=l.component;return"click"===n&&(o=!1!==t.bb(l,33).onClick(e)&&o),"click"===n&&(o=!1!==u.rateTF()&&o),o},m.P,m.d)),t.Qa(32,49152,null,0,v.f,[t.l],null,null),t.Qa(33,16384,null,0,y.a,[[2,b.l],t.l],null,null),(l()(),t.gb(-1,0,[" Rate Tango Fury "])),(l()(),t.Ra(35,0,null,0,15,"ion-card",[],null,null,null,m.V,m.f)),t.Qa(36,49152,null,0,v.h,[t.l],null,null),(l()(),t.Ra(37,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,m.S,m.h)),t.Qa(38,49152,null,0,v.j,[t.l],null,null),(l()(),t.Ra(39,0,null,0,1,"ion-icon",[["name","information-circle"]],null,null,null,m.Ea,m.s)),t.Qa(40,49152,null,0,v.A,[t.l],{name:[0,"name"]},null),(l()(),t.gb(-1,0,[" About "])),(l()(),t.Ra(42,0,null,0,8,"ion-card-content",[],null,null,null,m.R,m.g)),t.Qa(43,49152,null,0,v.i,[t.l],null,null),(l()(),t.Ra(44,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["This app has been backed with love by Fabien Grignoux. If you have any comment or suggestion please email me at fab.grignoux@gmail.com or join me on "])),(l()(),t.Ra(46,0,null,null,1,"a",[["href","https://www.facebook.com/fabien.grignoux"]],null,null,null,null,null)),(l()(),t.gb(-1,null,["Facebook"])),(l()(),t.gb(-1,null,["."])),(l()(),t.Ra(49,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Hope to see you on the dancefloor ! :)"])),(l()(),t.Ja(16777216,null,0,1,null,Q)),t.Qa(52,16384,null,0,g.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Ja(16777216,null,0,1,null,T)),t.Qa(54,16384,null,0,g.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null),(l()(),t.Ja(16777216,null,0,1,null,C)),t.Qa(56,16384,null,0,g.k,[t.R,t.O],{ngIf:[0,"ngIf"]},null)],function(l,n){var e=n.component;l(n,3,0,"dark"),l(n,7,0,"/"),l(n,8,0,"/"),l(n,21,0,"heart"),l(n,28,0,"star"),l(n,40,0,"information-circle"),l(n,52,0,"visitor"!=e.role),l(n,54,0,"admin"==e.role),l(n,56,0,"admin"==e.role)},null)}var L=t.Na("app-about",p,function(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,1,"app-about",[],null,null,null,x,S)),t.Qa(1,114688,null,0,p,[i.a,r.a,I.c,o.a,u.a,b.l,R.a,a.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Z=e("gIcY"),E=e("95zI"),A=e("9opb"),P=e("apKv"),B=e("B4/3");e.d(n,"AboutPageModuleNgFactory",function(){return M});var M=t.Oa(h,[],function(l){return t.Ya([t.Za(512,t.k,t.Ea,[[8,[f.a,L]],[3,t.k],t.z]),t.Za(4608,g.m,g.l,[t.w,[2,g.v]]),t.Za(4608,Z.o,Z.o,[]),t.Za(4608,E.a,E.a,[t.B,t.g]),t.Za(4608,A.a,A.a,[E.a,t.k,t.s]),t.Za(4608,P.a,P.a,[E.a,t.k,t.s]),t.Za(4608,I.h,I.n,[g.c,t.D,I.l]),t.Za(4608,I.o,I.o,[I.h,I.m]),t.Za(5120,I.a,function(l){return[l]},[I.o]),t.Za(4608,I.k,I.k,[]),t.Za(6144,I.i,null,[I.k]),t.Za(4608,I.g,I.g,[I.i]),t.Za(6144,I.b,null,[I.g]),t.Za(4608,I.f,I.j,[I.b,t.s]),t.Za(4608,I.c,I.c,[I.f]),t.Za(1073742336,g.b,g.b,[]),t.Za(1073742336,Z.m,Z.m,[]),t.Za(1073742336,Z.e,Z.e,[]),t.Za(1073742336,B.a,B.a,[]),t.Za(1073742336,I.e,I.e,[]),t.Za(1073742336,I.d,I.d,[]),t.Za(1073742336,b.m,b.m,[[2,b.s],[2,b.l]]),t.Za(1073742336,h,h,[]),t.Za(256,I.l,"XSRF-TOKEN",[]),t.Za(256,I.m,"X-XSRF-TOKEN",[]),t.Za(1024,b.j,function(){return[[{path:"",component:p}]]},[])])})},qyVB:function(l,n,e){"use strict";e.d(n,"a",function(){return s}),e("OO+k");var t=e("iqUP"),o=e("TpLW"),u=e("Rt4g"),i=e("CcnG"),a=e("Eq7r"),r=e("YxxD"),s=function(){function l(l,n,e,t){this.loadingCtrl=l,this.profileService=n,this.maestroService=e,this.platform=t,this.videos=new Array,this.topVideos=[],this.allVideos=[],this.allMilongas=[],this.allVals=[],this.allOthers=[],this.allLessons=[],this.limitOffset=12}return l.prototype.launchVideo=function(l){window.open("https://www.youtube.com/watch?v="+l.youtubeId)},l.prototype.getVideos=function(l,n,e,o){var u=this;return void 0===n&&(n=""),void 0===e&&(e=0),void 0===o&&(o=!1),new Promise(function(i){if(null==l)if(null==n)if(1==o)var a=t.database().ref("/videos").orderByChild("topVideo").equalTo(1).limitToLast(e+12);else a=t.database().ref("/videos").orderByChild("datePublication").limitToLast(e+12);else a=t.database().ref("/videos").orderByChild("type").equalTo(n).limitToLast(e+12);else a=null==n?t.database().ref("maestros/"+l.key+"/videos").orderByChild("datePublication").limitToLast(e+12):t.database().ref("maestros/"+l.key+"/videos").orderByChild("type").equalTo(n).limitToLast(e+12);var r=u.profileService.getVideosWatched();a.once("value").then(function(l){var n=[];l.forEach(function(l){var e={key:l.key,id:l.child("id").val(),title:l.child("title").val(),youtubeId:l.child("youtubeId").val(),urlImage:l.child("urlImage").val(),datePublication:l.child("datePublication").val(),description:l.child("description").val(),importUser:l.child("importUser").val(),topVideo:l.child("topVideo").val(),type:l.child("type").val(),valid:l.child("valid").val(),dateAdd:l.child("dateAdd").val(),seen:!1};r.indexOf(e.youtubeId)>-1&&(e.seen=!0),e.valid&&n.push(e)}),i(n.length>0?n.reverse():[])})})},l.prototype.loadAllVideos=function(){var l=this;return new Promise(function(n,e){t.database().ref("/videos").orderByChild("datePublication").once("value").then(function(e){var t=[],o=[];e.forEach(function(l){var n={key:l.key,id:l.child("id").val(),title:l.child("title").val(),youtubeId:l.child("youtubeId").val(),urlImage:l.child("urlImage").val(),datePublication:l.child("datePublication").val(),description:l.child("description").val(),importUser:l.child("importUser").val(),topVideo:l.child("topVideo").val(),type:l.child("type").val(),valid:l.child("valid").val(),dateAdd:l.child("dateAdd").val(),seen:!1};n.valid&&(t.push(n),n.topVideo&&o.push(n))}),t.length>0?(l.allVideos=t,l.topVideos=o,l.allVideos.reverse(),n(l.allVideos)):n(null)})})},l.prototype.addToVideos=function(l){this.allVideos.unshift(l)},l.prototype.setVideos=function(l){this.allVideos=l;for(var n=0,e=this.allVideos;n<e.length;n++){var t=e[n];"milonga"==t.type&&this.allMilongas.push(t),"vals"==t.type&&this.allVals.push(t),"other"==t.type&&this.allOthers.push(t),"lesson"==t.type&&this.allLessons.push(t)}},l.prototype.getAllVideos=function(){return this.allVideos},l.prototype.presentLoading=function(l){return n=this,void 0,t=function(){return function(l,n){var e,t,o,u,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(e)throw new TypeError("Generator is already executing.");for(;i;)try{if(e=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return i.label++,{value:u[1],done:!1};case 5:i.label++,t=u[1],u=[0];continue;case 7:u=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){i=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){i.label=u[1];break}if(6===u[0]&&i.label<o[1]){i.label=o[1],o=u;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(u);break}o[2]&&i.ops.pop(),i.trys.pop();continue}u=n.call(l,i)}catch(l){u=[6,l],t=0}finally{e=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,function(n){switch(n.label){case 0:return[4,this.loadingCtrl.create({message:l,duration:500})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})},new((e=void 0)||(e=Promise))(function(l,o){function u(l){try{a(t.next(l))}catch(l){o(l)}}function i(l){try{a(t.throw(l))}catch(l){o(l)}}function a(n){n.done?l(n.value):new e(function(l){l(n.value)}).then(u,i)}a((t=t.apply(n,[])).next())});var n,e,t},l.prototype.getTopvideos=function(l){return this.topVideos.slice(l,l+this.limitOffset)},l.prototype.setTopVideos=function(l){this.topVideos=l},l.prototype.addTopVideo=function(l){this.presentLoading("Setting as a top video"),l.topVideo=1,t.database().ref("/videos/"+l.key).set(l),this.topVideos.unshift(l)},l.prototype.removeTopVideo=function(l){l.topVideo=0,t.database().ref("/videos/"+l.key).set(l)},l.prototype.playVideo=function(l){l.seen=!0,this.profileService.setVideoSeen(l),window.open("https://www.youtube.com/watch?v="+l.youtubeId)},l.prototype.setType=function(l,n){var e=this;return l.type=n,this.maestroService.getMaestros().forEach(function(t){e.findVideo(l,"maestros/"+t.key+"/videos","setType",n).then()}),this.findVideo(l,"videos","setType",n).then(),!0},l.prototype.deleteVideo=function(l){var n=this;this.maestroService.getMaestros().forEach(function(e){n.findVideo(l,"maestros/"+e.key+"/videos","delete",null).then()}),this.deleteGeneralVideo(l)},l.prototype.deleteGeneralVideo=function(l){t.database().ref("videos/"+l.key).set(null),console.log("deleting video "+l.title)},l.prototype.findVideo=function(l,n,e,o){return new Promise(function(u,i){t.database().ref(n).orderByChild("youtubeId").equalTo(l.youtubeId).once("value").then(function(u){u.forEach(function(u){"delete"==e&&(l.valid=0,t.database().ref(n+"/"+u.key).set(l),console.log("deleting "+l.title)),"setType"==e&&(l.type=o,t.database().ref(n+"/"+u.key).set(l))})})})},l.ngInjectableDef=i.V({factory:function(){return new l(i.Z(a.a),i.Z(o.a),i.Z(u.a),i.Z(r.a))},token:l,providedIn:"root"}),l}()}}]);