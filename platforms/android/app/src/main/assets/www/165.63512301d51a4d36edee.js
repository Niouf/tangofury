(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{PpLr:function(e,t,o){"use strict";o.d(t,"a",function(){return i});var i=function(){}},peAJ:function(e,t,o){"use strict";o.r(t),o.d(t,"PlaylistPageModuleNgFactory",function(){return b});var i=o("CcnG"),a=o("lxt6"),n=o("pMnS"),l=o("d/fU"),r=o("Ip0R"),s=o("gIcY"),d=o("95zI"),u=o("9opb"),c=o("apKv"),p=o("B4/3"),h=o("ZYCi"),f=o("MEWS"),v=o("PpLr"),y=o("Izuc"),b=i.Oa(a.a,[],function(e){return i.Ya([i.Za(512,i.k,i.Ea,[[8,[n.a,l.a]],[3,i.k],i.z]),i.Za(4608,r.m,r.l,[i.w,[2,r.v]]),i.Za(4608,s.o,s.o,[]),i.Za(4608,d.a,d.a,[i.B,i.g]),i.Za(4608,u.a,u.a,[d.a,i.k,i.s]),i.Za(4608,c.a,c.a,[d.a,i.k,i.s]),i.Za(1073742336,r.b,r.b,[]),i.Za(1073742336,s.m,s.m,[]),i.Za(1073742336,s.e,s.e,[]),i.Za(1073742336,p.a,p.a,[]),i.Za(1073742336,h.m,h.m,[[2,h.s],[2,h.l]]),i.Za(1073742336,f.a,f.a,[]),i.Za(1073742336,v.a,v.a,[]),i.Za(1073742336,a.a,a.a,[]),i.Za(1024,h.j,function(){return[[{path:"",component:y.a}]]},[])])})},qyVB:function(e,t,o){"use strict";o.d(t,"a",function(){return d}),o("OO+k");var i=o("iqUP"),a=o("TpLW"),n=o("Rt4g"),l=o("CcnG"),r=o("Eq7r"),s=o("YxxD"),d=function(){function e(e,t,o,i){this.loadingCtrl=e,this.profileService=t,this.maestroService=o,this.platform=i,this.videos=new Array,this.topVideos=[],this.allVideos=[],this.allMilongas=[],this.allVals=[],this.allOthers=[],this.allLessons=[],this.limitOffset=12}return e.prototype.launchVideo=function(e){window.open("https://www.youtube.com/watch?v="+e.youtubeId)},e.prototype.getVideos=function(e,t,o,a){var n=this;return void 0===t&&(t=""),void 0===o&&(o=0),void 0===a&&(a=!1),new Promise(function(l){if(null==e)if(null==t)if(1==a)var r=i.database().ref("/videos").orderByChild("topVideo").equalTo(1).limitToLast(o+12);else r=i.database().ref("/videos").orderByChild("datePublication").limitToLast(o+12);else r=i.database().ref("/videos").orderByChild("type").equalTo(t).limitToLast(o+12);else r=null==t?i.database().ref("maestros/"+e.key+"/videos").orderByChild("datePublication").limitToLast(o+12):i.database().ref("maestros/"+e.key+"/videos").orderByChild("type").equalTo(t).limitToLast(o+12);var s=n.profileService.getVideosWatched();r.once("value").then(function(e){var t=[];e.forEach(function(e){var o={key:e.key,id:e.child("id").val(),title:e.child("title").val(),youtubeId:e.child("youtubeId").val(),urlImage:e.child("urlImage").val(),datePublication:e.child("datePublication").val(),description:e.child("description").val(),importUser:e.child("importUser").val(),topVideo:e.child("topVideo").val(),type:e.child("type").val(),valid:e.child("valid").val(),dateAdd:e.child("dateAdd").val(),seen:!1};s.indexOf(o.youtubeId)>-1&&(o.seen=!0),o.valid&&t.push(o)}),l(t.length>0?t.reverse():[])})})},e.prototype.loadAllVideos=function(){var e=this;return new Promise(function(t,o){i.database().ref("/videos").orderByChild("datePublication").once("value").then(function(o){var i=[],a=[];o.forEach(function(e){var t={key:e.key,id:e.child("id").val(),title:e.child("title").val(),youtubeId:e.child("youtubeId").val(),urlImage:e.child("urlImage").val(),datePublication:e.child("datePublication").val(),description:e.child("description").val(),importUser:e.child("importUser").val(),topVideo:e.child("topVideo").val(),type:e.child("type").val(),valid:e.child("valid").val(),dateAdd:e.child("dateAdd").val(),seen:!1};t.valid&&(i.push(t),t.topVideo&&a.push(t))}),i.length>0?(e.allVideos=i,e.topVideos=a,e.allVideos.reverse(),t(e.allVideos)):t(null)})})},e.prototype.addToVideos=function(e){this.allVideos.unshift(e)},e.prototype.setVideos=function(e){this.allVideos=e;for(var t=0,o=this.allVideos;t<o.length;t++){var i=o[t];"milonga"==i.type&&this.allMilongas.push(i),"vals"==i.type&&this.allVals.push(i),"other"==i.type&&this.allOthers.push(i),"lesson"==i.type&&this.allLessons.push(i)}},e.prototype.getAllVideos=function(){return this.allVideos},e.prototype.presentLoading=function(e){return t=this,void 0,i=function(){return function(e,t){var o,i,a,n,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return n={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function r(n){return function(r){return function(n){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,i&&(a=2&n[0]?i.return:n[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[2&n[0],a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,i=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(!(a=(a=l.trys).length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(e){n=[6,e],i=0}finally{o=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,r])}}}(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:e,duration:500})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})},new((o=void 0)||(o=Promise))(function(e,a){function n(e){try{r(i.next(e))}catch(e){a(e)}}function l(e){try{r(i.throw(e))}catch(e){a(e)}}function r(t){t.done?e(t.value):new o(function(e){e(t.value)}).then(n,l)}r((i=i.apply(t,[])).next())});var t,o,i},e.prototype.getTopvideos=function(e){return this.topVideos.slice(e,e+this.limitOffset)},e.prototype.setTopVideos=function(e){this.topVideos=e},e.prototype.addTopVideo=function(e){this.presentLoading("Setting as a top video"),e.topVideo=1,i.database().ref("/videos/"+e.key).set(e),this.topVideos.unshift(e)},e.prototype.removeTopVideo=function(e){e.topVideo=0,i.database().ref("/videos/"+e.key).set(e)},e.prototype.playVideo=function(e){e.seen=!0,this.profileService.setVideoSeen(e),window.open("https://www.youtube.com/watch?v="+e.youtubeId)},e.prototype.setType=function(e,t){var o=this;return e.type=t,this.maestroService.getMaestros().forEach(function(i){o.findVideo(e,"maestros/"+i.key+"/videos","setType",t).then()}),this.findVideo(e,"videos","setType",t).then(),!0},e.prototype.deleteVideo=function(e){var t=this;this.maestroService.getMaestros().forEach(function(o){t.findVideo(e,"maestros/"+o.key+"/videos","delete",null).then()}),this.deleteGeneralVideo(e)},e.prototype.deleteGeneralVideo=function(e){i.database().ref("videos/"+e.key).set(null),console.log("deleting video "+e.title)},e.prototype.findVideo=function(e,t,o,a){return new Promise(function(n,l){i.database().ref(t).orderByChild("youtubeId").equalTo(e.youtubeId).once("value").then(function(n){n.forEach(function(n){"delete"==o&&(e.valid=0,i.database().ref(t+"/"+n.key).set(e),console.log("deleting "+e.title)),"setType"==o&&(e.type=a,i.database().ref(t+"/"+n.key).set(e))})})})},e.ngInjectableDef=l.V({factory:function(){return new e(l.Z(r.a),l.Z(a.a),l.Z(n.a),l.Z(s.a))},token:e,providedIn:"root"}),e}()}}]);