(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{CCoT:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=(u("OO+k"),u("gIcY")),t=u("VMo3"),o=u("qNh5"),i=function(l,n,u,a){return new(u||(u=Promise))(function(e,t){function o(l){try{r(a.next(l))}catch(l){t(l)}}function i(l){try{r(a.throw(l))}catch(l){t(l)}}function r(l){l.done?e(l.value):new u(function(n){n(l.value)}).then(o,i)}r((a=a.apply(l,n||[])).next())})},r=function(l,n){var u,a,e,t,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return t={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function i(t){return function(i){return function(t){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,a&&(e=2&t[0]?a.return:t[0]?a.throw||((e=a.return)&&e.call(a),0):a.next)&&!(e=e.call(a,t[1])).done)return e;switch(a=0,e&&(t=[2&t[0],e.value]),t[0]){case 0:case 1:e=t;break;case 4:return o.label++,{value:t[1],done:!1};case 5:o.label++,a=t[1],t=[0];continue;case 7:t=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===t[0]||2===t[0])){o=0;continue}if(3===t[0]&&(!e||t[1]>e[0]&&t[1]<e[3])){o.label=t[1];break}if(6===t[0]&&o.label<e[1]){o.label=e[1],e=t;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(t);break}e[2]&&o.ops.pop(),o.trys.pop();continue}t=n.call(l,o)}catch(l){t=[6,l],a=0}finally{u=e=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,i])}}},s=function(){function l(l,n,u,a,o,i){this.navCtrl=l,this.loadingCtrl=n,this.alertCtrl=u,this.authProvider=a,this.router=i,this.signupForm=o.group({email:["",e.l.compose([e.l.required,t.a.isValid])],password:["",e.l.compose([e.l.minLength(6),e.l.required])]})}return l.prototype.ionViewDidLoad=function(){},l.prototype.presentLoading=function(l){return i(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,this.loadingCtrl.create({message:l,duration:500})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.goToAbout=function(){this.router.navigateByUrl("about")},l.prototype.signupUser=function(){var l=this;this.signupForm.valid?(this.authProvider.signupUser(this.signupForm.value.email,this.signupForm.value.password).then(function(n){l.authProvider.hydrateUser(),l.router.navigateByUrl("home")},function(n){l.showAlert(n.message)}),this.presentLoading("loading")):console.log("Need to complete the form, current value: "+this.signupForm.value)},l.prototype.showAlert=function(l){return i(this,void 0,void 0,function(){return r(this,function(n){switch(n.label){case 0:return[4,this.alertCtrl.create({message:l,buttons:[{text:"Ok",role:"cancel"}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.goBack=function(){this.router.navigateByUrl("/login")},l}(),c=function(){},g=u("pMnS"),d=u("ra/t"),b=u("ntG5"),p=u("M9A9"),h=u("ZYCi"),f=u("Zq1E"),m=u("Ip0R"),v=u("tXrQ"),k=u("Eq7r"),C=u("CssM"),y=a.Pa({encapsulation:2,styles:[],data:{}});function Q(l){return a.ib(0,[(l()(),a.Ra(0,0,null,null,4,"ion-item",[["class","error-message"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.bb(l,2).onClick(u)&&e),e},d.Da,d.t)),a.Qa(1,49152,null,0,b.E,[a.i,a.l],null,null),a.Qa(2,16384,null,0,p.a,[[2,h.l],a.l],null,null),(l()(),a.Ra(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.gb(-1,null,["Please enter a valid email."]))],null,null)}function w(l){return a.ib(0,[(l()(),a.Ra(0,0,null,null,4,"ion-item",[["class","error-message"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.bb(l,2).onClick(u)&&e),e},d.Da,d.t)),a.Qa(1,49152,null,0,b.E,[a.i,a.l],null,null),a.Qa(2,16384,null,0,p.a,[[2,h.l],a.l],null,null),(l()(),a.Ra(3,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.gb(-1,null,["Your password needs more than 6 characters."]))],null,null)}function R(l){return a.ib(0,[(l()(),a.Ra(0,0,null,null,5,"ion-header",[],null,null,null,d.Y,d.o)),a.Qa(1,49152,null,0,b.y,[a.i,a.l],null,null),(l()(),a.Ra(2,0,null,0,3,"ion-toolbar",[["color","dark"]],null,null,null,d.Ta,d.I)),a.Qa(3,49152,null,0,b.Xa,[a.i,a.l],{color:[0,"color"]},null),(l()(),a.Ra(4,0,null,0,1,"div",[["class","center"]],null,null,null,null,null)),(l()(),a.Ra(5,0,null,null,0,"img",[["alt","logo Tango Fury"],["class","logo-tf clickable"],["slot","secondary"],["src","assets/img/logo-tangofury.png"]],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.goToAbout()&&a),a},null,null)),(l()(),a.Ra(6,0,null,null,53,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,d.W,d.m)),a.Qa(7,49152,null,0,b.r,[a.i,a.l],null,null),(l()(),a.Ra(8,0,null,0,51,"ion-card",[],null,null,null,d.T,d.f)),a.Qa(9,49152,null,0,b.h,[a.i,a.l],null,null),(l()(),a.Ra(10,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,d.Q,d.h)),a.Qa(11,49152,null,0,b.j,[a.i,a.l],null,null),(l()(),a.Ra(12,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,d.Z,d.p)),a.Qa(13,49152,null,0,b.z,[a.i,a.l],{name:[0,"name"]},null),(l()(),a.gb(-1,0,[" Signup "])),(l()(),a.Ra(15,0,null,0,44,"ion-card-content",[],null,null,null,d.P,d.g)),a.Qa(16,49152,null,0,b.i,[a.i,a.l],null,null),(l()(),a.Ra(17,0,null,0,42,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==a.bb(l,19).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.bb(l,19).onReset()&&e),"submit"===n&&(e=!1!==t.signupUser()&&e),e},null,null)),a.Qa(18,16384,null,0,e.n,[],null,null),a.Qa(19,540672,null,0,e.d,[[8,null],[8,null]],{form:[0,"form"]},null),a.eb(2048,null,e.a,null,[e.d]),a.Qa(21,16384,null,0,e.i,[[4,e.a]],null,null),(l()(),a.Ra(22,0,null,null,12,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.bb(l,24).onClick(u)&&e),e},d.Da,d.t)),a.Qa(23,49152,null,0,b.E,[a.i,a.l],null,null),a.Qa(24,16384,null,0,p.a,[[2,h.l],a.l],null,null),(l()(),a.Ra(25,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,d.Ea,d.u)),a.Qa(26,49152,null,0,b.K,[a.i,a.l],null,null),(l()(),a.gb(-1,0,["Email"])),(l()(),a.Ra(28,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Your email address"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0;return"ionChange"===n&&(e=!1!==a.bb(l,29)._handleInputEvent(u.target.value)&&e),"ionBlur"===n&&(e=!1!==a.bb(l,29)._handleBlurEvent()&&e),e},d.Ca,d.s)),a.Qa(29,16384,null,0,f.a,[a.l],null,null),a.eb(1024,null,e.f,function(l){return[l]},[f.a]),a.Qa(31,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.f],[2,e.p]],{name:[0,"name"]},null),a.eb(2048,null,e.g,null,[e.c]),a.Qa(33,16384,null,0,e.h,[[4,e.g]],null,null),a.Qa(34,49152,null,0,b.D,[a.i,a.l],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),a.Ja(16777216,null,null,1,null,Q)),a.Qa(36,16384,null,0,m.k,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Ra(37,0,null,null,12,"ion-item",[],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.bb(l,39).onClick(u)&&e),e},d.Da,d.t)),a.Qa(38,49152,null,0,b.E,[a.i,a.l],null,null),a.Qa(39,16384,null,0,p.a,[[2,h.l],a.l],null,null),(l()(),a.Ra(40,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,d.Ea,d.u)),a.Qa(41,49152,null,0,b.K,[a.i,a.l],null,null),(l()(),a.gb(-1,0,["Password"])),(l()(),a.Ra(43,0,null,0,6,"ion-input",[["formControlName","password"],["placeholder","Your password"],["type","password"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var e=!0;return"ionChange"===n&&(e=!1!==a.bb(l,44)._handleInputEvent(u.target.value)&&e),"ionBlur"===n&&(e=!1!==a.bb(l,44)._handleBlurEvent()&&e),e},d.Ca,d.s)),a.Qa(44,16384,null,0,f.a,[a.l],null,null),a.eb(1024,null,e.f,function(l){return[l]},[f.a]),a.Qa(46,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.f],[2,e.p]],{name:[0,"name"]},null),a.eb(2048,null,e.g,null,[e.c]),a.Qa(48,16384,null,0,e.h,[[4,e.g]],null,null),a.Qa(49,49152,null,0,b.D,[a.i,a.l],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),a.Ja(16777216,null,null,1,null,w)),a.Qa(51,16384,null,0,m.k,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Ra(52,0,null,null,3,"ion-button",[["block",""],["type","submit"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==a.bb(l,54).onClick(u)&&e),e},d.N,d.d)),a.Qa(53,49152,null,0,b.f,[a.i,a.l],{disabled:[0,"disabled"],type:[1,"type"]},null),a.Qa(54,16384,null,0,p.a,[[2,h.l],a.l],null,null),(l()(),a.gb(-1,0,[" Create an Account "])),(l()(),a.Ra(56,0,null,null,3,"ion-button",[["block",""]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==a.bb(l,58).onClick(u)&&e),"click"===n&&(e=!1!==t.goBack()&&e),e},d.N,d.d)),a.Qa(57,49152,null,0,b.f,[a.i,a.l],null,null),a.Qa(58,16384,null,0,p.a,[[2,h.l],a.l],null,null),(l()(),a.gb(-1,0,[" cancel "]))],function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,13,0,"person"),l(n,19,0,u.signupForm),l(n,31,0,"email"),l(n,34,0,"Your email address","email"),l(n,36,0,!u.signupForm.controls.email.valid&&u.signupForm.controls.email.touched),l(n,46,0,"password"),l(n,49,0,"Your password","password"),l(n,51,0,!u.signupForm.controls.password.valid&&u.signupForm.controls.password.touched),l(n,53,0,!u.signupForm.valid,"submit")},function(l,n){var u=n.component;l(n,17,0,a.bb(n,21).ngClassUntouched,a.bb(n,21).ngClassTouched,a.bb(n,21).ngClassPristine,a.bb(n,21).ngClassDirty,a.bb(n,21).ngClassValid,a.bb(n,21).ngClassInvalid,a.bb(n,21).ngClassPending),l(n,28,0,!u.signupForm.controls.email.valid,a.bb(n,33).ngClassUntouched,a.bb(n,33).ngClassTouched,a.bb(n,33).ngClassPristine,a.bb(n,33).ngClassDirty,a.bb(n,33).ngClassValid,a.bb(n,33).ngClassInvalid,a.bb(n,33).ngClassPending),l(n,43,0,!u.signupForm.controls.password.valid,a.bb(n,48).ngClassUntouched,a.bb(n,48).ngClassTouched,a.bb(n,48).ngClassPristine,a.bb(n,48).ngClassDirty,a.bb(n,48).ngClassValid,a.bb(n,48).ngClassInvalid,a.bb(n,48).ngClassPending)})}var Z=a.Na("page-sign-up",s,function(l){return a.ib(0,[(l()(),a.Ra(0,0,null,null,1,"page-sign-up",[],null,null,null,R,y)),a.Qa(1,49152,null,0,s,[v.a,k.a,C.a,o.a,e.b,h.l],null,null)],null,null)},{},{},[]),E=u("95zI"),F=u("9opb"),P=u("apKv"),B=u("B4/3");u.d(n,"SignUpPageModuleNgFactory",function(){return I});var I=a.Oa(c,[],function(l){return a.Ya([a.Za(512,a.k,a.Ea,[[8,[g.a,Z]],[3,a.k],a.z]),a.Za(4608,m.m,m.l,[a.w,[2,m.v]]),a.Za(4608,e.o,e.o,[]),a.Za(4608,E.a,E.a,[a.B,a.g]),a.Za(4608,F.a,F.a,[E.a,a.k,a.s]),a.Za(4608,P.a,P.a,[E.a,a.k,a.s]),a.Za(4608,e.b,e.b,[]),a.Za(1073742336,m.b,m.b,[]),a.Za(1073742336,e.m,e.m,[]),a.Za(1073742336,e.e,e.e,[]),a.Za(1073742336,B.a,B.a,[]),a.Za(1073742336,e.k,e.k,[]),a.Za(1073742336,h.m,h.m,[[2,h.s],[2,h.l]]),a.Za(1073742336,c,c,[]),a.Za(1024,h.j,function(){return[[{path:"",component:s}]]},[])])})}}]);