(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{IoYx:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),e=(u("OO+k"),u("gIcY")),t=u("VMo3"),r=u("qNh5"),o=function(){function l(l,n,u,a,r,o){this.router=l,this.navCtrl=n,this.loadingCtrl=u,this.alertCtrl=a,this.authProvider=r,this.resetPasswordForm=o.group({email:["",e.l.compose([e.l.required,t.a.isValid])]})}return l.prototype.resetPassword=function(){var l=this;this.resetPasswordForm.valid?this.authProvider.resetPassword(this.resetPasswordForm.value.email).then(function(n){l.showAlert("Check your email for a password reset link")},function(n){l.showAlert("Error :( I'm sorry ...")}):console.log("Form is not valid yet, current value: "+this.resetPasswordForm.value)},l.prototype.showAlert=function(l){return n=this,void 0,a=function(){return function(l,n){var u,a,e,t,r={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return t={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(t[Symbol.iterator]=function(){return this}),t;function o(t){return function(o){return function(t){if(u)throw new TypeError("Generator is already executing.");for(;r;)try{if(u=1,a&&(e=2&t[0]?a.return:t[0]?a.throw||((e=a.return)&&e.call(a),0):a.next)&&!(e=e.call(a,t[1])).done)return e;switch(a=0,e&&(t=[2&t[0],e.value]),t[0]){case 0:case 1:e=t;break;case 4:return r.label++,{value:t[1],done:!1};case 5:r.label++,a=t[1],t=[0];continue;case 7:t=r.ops.pop(),r.trys.pop();continue;default:if(!(e=(e=r.trys).length>0&&e[e.length-1])&&(6===t[0]||2===t[0])){r=0;continue}if(3===t[0]&&(!e||t[1]>e[0]&&t[1]<e[3])){r.label=t[1];break}if(6===t[0]&&r.label<e[1]){r.label=e[1],e=t;break}if(e&&r.label<e[2]){r.label=e[2],r.ops.push(t);break}e[2]&&r.ops.pop(),r.trys.pop();continue}t=n.call(l,r)}catch(l){t=[6,l],a=0}finally{u=e=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,o])}}}(this,function(n){switch(n.label){case 0:return[4,this.alertCtrl.create({message:l,buttons:[{text:"Ok",role:"cancel"}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})},new((u=void 0)||(u=Promise))(function(l,e){function t(l){try{o(a.next(l))}catch(l){e(l)}}function r(l){try{o(a.throw(l))}catch(l){e(l)}}function o(n){n.done?l(n.value):new u(function(l){l(n.value)}).then(t,r)}o((a=a.apply(n,[])).next())});var n,u,a},l.prototype.back=function(){this.router.navigateByUrl("login")},l.prototype.ngOnInit=function(){},l}(),i=function(){},s=u("pMnS"),c=u("ra/t"),d=u("ntG5"),b=u("CI40"),p=u("fHOL"),h=u("tXrQ"),f=u("Zq1E"),m=u("Ip0R"),g=u("ZYCi"),v=u("Eq7r"),w=u("CssM"),y=a.Pa({encapsulation:0,styles:[[""]],data:{}});function k(l){return a.jb(0,[(l()(),a.Ra(0,0,null,null,3,"ion-item",[["class","error-message"]],null,null,null,c.Fa,c.v)),a.Qa(1,49152,null,0,d.C,[a.i,a.l],null,null),(l()(),a.Ra(2,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),a.hb(-1,null,["Please enter a valid email."]))],null,null)}function C(l){return a.jb(0,[(l()(),a.Ra(0,0,null,null,9,"ion-header",[],null,null,null,c.Aa,c.q)),a.Qa(1,49152,null,0,d.w,[a.i,a.l],null,null),(l()(),a.Ra(2,0,null,0,7,"ion-toolbar",[["color","dark"]],null,null,null,c.Ta,c.J)),a.Qa(3,49152,null,0,d.Va,[a.i,a.l],{color:[0,"color"]},null),(l()(),a.Ra(4,0,null,0,2,"ion-back-button",[["slot","start"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;return"click"===n&&(e=!1!==a.bb(l,6).onClick(u)&&e),"click"===n&&(e=!1!==t.back()&&e),e},c.L,c.b)),a.Qa(5,49152,null,0,d.c,[a.i,a.l],null,null),a.Qa(6,16384,null,0,b.a,[[2,p.a],h.a,a.l],null,null),(l()(),a.Ra(7,0,null,0,2,"ion-title",[],null,null,null,c.Sa,c.I)),a.Qa(8,49152,null,0,d.Ta,[a.i,a.l],null,null),(l()(),a.hb(-1,0,["Reset password"])),(l()(),a.Ra(10,0,null,null,33,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,c.W,c.m)),a.Qa(11,49152,null,0,d.p,[a.i,a.l],null,null),(l()(),a.Ra(12,0,null,0,31,"ion-card",[],null,null,null,c.T,c.f)),a.Qa(13,49152,null,0,d.h,[a.i,a.l],null,null),(l()(),a.Ra(14,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,c.Q,c.h)),a.Qa(15,49152,null,0,d.j,[a.i,a.l],null,null),(l()(),a.Ra(16,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,c.Ba,c.r)),a.Qa(17,49152,null,0,d.x,[a.i,a.l],{name:[0,"name"]},null),(l()(),a.hb(-1,0,[" Reset password "])),(l()(),a.Ra(19,0,null,0,24,"ion-card-content",[],null,null,null,c.P,c.g)),a.Qa(20,49152,null,0,d.i,[a.i,a.l],null,null),(l()(),a.Ra(21,0,null,0,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==a.bb(l,23).onSubmit(u)&&e),"reset"===n&&(e=!1!==a.bb(l,23).onReset()&&e),"submit"===n&&(e=!1!==t.resetPassword()&&e),e},null,null)),a.Qa(22,16384,null,0,e.n,[],null,null),a.Qa(23,540672,null,0,e.d,[[8,null],[8,null]],{form:[0,"form"]},null),a.eb(2048,null,e.a,null,[e.d]),a.Qa(25,16384,null,0,e.i,[[4,e.a]],null,null),(l()(),a.Ra(26,0,null,null,11,"ion-item",[],null,null,null,c.Fa,c.v)),a.Qa(27,49152,null,0,d.C,[a.i,a.l],null,null),(l()(),a.Ra(28,0,null,0,2,"ion-label",[["stacked",""]],null,null,null,c.Ga,c.w)),a.Qa(29,49152,null,0,d.I,[a.i,a.l],null,null),(l()(),a.hb(-1,0,["Email"])),(l()(),a.Ra(31,0,null,0,6,"ion-input",[["formControlName","email"],["placeholder","Your email address"],["type","email"]],[[2,"invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==a.bb(l,32)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==a.bb(l,32)._handleInputEvent(u.target.value)&&e),e},c.Ea,c.u)),a.Qa(32,16384,null,0,f.a,[a.l],null,null),a.eb(1024,null,e.f,function(l){return[l]},[f.a]),a.Qa(34,671744,null,0,e.c,[[3,e.a],[8,null],[8,null],[6,e.f],[2,e.p]],{name:[0,"name"]},null),a.eb(2048,null,e.g,null,[e.c]),a.Qa(36,16384,null,0,e.h,[[4,e.g]],null,null),a.Qa(37,49152,null,0,d.B,[a.i,a.l],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),a.Ja(16777216,null,null,1,null,k)),a.Qa(39,16384,null,0,m.k,[a.R,a.O],{ngIf:[0,"ngIf"]},null),(l()(),a.Ra(40,0,null,null,3,"div",[["class","center"]],null,null,null,null,null)),(l()(),a.Ra(41,0,null,null,2,"ion-button",[["block",""],["type","submit"]],null,null,null,c.N,c.d)),a.Qa(42,49152,null,0,d.f,[a.i,a.l],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),a.hb(-1,0,[" Reset your Password "]))],function(l,n){var u=n.component;l(n,3,0,"dark"),l(n,17,0,"person"),l(n,23,0,u.resetPasswordForm),l(n,34,0,"email"),l(n,37,0,"Your email address","email"),l(n,39,0,!u.resetPasswordForm.controls.email.valid&&u.resetPasswordForm.controls.email.touched),l(n,42,0,!u.resetPasswordForm.valid,"submit")},function(l,n){var u=n.component;l(n,21,0,a.bb(n,25).ngClassUntouched,a.bb(n,25).ngClassTouched,a.bb(n,25).ngClassPristine,a.bb(n,25).ngClassDirty,a.bb(n,25).ngClassValid,a.bb(n,25).ngClassInvalid,a.bb(n,25).ngClassPending),l(n,31,0,!u.resetPasswordForm.controls.email.valid,a.bb(n,36).ngClassUntouched,a.bb(n,36).ngClassTouched,a.bb(n,36).ngClassPristine,a.bb(n,36).ngClassDirty,a.bb(n,36).ngClassValid,a.bb(n,36).ngClassInvalid,a.bb(n,36).ngClassPending)})}var P=a.Na("app-reset-password",o,function(l){return a.jb(0,[(l()(),a.Ra(0,0,null,null,1,"app-reset-password",[],null,null,null,C,y)),a.Qa(1,114688,null,0,o,[g.m,h.a,v.a,w.a,r.a,e.b],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),Q=u("95zI"),R=u("9opb"),Z=u("apKv"),I=u("B4/3");u.d(n,"ResetPasswordPageModuleNgFactory",function(){return F});var F=a.Oa(i,[],function(l){return a.Ya([a.Za(512,a.k,a.Ea,[[8,[s.a,P]],[3,a.k],a.z]),a.Za(4608,m.m,m.l,[a.w,[2,m.v]]),a.Za(4608,e.o,e.o,[]),a.Za(4608,Q.a,Q.a,[a.B,a.g]),a.Za(4608,R.a,R.a,[Q.a,a.k,a.s]),a.Za(4608,Z.a,Z.a,[Q.a,a.k,a.s]),a.Za(4608,e.b,e.b,[]),a.Za(1073742336,m.b,m.b,[]),a.Za(1073742336,e.m,e.m,[]),a.Za(1073742336,e.e,e.e,[]),a.Za(1073742336,I.a,I.a,[]),a.Za(1073742336,e.k,e.k,[]),a.Za(1073742336,g.n,g.n,[[2,g.t],[2,g.m]]),a.Za(1073742336,i,i,[]),a.Za(1024,g.k,function(){return[[{path:"",component:o}]]},[])])})}}]);