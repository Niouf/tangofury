(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FW2D:function(l,n,e){"use strict";e.d(n,"a",function(){return t}),e("SiGr");var t=function(){}},SiGr:function(l,n,e){"use strict";e.d(n,"a",function(){return o}),e("OO+k"),e("Rt4g"),e("TpLW"),e("qNh5"),e("qyVB"),e("dZuI");var t=function(l,n,e,t){return new(e||(e=Promise))(function(i,o){function a(l){try{s(t.next(l))}catch(l){o(l)}}function u(l){try{s(t.throw(l))}catch(l){o(l)}}function s(l){l.done?i(l.value):new e(function(n){n(l.value)}).then(a,u)}s((t=t.apply(l,n||[])).next())})},i=function(l,n){var e,t,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,t&&(i=2&o[0]?t.return:o[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,o[1])).done)return i;switch(t=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=n.call(l,a)}catch(l){o=[6,l],t=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=function(){function l(l,n,e,t,i,o,a,u,s,r,c,d){var h=this;this.router=l,this.actionSheetCtrl=n,this.loadingCtrl=e,this.modalCtrl=t,this.videoService=i,this.authService=o,this.profileService=a,this.maestroService=u,this.navCtrl=s,this.generalService=r,this.titleService=c,this.metaService=d,this.maestros=new Array,this.favoritesMaestros=new Array,this.displayTopVideos=4,this.videos=[],this.videosVals=[],this.videosMilongas=[],this.videosOthers=[],this.videosLessons=[],this.videosTango=[],this.topVideos=[],this.role="user",this.offsetAll=0,this.offsetVals=0,this.offsetMilongas=0,this.offsetOthers=0,this.offsetLessons=0,this.type="all",this.titleService.setTitle("Latest tango videos"),this.metaService.addTag({name:"description",content:"Watch the latest tango videos on Youtube. You can also filter by type : milonga, vals, tango ..."}),this.profileService.getUserRole().then(function(l){h.role=l}),this.loadInfos().then(function(){h.loadVideos(0),h.loadVals(0),h.loadMilongas(0),h.loadLessons(0),h.loadOthers(0)})}return l.prototype.ngOnInit=function(){try{document.querySelector("meta[name='description']").remove()}catch(l){}var l=document.createElement("meta");l.name="description",l.content="Watch all the latest tango videos uploaded on youtube",document.getElementsByTagName("head")[0].appendChild(l)},l.prototype.loadInfos=function(){return t(this,void 0,void 0,function(){return i(this,function(l){switch(l.label){case 0:return[4,this.generalService.initPage()];case 1:return l.sent(),this.role=this.profileService.returnRole(),this.favoritesMaestros=this.maestroService.getFavoritesMaestros(),this.topVideos=this.videoService.getTopvideos(0),[2]}})})},l.prototype.ionViewWillEnter=function(){},l.prototype.loadVideos=function(l){return t(this,void 0,void 0,function(){var n,e=this;return i(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Loading videos"})];case 1:return(n=t.sent()).present(),this.videoService.getVideos(null,null,l).then(function(l){l.forEach(function(l){var n=!0;e.videos.forEach(function(e){l.key==e.key&&(n=!1)}),1==n&&e.videos.push(l)}),n.dismiss()}),[2]}})})},l.prototype.loadVals=function(l){return t(this,void 0,void 0,function(){var n,e=this;return i(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Loading"})];case 1:return(n=t.sent()).present(),this.videoService.getVideos(null,"vals",l).then(function(l){l.forEach(function(l){var n=!0;e.videosVals.forEach(function(e){l.key==e.key&&(n=!1)}),1==n&&e.videosVals.push(l)}),n.dismiss()}),[2]}})})},l.prototype.loadMilongas=function(l){return t(this,void 0,void 0,function(){var n,e=this;return i(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Loading"})];case 1:return(n=t.sent()).present(),this.videoService.getVideos(null,"milonga",l).then(function(l){l.forEach(function(l){var n=!0;e.videosMilongas.forEach(function(e){l.key==e.key&&(n=!1)}),1==n&&e.videosMilongas.push(l)}),n.dismiss()}),[2]}})})},l.prototype.loadLessons=function(l){return t(this,void 0,void 0,function(){var n,e=this;return i(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Loading"})];case 1:return(n=t.sent()).present(),this.videoService.getVideos(null,"lesson",l).then(function(l){l.forEach(function(l){var n=!0;e.videosLessons.forEach(function(e){l.key==e.key&&(n=!1)}),1==n&&e.videosLessons.push(l)}),n.dismiss()}),[2]}})})},l.prototype.loadOthers=function(l){return t(this,void 0,void 0,function(){var n,e=this;return i(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Loading"})];case 1:return(n=t.sent()).present(),this.videoService.getVideos(null,"other",l).then(function(l){l.forEach(function(l){var n=!0;e.videosOthers.forEach(function(e){l.key==e.key&&(n=!1)}),1==n&&e.videosOthers.push(l)}),n.dismiss()}),[2]}})})},l.prototype.doRefresh=function(l){this.loadInfos().then(function(){l.target.complete()})},l.prototype.doInfinite=function(l,n,e){n+=20,"all"==e&&(this.loadVideos(n),this.offsetAll=n,l.target.complete()),"vals"==e&&(this.loadVals(n),this.offsetVals=n,l.target.complete()),"milonga"==e&&(this.loadMilongas(n),this.offsetMilongas=n,l.target.complete()),"lessons"==e&&(this.loadLessons(n),this.offsetLessons=n,l.target.complete()),"other"==e&&(this.loadOthers(n),this.offsetOthers=n,l.target.complete())},l.prototype.goToAbout=function(){this.router.navigateByUrl("about")},l}()},WIWR:function(l,n,e){"use strict";e.d(n,"a",function(){return E});var t=e("CcnG"),i=e("ra/t"),o=e("ntG5"),a=e("1t1w"),u=e("46K1"),s=e("aa6e"),r=e("Eq7r"),c=e("9opb"),d=e("qyVB"),h=e("qNh5"),f=e("TpLW"),v=e("Rt4g"),g=e("B6Tt"),p=e("tXrQ"),b=e("pWbT"),m=e("TGkX"),y=e("ZYCi"),R=e("uhuC"),S=e("gIcY"),w=e("Ip0R"),Q=e("SiGr"),C=e("dZuI"),L=e("ZYjt"),I=t.Pa({encapsulation:2,styles:[],data:{}});function T(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,7,"ion-list",[],null,null,null,i.Fa,i.v)),t.Qa(1,49152,null,0,o.L,[t.i,t.l],null,null),(l()(),t.Ra(2,0,null,0,1,"app-item-video",[],null,null,null,a.b,a.a)),t.Qa(3,638976,null,0,u.a,[s.a,r.a,c.a,d.a,h.a,f.a,v.a,g.a,p.a],{videos:[0,"videos"],role:[1,"role"],display:[2,"display"]},null),(l()(),t.Ra(4,0,null,0,3,"ion-infinite-scroll",[["loadingSpinner","bubbles"],["loadingText","Loading more data\u2026"]],null,[[null,"ionInfinite"]],function(l,n,e){var t=!0,i=l.component;return"ionInfinite"===n&&(t=!1!==i.doInfinite(e,i.offsetAll,"all")&&t),t},i.Ba,i.q)),t.Qa(5,49152,null,0,o.B,[t.i,t.l],null,null),(l()(),t.Ra(6,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,i.Aa,i.r)),t.Qa(7,49152,null,0,o.C,[t.i,t.l],null,null)],function(l,n){var e=n.component;l(n,3,0,e.videos,e.role,"classic")},null)}function V(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,8,"ion-list",[],null,null,null,i.Fa,i.v)),t.Qa(1,49152,null,0,o.L,[t.i,t.l],null,null),(l()(),t.Ra(2,0,null,0,1,"app-item-video",[],null,null,null,a.b,a.a)),t.Qa(3,638976,null,0,u.a,[s.a,r.a,c.a,d.a,h.a,f.a,v.a,g.a,p.a],{videos:[0,"videos"],role:[1,"role"],display:[2,"display"]},null),(l()(),t.Ra(4,0,null,0,4,"ion-infinite-scroll",[["loadingSpinner","bubbles"],["loadingText","Loading more data\u2026"]],null,[[null,"ionInfinite"]],function(l,n,e){var t=!0,i=l.component;return"ionInfinite"===n&&(t=!1!==i.doInfinite(e,i.offsetVals,"vals")&&t),t},i.Ba,i.q)),t.Qa(5,49152,null,0,o.B,[t.i,t.l],null,null),(l()(),t.gb(-1,0,[" > "])),(l()(),t.Ra(7,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,i.Aa,i.r)),t.Qa(8,49152,null,0,o.C,[t.i,t.l],null,null)],function(l,n){var e=n.component;l(n,3,0,e.videosVals,e.role,"classic")},null)}function B(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,7,"ion-list",[],null,null,null,i.Fa,i.v)),t.Qa(1,49152,null,0,o.L,[t.i,t.l],null,null),(l()(),t.Ra(2,0,null,0,1,"app-item-video",[],null,null,null,a.b,a.a)),t.Qa(3,638976,null,0,u.a,[s.a,r.a,c.a,d.a,h.a,f.a,v.a,g.a,p.a],{videos:[0,"videos"],role:[1,"role"],display:[2,"display"]},null),(l()(),t.Ra(4,0,null,0,3,"ion-infinite-scroll",[["loadingSpinner","bubbles"],["loadingText","Loading more data\u2026"]],null,[[null,"ionInfinite"]],function(l,n,e){var t=!0,i=l.component;return"ionInfinite"===n&&(t=!1!==i.doInfinite(e,i.offsetMilongas,"milonga")&&t),t},i.Ba,i.q)),t.Qa(5,49152,null,0,o.B,[t.i,t.l],null,null),(l()(),t.Ra(6,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,i.Aa,i.r)),t.Qa(7,49152,null,0,o.C,[t.i,t.l],null,null)],function(l,n){var e=n.component;l(n,3,0,e.videosMilongas,e.role,"classic")},null)}function k(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,7,"ion-list",[],null,null,null,i.Fa,i.v)),t.Qa(1,49152,null,0,o.L,[t.i,t.l],null,null),(l()(),t.Ra(2,0,null,0,1,"app-item-video",[],null,null,null,a.b,a.a)),t.Qa(3,638976,null,0,u.a,[s.a,r.a,c.a,d.a,h.a,f.a,v.a,g.a,p.a],{videos:[0,"videos"],role:[1,"role"],display:[2,"display"]},null),(l()(),t.Ra(4,0,null,0,3,"ion-infinite-scroll",[["loadingSpinner","bubbles"],["loadingText","Loading more data\u2026"]],null,[[null,"ionInfinite"]],function(l,n,e){var t=!0,i=l.component;return"ionInfinite"===n&&(t=!1!==i.doInfinite(e,i.offsetLessons,"lesson")&&t),t},i.Ba,i.q)),t.Qa(5,49152,null,0,o.B,[t.i,t.l],null,null),(l()(),t.Ra(6,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,i.Aa,i.r)),t.Qa(7,49152,null,0,o.C,[t.i,t.l],null,null)],function(l,n){var e=n.component;l(n,3,0,e.videosLessons,e.role,"classic")},null)}function O(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,7,"ion-list",[],null,null,null,i.Fa,i.v)),t.Qa(1,49152,null,0,o.L,[t.i,t.l],null,null),(l()(),t.Ra(2,0,null,0,1,"app-item-video",[],null,null,null,a.b,a.a)),t.Qa(3,638976,null,0,u.a,[s.a,r.a,c.a,d.a,h.a,f.a,v.a,g.a,p.a],{videos:[0,"videos"],role:[1,"role"],display:[2,"display"]},null),(l()(),t.Ra(4,0,null,0,3,"ion-infinite-scroll",[["loadingSpinner","bubbles"],["loadingText","Loading more data\u2026"]],null,[[null,"ionInfinite"]],function(l,n,e){var t=!0,i=l.component;return"ionInfinite"===n&&(t=!1!==i.doInfinite(e,i.offsetOthers,"other")&&t),t},i.Ba,i.q)),t.Qa(5,49152,null,0,o.B,[t.i,t.l],null,null),(l()(),t.Ra(6,0,null,0,1,"ion-infinite-scroll-content",[],null,null,null,i.Aa,i.r)),t.Qa(7,49152,null,0,o.C,[t.i,t.l],null,null)],function(l,n){var e=n.component;l(n,3,0,e.videosOthers,e.role,"classic")},null)}function x(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,27,"ion-header",[],null,null,null,i.Y,i.o)),t.Qa(1,49152,null,0,o.y,[t.i,t.l],null,null),(l()(),t.Ra(2,0,null,0,1,"app-menu",[],null,null,null,b.b,b.a)),t.Qa(3,114688,null,0,m.a,[y.l],null,null),(l()(),t.Ra(4,0,null,0,23,"ion-toolbar",[["class","sub-bar"],["color","dark"],["no-border-top",""]],null,null,null,i.Ta,i.I)),t.Qa(5,49152,null,0,o.Xa,[t.i,t.l],{color:[0,"color"]},null),(l()(),t.Ra(6,0,null,0,21,"ion-segment",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,e){var i=!0,o=l.component;return"ionChange"===n&&(i=!1!==t.bb(l,7)._handleChangeEvent(e.target.value)&&i),"ionBlur"===n&&(i=!1!==t.bb(l,7)._handleBlurEvent()&&i),"ngModelChange"===n&&(i=!1!==(o.type=e)&&i),i},i.La,i.A)),t.Qa(7,16384,null,0,R.a,[t.l],null,null),t.eb(1024,null,S.f,function(l){return[l]},[R.a]),t.Qa(9,671744,null,0,S.j,[[8,null],[8,null],[8,null],[6,S.f]],{model:[0,"model"]},{update:"ngModelChange"}),t.eb(2048,null,S.g,null,[S.j]),t.Qa(11,16384,null,0,S.h,[[4,S.g]],null,null),t.Qa(12,49152,null,0,o.Fa,[t.i,t.l],null,null),(l()(),t.Ra(13,0,null,0,2,"ion-segment-button",[["value","all"]],null,null,null,i.Ka,i.B)),t.Qa(14,49152,null,0,o.Ga,[t.i,t.l],{value:[0,"value"]},null),(l()(),t.gb(-1,0,[" All "])),(l()(),t.Ra(16,0,null,0,2,"ion-segment-button",[["value","vals"]],null,null,null,i.Ka,i.B)),t.Qa(17,49152,null,0,o.Ga,[t.i,t.l],{value:[0,"value"]},null),(l()(),t.gb(-1,0,[" Vals "])),(l()(),t.Ra(19,0,null,0,2,"ion-segment-button",[["value","milonga"]],null,null,null,i.Ka,i.B)),t.Qa(20,49152,null,0,o.Ga,[t.i,t.l],{value:[0,"value"]},null),(l()(),t.gb(-1,0,[" Milongas "])),(l()(),t.Ra(22,0,null,0,2,"ion-segment-button",[["value","lesson"]],null,null,null,i.Ka,i.B)),t.Qa(23,49152,null,0,o.Ga,[t.i,t.l],{value:[0,"value"]},null),(l()(),t.gb(-1,0,[" Lessons "])),(l()(),t.Ra(25,0,null,0,2,"ion-segment-button",[["value","other"]],null,null,null,i.Ka,i.B)),t.Qa(26,49152,null,0,o.Ga,[t.i,t.l],{value:[0,"value"]},null),(l()(),t.gb(-1,0,[" Others "])),(l()(),t.Ra(28,0,null,null,20,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,i.W,i.m)),t.Qa(29,49152,null,0,o.r,[t.i,t.l],null,null),(l()(),t.Ra(30,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],function(l,n,e){var t=!0;return"ionRefresh"===n&&(t=!1!==l.component.doRefresh(e)&&t),t},i.Ha,i.w)),t.Qa(31,49152,null,0,o.Y,[t.i,t.l],null,null),(l()(),t.Ra(32,0,null,0,1,"ion-refresher-content",[["pullingIcon","arrow-dropdown"],["pullingText","Pull to refresh"],["refreshingSpinner","circles"],["refreshingText","Refreshing..."]],null,null,null,i.Ga,i.x)),t.Qa(33,49152,null,0,o.Z,[t.i,t.l],{pullingIcon:[0,"pullingIcon"],pullingText:[1,"pullingText"],refreshingSpinner:[2,"refreshingSpinner"],refreshingText:[3,"refreshingText"]},null),(l()(),t.Ra(34,0,null,0,2,"div",[["class","show-when-lg"]],null,null,null,null,null)),(l()(),t.Ra(35,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.gb(-1,null,["Latest videos"])),(l()(),t.Ra(37,0,null,0,11,"div",[],null,null,null,null,null)),t.Qa(38,16384,null,0,w.n,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t.Ja(16777216,null,null,1,null,T)),t.Qa(40,278528,null,0,w.o,[t.R,t.O,w.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.Ja(16777216,null,null,1,null,V)),t.Qa(42,278528,null,0,w.o,[t.R,t.O,w.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.Ja(16777216,null,null,1,null,B)),t.Qa(44,278528,null,0,w.o,[t.R,t.O,w.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.Ja(16777216,null,null,1,null,k)),t.Qa(46,278528,null,0,w.o,[t.R,t.O,w.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.Ja(16777216,null,null,1,null,O)),t.Qa(48,278528,null,0,w.o,[t.R,t.O,w.n],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(l,n){var e=n.component;l(n,3,0),l(n,5,0,"dark"),l(n,9,0,e.type),l(n,14,0,"all"),l(n,17,0,"vals"),l(n,20,0,"milonga"),l(n,23,0,"lesson"),l(n,26,0,"other"),l(n,33,0,"arrow-dropdown","Pull to refresh","circles","Refreshing..."),l(n,38,0,e.type),l(n,40,0,"all"),l(n,42,0,"vals"),l(n,44,0,"milonga"),l(n,46,0,"lesson"),l(n,48,0,"other")},function(l,n){l(n,6,0,t.bb(n,11).ngClassUntouched,t.bb(n,11).ngClassTouched,t.bb(n,11).ngClassPristine,t.bb(n,11).ngClassDirty,t.bb(n,11).ngClassValid,t.bb(n,11).ngClassInvalid,t.bb(n,11).ngClassPending)})}var E=t.Na("page-last-videos",Q.a,function(l){return t.ib(0,[(l()(),t.Ra(0,0,null,null,1,"page-last-videos",[],null,null,null,x,I)),t.Qa(1,114688,null,0,Q.a,[y.l,s.a,r.a,c.a,d.a,h.a,f.a,v.a,p.a,C.a,L.i,L.h],null,null)],function(l,n){l(n,1,0)},null)},{},{},[])}}]);