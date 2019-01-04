(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"19mU":function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){}},TGkX:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(n){this.router=n}return n.prototype.goToAbout=function(){this.router.navigateByUrl("about")},n.prototype.ngOnInit=function(){},n}()},"a+0G":function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t("OO+k"),t("Rt4g"),t("TpLW");var e=t("ktxI"),u=(t("dZuI"),function(n,l,t,e){return new(t||(t=Promise))(function(u,a){function o(n){try{r(e.next(n))}catch(n){a(n)}}function i(n){try{r(e.throw(n))}catch(n){a(n)}}function r(n){n.done?u(n.value):new t(function(l){l(n.value)}).then(o,i)}r((e=e.apply(n,l||[])).next())})}),a=function(n,l){var t,e,u,a,o={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,e&&(u=2&a[0]?e.return:a[0]?e.throw||((u=e.return)&&u.call(e),0):e.next)&&!(u=u.call(e,a[1])).done)return u;switch(e=0,u&&(a=[2&a[0],u.value]),a[0]){case 0:case 1:u=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,e=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(u=(u=o.trys).length>0&&u[u.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!u||a[1]>u[0]&&a[1]<u[3])){o.label=a[1];break}if(6===a[0]&&o.label<u[1]){o.label=u[1],u=a;break}if(u&&o.label<u[2]){o.label=u[2],o.ops.push(a);break}u[2]&&o.ops.pop(),o.trys.pop();continue}a=l.call(n,o)}catch(n){a=[6,n],e=0}finally{t=u=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},o=function(){function n(n,l,t,e,u,a,o,i,r,s){var c=this;this.router=n,this.actionSheetCtrl=l,this.toastCtrl=t,this.loadingCtrl=e,this.modalCtrl=u,this.titleService=a,this.metaService=o,this.maestroService=i,this.generalService=r,this.profileService=s,this.maestros=new Array,this.favoritesMaestros=new Array,this.roleUser="visitor",this.role="visitor",this.titleService.setTitle("All tango maestros"),this.metaService.addTag({name:"description",content:"Pick a tango maestro in the list and see all his latest videos"}),this.profileService.getUserRole().then(function(n){c.roleUser=n,c.role=n}),this.loadInfos()}return n.prototype.loadInfos=function(){return u(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,this.generalService.initPage()];case 1:return n.sent(),this.role=this.profileService.returnRole(),this.favoritesMaestros=this.maestroService.getFavoritesMaestros(),this.maestros=this.maestroService.getMaestros(),[2]}})})},n.prototype.initMaestros=function(){return u(this,void 0,void 0,function(){var n,l=this;return a(this,function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Loading maestros"})];case 1:return[4,(n=t.sent()).present()];case 2:return t.sent(),this.maestroService.getMaestros().length>0?(this.maestros=this.maestroService.getMaestros(),[4,n.dismiss()]):[3,4];case 3:return t.sent(),[3,5];case 4:this.maestroService.loadMaestros(new Date).then(function(t){return u(l,void 0,void 0,function(){return a(this,function(l){switch(l.label){case 0:return this.maestros=t,[4,n.dismiss()];case 1:return l.sent(),[2]}})})}),t.label=5;case 5:return this.favoritesMaestros=this.maestroService.getFavoritesMaestros(),[2]}})})},n.prototype.resetMaestros=function(){this.maestros=this.maestroService.getMaestros()},n.prototype.goToDetail=function(n){this.router.navigateByUrl("/tabs/(tango-maestros:maestro-details/"+n.slug+")")},n.prototype.getItems=function(n){this.resetMaestros();var l=n.target.value;l&&""!=l.trim()&&(this.maestros=this.maestros.filter(function(n){return(n.surname+"  "+n.nickname+" "+n.name).toLowerCase().indexOf(l.toLowerCase())>-1}))},n.prototype.goToAbout=function(){this.router.navigateByUrl("about")},n.prototype.toggleFavoriteMaetro=function(n){return u(this,void 0,void 0,function(){return a(this,function(l){switch(l.label){case 0:return 1!=n.isFavorite?[3,2]:(this.maestroService.removeListFavorites(n),n.isFavorite=!1,[4,this.toastCtrl.create({message:n.surname+" "+n.name+" removed from favorites",duration:2e3})]);case 1:return l.sent().present(),[3,4];case 2:return this.maestroService.addListFavorites(n),n.isFavorite=!0,[4,this.toastCtrl.create({message:n.surname+" "+n.name+" added to favorites",duration:2e3})];case 3:l.sent().present(),l.label=4;case 4:return[2]}})})},n.prototype.removeMaestro=function(n){if(confirm("Do you really want to delete this maestro ? ")){this.maestroService.removeMaestro(n);var l=this.maestros.indexOf(n);l>-1&&this.maestros.splice(l,1)}},n.prototype.goToMaestro=function(n){return this.router.navigateByUrl("/tabs/tango-maestros/"+n.slug),!1},n.prototype.addMaestro=function(){return u(this,void 0,void 0,function(){return a(this,function(n){switch(n.label){case 0:return[4,this.modalCtrl.create({component:e.a})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},n.prototype.actionMaestro=function(n){return u(this,void 0,void 0,function(){var l,t=this;return a(this,function(o){switch(o.label){case 0:return"admin"!=this.roleUser?[3,3]:((l=[{text:"Modify maestro",icon:"settings",handler:function(){return u(t,void 0,void 0,function(){return a(this,function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:e.a,componentProps:{maestro:n}})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}})})}},{text:"Delete maestro",icon:"remove",handler:function(){t.removeMaestro(n)}}]).push({text:"Cancel",icon:"",handler:function(){console.log("cancel")}}),[4,this.actionSheetCtrl.create({header:"Actions",buttons:l})]);case 1:return[4,o.sent().present()];case 2:o.sent(),o.label=3;case 3:return[2]}})})},n.prototype.ngOnInit=function(){try{document.querySelector("meta[name='description']").remove()}catch(n){}var n=document.createElement("meta");n.name="description",n.content="Pick one of the best tango maestros in the world",document.getElementsByTagName("head")[0].appendChild(n)},n}()},l1Vo:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("a+0G");var e=function(){}},pWbT:function(n,l,t){"use strict";var e=t("CcnG");t("TGkX"),t("ZYCi"),t.d(l,"a",function(){return u}),t.d(l,"b",function(){return a});var u=e.Pa({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%]{background-color:transparent;color:var(--ion-color-primary-contrast);margin-right:1em;margin-top:1em}ion-button[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary)}.toolbar-tf[_ngcontent-%COMP%]   .logo-tf[_ngcontent-%COMP%]{height:4.5em}"]],data:{}});function a(n){return e.jb(0,[],null,null)}},rVfo:function(n,l,t){"use strict";var e=t("CcnG"),u=t("ra/t"),a=t("ntG5"),o=t("Ip0R"),i=t("pWbT"),r=t("TGkX"),s=t("ZYCi"),c=t("gIcY"),f=t("Zq1E"),m=t("a+0G"),h=t("aa6e"),d=t("P87I"),p=t("Eq7r"),g=t("9opb"),v=t("ZYjt"),b=t("Rt4g"),R=t("dZuI"),Q=t("TpLW");t.d(l,"a",function(){return $});var y=e.Pa({encapsulation:0,styles:[[".card-background-page[_ngcontent-%COMP%]   .half-class[_ngcontent-%COMP%]{background:#000}.card-background-page[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{position:relative;text-align:center}.card-background-page[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{position:absolute;top:36%;font-size:1.2em;width:100%;font-weight:700;color:#fff;text-shadow:0 1px 0 #000;height:3em}.card-background-page[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%]{font-size:1.1em;position:absolute;top:52%;width:100%;color:#fff}"]],data:{}});function k(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(n,l){n(l,0,0,e.Ta(1,"assets/img/thumbs/",l.parent.context.$implicit.imageDisplay,""))})}function w(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,1,"div",[["class","card-title"]],null,null,null,null,null)),(n()(),e.hb(1,null,["+ "," videos"]))],null,function(n,l){n(l,1,0,l.parent.context.$implicit.newvideos)})}function M(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,9,"ion-col",[["size","6"],["size-lg","2"],["size-md","4"],["size-sm","6"],["size-xl","2"]],null,null,null,u.V,u.l)),e.Qa(1,49152,null,0,a.o,[e.i,e.l],{size:[0,"size"]},null),(n()(),e.Ra(2,0,null,0,7,"ion-item",[["class","activated"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToMaestro(n.context.$implicit)&&e),e},u.Fa,u.v)),e.Qa(3,49152,null,0,a.C,[e.i,e.l],{href:[0,"href"]},null),(n()(),e.Ra(4,0,null,0,5,"ion-card",[],null,null,null,u.T,u.f)),e.Qa(5,49152,null,0,a.h,[e.i,e.l],null,null),(n()(),e.Ja(16777216,null,0,1,null,k)),e.Qa(7,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,0,1,null,w)),e.Qa(9,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,"6"),n(l,3,0,e.Ta(1,"/tabs/tango-maestros/",l.context.$implicit.slug,"")),n(l,7,0,l.context.$implicit.imageDisplay),n(l,9,0,l.context.$implicit.newvideos>0)},null)}function x(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,14,"ion-card",[],null,null,null,u.T,u.f)),e.Qa(1,49152,null,0,a.h,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,u.Q,u.h)),e.Qa(3,49152,null,0,a.j,[e.i,e.l],null,null),(n()(),e.Ra(4,0,null,0,1,"ion-icon",[["name","star"]],null,null,null,u.Ba,u.r)),e.Qa(5,49152,null,0,a.x,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.hb(-1,0,[" Favorites "])),(n()(),e.Ra(7,0,null,0,7,"ion-card-content",[],null,null,null,u.P,u.g)),e.Qa(8,49152,null,0,a.i,[e.i,e.l],null,null),(n()(),e.Ra(9,0,null,0,5,"ion-grid",[["class","card-background-page "]],null,null,null,u.Z,u.p)),e.Qa(10,49152,null,0,a.v,[e.i,e.l],null,null),(n()(),e.Ra(11,0,null,0,3,"ion-row",[],null,null,null,u.Ka,u.A)),e.Qa(12,49152,null,0,a.Ca,[],null,null),(n()(),e.Ja(16777216,null,0,1,null,M)),e.Qa(14,278528,null,0,o.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,5,0,"star"),n(l,14,0,t.favoritesMaestros)},null)}function C(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,14,"ion-card",[],null,null,null,u.T,u.f)),e.Qa(1,49152,null,0,a.h,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,u.Q,u.h)),e.Qa(3,49152,null,0,a.j,[e.i,e.l],null,null),(n()(),e.Ra(4,0,null,0,1,"ion-icon",[["name","key"]],null,null,null,u.Ba,u.r)),e.Qa(5,49152,null,0,a.x,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.hb(-1,0,[" Administration "])),(n()(),e.Ra(7,0,null,0,7,"ion-card-content",[],null,null,null,u.P,u.g)),e.Qa(8,49152,null,0,a.i,[e.i,e.l],null,null),(n()(),e.Ra(9,0,null,0,5,"p",[],null,null,null,null,null)),(n()(),e.Ra(10,0,null,null,4,"ion-button",[],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.addMaestro()&&e),e},u.N,u.d)),e.Qa(11,49152,null,0,a.f,[e.i,e.l],null,null),(n()(),e.Ra(12,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,u.Ba,u.r)),e.Qa(13,49152,null,0,a.x,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.hb(-1,0,[" Add a maestro "]))],function(n,l){n(l,5,0,"key"),n(l,13,0,"add")},null)}function I(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,2,"ion-badge",[["slot","end"]],null,null,null,u.M,u.c)),e.Qa(1,49152,null,0,a.e,[e.i,e.l],null,null),(n()(),e.hb(2,0,["+",""]))],null,function(n,l){n(l,2,0,l.parent.context.$implicit.newvideos)})}function O(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,4,"ion-button",[["slot","end"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.actionMaestro(n.parent.context.$implicit)&&e),e},u.N,u.d)),e.Qa(1,49152,null,0,a.f,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,1,"ion-icon",[["name","cog"]],null,null,null,u.Ba,u.r)),e.Qa(3,49152,null,0,a.x,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.hb(-1,0,[" admin"]))],function(n,l){n(l,3,0,"cog")},null)}function S(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,5,"ion-col",[["slot","end"]],null,null,null,u.V,u.l)),e.Qa(1,49152,null,0,a.o,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleFavoriteMaetro(n.parent.parent.context.$implicit)&&e),e},u.N,u.d)),e.Qa(3,49152,null,0,a.f,[e.i,e.l],{fill:[0,"fill"]},null),(n()(),e.Ra(4,0,null,0,1,"ion-icon",[["name","star"]],null,null,null,u.Ba,u.r)),e.Qa(5,49152,null,0,a.x,[e.i,e.l],{name:[0,"name"]},null)],function(n,l){n(l,3,0,"clear"),n(l,5,0,"star")},null)}function T(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,5,"ion-col",[["slot","end"]],null,null,null,u.V,u.l)),e.Qa(1,49152,null,0,a.o,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,3,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.toggleFavoriteMaetro(n.parent.parent.context.$implicit)&&e),e},u.N,u.d)),e.Qa(3,49152,null,0,a.f,[e.i,e.l],{fill:[0,"fill"]},null),(n()(),e.Ra(4,0,null,0,1,"ion-icon",[["name","star-outline"]],null,null,null,u.Ba,u.r)),e.Qa(5,49152,null,0,a.x,[e.i,e.l],{name:[0,"name"]},null)],function(n,l){n(l,3,0,"clear"),n(l,5,0,"star-outline")},null)}function P(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),e.Ja(16777216,null,null,1,null,S)),e.Qa(2,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,null,1,null,T)),e.Qa(4,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,2,0,1==l.parent.context.$implicit.isFavorite),n(l,4,0,0==l.parent.context.$implicit.isFavorite)},null)}function j(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,12,"ion-item",[["detail-push",""],["lines","inset"]],null,null,null,u.Fa,u.v)),e.Qa(1,49152,null,0,a.C,[e.i,e.l],{lines:[0,"lines"]},null),(n()(),e.Ra(2,0,null,0,4,"ion-label",[],null,null,null,u.Ga,u.w)),e.Qa(3,49152,null,0,a.I,[e.i,e.l],null,null),(n()(),e.Ra(4,0,null,0,2,"ion-button",[["fill","clear"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToMaestro(n.context.$implicit)&&e),e},u.N,u.d)),e.Qa(5,49152,null,0,a.f,[e.i,e.l],{fill:[0,"fill"],href:[1,"href"]},null),(n()(),e.hb(6,0,[""," "," ",""])),(n()(),e.Ja(16777216,null,0,1,null,I)),e.Qa(8,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,0,1,null,O)),e.Qa(10,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,0,1,null,P)),e.Qa(12,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,1,0,"inset"),n(l,5,0,"clear",e.Ta(1,"/tabs/tango-maestros/",l.context.$implicit.slug,"")),n(l,8,0,l.context.$implicit.newvideos>0),n(l,10,0,"admin"==t.role),n(l,12,0,"visitor"!=t.role)},function(n,l){n(l,6,0,l.context.$implicit.surname,l.context.$implicit.nickname,l.context.$implicit.name)})}function F(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,3,"ion-header",[],null,null,null,u.Aa,u.q)),e.Qa(1,49152,null,0,a.w,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,1,"app-menu",[],null,null,null,i.b,i.a)),e.Qa(3,114688,null,0,r.a,[s.m],null,null),(n()(),e.Ra(4,0,null,null,25,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,u.W,u.m)),e.Qa(5,49152,null,0,a.p,[e.i,e.l],null,null),(n()(),e.Ra(6,0,null,0,2,"div",[["class","show-when-lg"]],null,null,null,null,null)),(n()(),e.Ra(7,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.hb(-1,null,["Tango maestros"])),(n()(),e.Ja(16777216,null,0,1,null,x)),e.Qa(10,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,0,1,null,C)),e.Qa(12,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ra(13,0,null,0,16,"ion-card",[],null,null,null,u.T,u.f)),e.Qa(14,49152,null,0,a.h,[e.i,e.l],null,null),(n()(),e.Ra(15,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,u.Q,u.h)),e.Qa(16,49152,null,0,a.j,[e.i,e.l],null,null),(n()(),e.Ra(17,0,null,0,1,"ion-icon",[["name","people"]],null,null,null,u.Ba,u.r)),e.Qa(18,49152,null,0,a.x,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.hb(-1,0,[" All maestros "])),(n()(),e.Ra(20,0,null,0,9,"ion-card-content",[["class","card-background-page "]],null,null,null,u.P,u.g)),e.Qa(21,49152,null,0,a.i,[e.i,e.l],null,null),(n()(),e.Ra(22,0,null,0,7,"ion-list",[],null,null,null,u.Ha,u.x)),e.Qa(23,49152,null,0,a.J,[e.i,e.l],null,null),(n()(),e.Ra(24,0,null,0,3,"ion-searchbar",[["animated",""],["class","search-bar"],["color","light"]],null,[[null,"ionInput"],[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var u=!0,a=n.component;return"ionBlur"===l&&(u=!1!==e.bb(n,27)._handleBlurEvent()&&u),"ionChange"===l&&(u=!1!==e.bb(n,27)._handleInputEvent(t.target.value)&&u),"ionInput"===l&&(u=!1!==a.getItems(t)&&u),u},u.La,u.B)),e.eb(5120,null,c.f,function(n){return[n]},[f.a]),e.Qa(26,49152,null,0,a.Da,[e.i,e.l],{color:[0,"color"],animated:[1,"animated"]},null),e.Qa(27,16384,null,0,f.a,[e.l],null,null),(n()(),e.Ja(16777216,null,0,1,null,j)),e.Qa(29,278528,null,0,o.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,3,0),n(l,10,0,t.favoritesMaestros.length>0),n(l,12,0,"admin"==t.role),n(l,18,0,"people"),n(l,26,0,"light",""),n(l,29,0,t.maestros)},null)}var $=e.Na("app-maestro-list",m.a,function(n){return e.jb(0,[(n()(),e.Ra(0,0,null,null,1,"app-maestro-list",[],null,null,null,F,y)),e.Qa(1,114688,null,0,m.a,[s.m,h.a,d.a,p.a,g.a,v.i,v.h,b.a,R.a,Q.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])}}]);