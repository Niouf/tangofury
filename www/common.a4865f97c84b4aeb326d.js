(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2jMD":function(n,l,t){"use strict";t.r(l),t.d(l,"createGesture",function(){return o});var e,i=t("gfhn");function u(n,l,t,i){var u,r,a=function(n){if(void 0===e)try{var l=Object.defineProperty({},"passive",{get:function(){e=!0}});n.addEventListener("optsTest",function(){},l)}catch(n){e=!1}return!!e}(n)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return n.__zone_symbol__addEventListener?(u="__zone_symbol__addEventListener",r="__zone_symbol__removeEventListener"):(u="addEventListener",r="removeEventListener"),n[u](l,t,a),function(){n[r](l,t,a)}}var r=2e3;function a(n){return n instanceof Document?n:n.ownerDocument}function o(n){var l=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},n),t=l.canStart,e=l.onWillStart,o=l.onStart,f=l.onEnd,p=l.notCaptured,h=l.onMove,v=l.threshold,b=l.queue,m={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=function(n,l,t,e,i){var o,c,s,d,f,p,h,v=0;function b(e){v=Date.now()+r,l(e)&&(!c&&t&&(c=u(n,"touchmove",t,i)),s||(s=u(n,"touchend",y,i)),d||(d=u(n,"touchcancel",y,i)))}function m(e){v>Date.now()||l(e)&&(!p&&t&&(p=u(a(n),"mousemove",t,i)),h||(h=u(a(n),"mouseup",g,i)))}function y(n){w(),e&&e(n)}function g(n){k(),e&&e(n)}function w(){c&&c(),s&&s(),d&&d(),c=s=d=void 0}function k(){p&&p(),h&&h(),p=h=void 0}function R(){w(),k()}function S(l){l?(o&&o(),f&&f(),o=f=void 0,R()):(o||(o=u(n,"touchstart",b,i)),f||(f=u(n,"mousedown",m,i)))}return{setDisabled:S,stop:R,destroy:function(){S(!0),e=t=l=void 0}}}(l.el,function(n){var l=d(n);return!(R||!S)&&(s(n,m),m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp=l,m.velocityX=m.velocityY=m.deltaX=m.deltaY=0,m.event=n,(!t||!1!==t(m))&&(w.release(),!!w.start()&&(R=!0,0===v?E():(g.start(m.startX,m.startY),!0))))},function(n){k?!Q&&S&&(Q=!0,c(m,n),b.write(C)):(c(m,n),g.detect(m.currentX,m.currentY)&&(g.isGesture()&&E()||(I(),y.stop(),p&&p(m))))},function(n){var l=k,t=S;I(),t&&(c(m,n),l?f&&f(m):p&&p(m))},{capture:!1}),g=function(n,l,t){var e=t*(Math.PI/180),i="x"===n,u=Math.cos(e),r=l*l,a=0,o=0,c=!1,s=0;return{start:function(n,l){a=n,o=l,s=0,c=!0},detect:function(n,l){if(!c)return!1;var t=n-a,e=l-o,d=t*t+e*e;if(d<r)return!1;var f=Math.sqrt(d),p=(i?t:e)/f;return s=p>u?1:p<-u?-1:0,c=!1,!0},isGesture:function(){return 0!==s},getDirection:function(){return s}}}(l.direction,l.threshold,l.maxAngle),w=i.a.createGesture({name:n.gestureName,priority:n.gesturePriority,disableScroll:n.disableScroll}),k=!1,R=!1,S=!0,Q=!1;function C(){k&&(Q=!1,h&&h(m))}function E(){return!(w&&!w.capture()||(k=!0,S=!1,m.startX=m.currentX,m.startY=m.currentY,m.startTimeStamp=m.timeStamp,e?e(m).then(P):P(),0))}function P(){o&&o(m),S=!0}function I(){k=!1,R=!1,Q=!1,S=!0,w.release()}return{setDisabled:function(n){y.setDisabled(n)},destroy:function(){w.destroy(),y.destroy()}}}function c(n,l){var t=n.currentX,e=n.currentY,i=n.timeStamp;s(l,n);var u=n.currentX,r=n.currentY,a=(n.timeStamp=d(l))-i;if(a>0&&a<100){var o=(r-e)/a;n.velocityX=(u-t)/a*.7+.3*n.velocityX,n.velocityY=.7*o+.3*n.velocityY}n.deltaX=u-n.startX,n.deltaY=r-n.startY,n.event=l}function s(n,l){var t=0,e=0;if(n){var i=n.changedTouches;if(i&&i.length>0){var u=i[0];t=u.clientX,e=u.clientY}else void 0!==n.pageX&&(t=n.pageX,e=n.pageY)}l.currentX=t,l.currentY=e}function d(n){return n.timeStamp||Date.now()}},"6Fnk":function(n,l,t){"use strict";t.d(l,"a",function(){return h}),t.d(l,"b",function(){return c}),t.d(l,"c",function(){return f}),t.d(l,"d",function(){return p}),t.d(l,"e",function(){return o}),t.d(l,"f",function(){return u}),t.d(l,"g",function(){return r}),t.d(l,"h",function(){return a});var e=t("B5Ai"),i=0;function u(n,l){var t=n.ownerDocument;(function(n){0===i&&(i=1,n.addEventListener("ionBackButton",function(l){var t=a(n);t&&t.backdropDismiss&&l.detail.register(100,function(){return t.dismiss(void 0,h)})}),n.addEventListener("keyup",function(l){if("Escape"===l.key){var t=a(n);t&&t.backdropDismiss&&t.dismiss(void 0,h)}}))})(t),Object.assign(n,l),n.classList.add("ion-page-invisible");var e=i++;return n.overlayIndex=e,n.hasAttribute("id")||(n.id="ion-overlay-"+e),s(t).appendChild(n),n.componentOnReady()}function r(n,l,t,e,i){var u=a(n,e,i);return u?u.dismiss(l,t):Promise.reject("overlay does not exist")}function a(n,l,t){var e=function(n,l){var t=Array.from(s(n).children).filter(function(n){return n.overlayIndex>0});return void 0===l?t:(l=l.toUpperCase(),t.filter(function(n){return n.tagName===l}))}(n,l);return void 0===t?e[e.length-1]:e.find(function(n){return n.id===t})}function o(n,l,t,i,u){return e.a(this,void 0,void 0,function(){var r;return e.c(this,function(e){switch(e.label){case 0:return n.presented?[2]:(n.presented=!0,n.willPresent.emit(),r=n.enterAnimation?n.enterAnimation:n.config.get(l,"ios"===n.mode?t:i),[4,d(n,r,n.el,u)]);case 1:return e.sent()&&n.didPresent.emit(),[2]}})})}function c(n,l,t,i,u,r,a){return e.a(this,void 0,void 0,function(){var o,c;return e.c(this,function(e){switch(e.label){case 0:if(!n.presented)return[2,!1];n.presented=!1,e.label=1;case 1:return e.trys.push([1,3,,4]),n.willDismiss.emit({data:l,role:t}),o=n.leaveAnimation?n.leaveAnimation:n.config.get(i,"ios"===n.mode?u:r),[4,d(n,o,n.el,a)];case 2:return e.sent(),n.didDismiss.emit({data:l,role:t}),[3,4];case 3:return c=e.sent(),console.error(c),[3,4];case 4:return n.el.remove(),[2,!0]}})})}function s(n){return n.querySelector("ion-app")||n.body}function d(n,l,t,i){return e.a(this,void 0,void 0,function(){var u,r,a;return e.c(this,function(e){switch(e.label){case 0:return n.animation?(n.animation.destroy(),n.animation=void 0,[2,!1]):[3,1];case 1:return t.classList.remove("ion-page-invisible"),r=n,[4,n.animationCtrl.create(l,t.shadowRoot||n.el,i)];case 2:return u=r.animation=e.sent(),n.animation=u,n.animated||u.duration(0),n.keyboardClose&&u.beforeAddWrite(function(){var n=t.ownerDocument.activeElement;n&&n.matches("input, ion-input, ion-textarea")&&n.blur()}),[4,u.playAsync()];case 3:return e.sent(),a=u.hasCompleted,u.destroy(),n.animation=void 0,[2,a]}})})}function f(n,l){var t,e=new Promise(function(n){return t=n});return function(n,l,t){var e=function(i){n.removeEventListener(l,e),t(i)};n.addEventListener(l,e)}(n,l,function(n){t(n.detail)}),e}function p(n){return"cancel"===n||n===h}var h="backdrop"},B5Ai:function(n,l,t){"use strict";t.d(l,"b",function(){return i}),t.d(l,"a",function(){return u}),t.d(l,"c",function(){return r});var e=function(n,l){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t])})(n,l)};function i(n,l){function t(){this.constructor=n}e(n,l),n.prototype=null===l?Object.create(l):(t.prototype=l.prototype,new t)}function u(n,l,t,e){return new(t||(t=Promise))(function(i,u){function r(n){try{o(e.next(n))}catch(n){u(n)}}function a(n){try{o(e.throw(n))}catch(n){u(n)}}function o(n){n.done?i(n.value):new t(function(l){l(n.value)}).then(r,a)}o((e=e.apply(n,l||[])).next())})}function r(n,l){var t,e,i,u,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,e&&(i=2&u[0]?e.return:u[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,u[1])).done)return i;switch(e=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(6===u[0]&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=l.call(n,r)}catch(n){u=[6,n],e=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}},BHOm:function(n,l,t){"use strict";t.d(l,"a",function(){return u});var e=t("iqUP"),i=(t("B6Tt"),t("OO+k"),function(n,l,t,e){return new(t||(t=Promise))(function(i,u){function r(n){try{o(e.next(n))}catch(n){u(n)}}function a(n){try{o(e.throw(n))}catch(n){u(n)}}function o(n){n.done?i(n.value):new t(function(l){l(n.value)}).then(r,a)}o((e=e.apply(n,l||[])).next())})}),u=function(){function n(n,l,t){this.playlistService=n,this.router=l,this.loadingCtrl=t,this.selections=new Array}return n.prototype.goToPlaylist=function(n){this.router.navigateByUrl("/tabs/(home:selection/NbtwzggJpfYmu1rN4lqdCNBBSVu1/"+n.key+")")},n.prototype.ngOnInit=function(){this.loadAllSelections()},n.prototype.loadAllSelections=function(){return i(this,void 0,void 0,function(){var n,l,t=this;return function(n,l){var t,e,i,u,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,e&&(i=2&u[0]?e.return:u[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,u[1])).done)return i;switch(e=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(6===u[0]&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=l.call(n,r)}catch(n){u=[6,n],e=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}}(this,function(i){switch(i.label){case 0:return[4,this.loadingCtrl.create({message:"Loading all selections... "})];case 1:return(n=i.sent()).present(),l=e.storage(),this.playlistService.getSelections(1e3).then(function(e){e.forEach(function(e){e.image.includes("selections")?t.selections.push(e):l.ref("/selections/"+e.image).getDownloadURL().then(function(n){e.image=n,t.selections.push(e)}),n.dismiss()})}),[2]}})})},n}()},"FJ+m":function(n,l,t){"use strict";var e=t("CcnG"),i=t("ra/t"),u=t("ntG5"),r=t("CI40"),a=t("ZYCi"),o=t("fHOL"),c=t("tXrQ"),s=t("Ip0R"),d=t("BHOm"),f=t("B6Tt"),p=t("Eq7r");t.d(l,"a",function(){return m});var h=e.Pa({encapsulation:0,styles:[[""]],data:{}});function v(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,8,"ion-col",[["size","6"],["size-lg","3"],["size-md","4"],["size-xl","2"]],null,null,null,i.V,i.l)),e.Qa(1,49152,null,0,u.q,[e.i,e.l],{size:[0,"size"]},null),(n()(),e.Ra(2,0,null,0,6,"ion-card",[["class","clickable"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToPlaylist(n.context.$implicit)&&e),e},i.T,i.f)),e.Qa(3,49152,null,0,u.h,[e.i,e.l],null,null),(n()(),e.Ra(4,0,null,0,1,"div",[["class","half-black"]],null,null,null,null,null)),(n()(),e.Ra(5,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),e.Ra(6,0,null,0,2,"ion-card-subtitle",[["class","center"]],null,null,null,i.R,i.i)),e.Qa(7,49152,null,0,u.k,[e.i,e.l],null,null),(n()(),e.gb(8,0,["",""]))],function(n,l){n(l,1,0,"6")},function(n,l){n(l,5,0,e.Ta(1,"",l.context.$implicit.image,"")),n(l,8,0,l.context.$implicit.title)})}function b(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,11,"ion-header",[],null,null,null,i.Y,i.o)),e.Qa(1,49152,null,0,u.y,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,9,"ion-toolbar",[["color","dark"]],null,null,null,i.Ta,i.I)),e.Qa(3,49152,null,0,u.Xa,[e.i,e.l],{color:[0,"color"]},null),(n()(),e.Ra(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.O,i.e)),e.Qa(5,49152,null,0,u.g,[],null,null),(n()(),e.Ra(6,0,null,0,2,"ion-back-button",[["defaultHref","/"],["id","backButton"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.bb(n,8).onClick(t)&&i),i},i.L,i.b)),e.Qa(7,49152,null,0,u.c,[e.i,e.l],{defaultHref:[0,"defaultHref"]},null),e.Qa(8,16384,null,0,r.a,[[2,a.l],[2,o.a],c.a,e.l],{defaultHref:[0,"defaultHref"]},null),(n()(),e.Ra(9,0,null,0,2,"ion-title",[["class","center"]],null,null,null,i.Sa,i.J)),e.Qa(10,49152,null,0,u.Ya,[e.i,e.l],null,null),(n()(),e.gb(-1,0,["All tango selections"])),(n()(),e.Ra(12,0,null,null,16,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,i.W,i.m)),e.Qa(13,49152,null,0,u.r,[e.i,e.l],null,null),(n()(),e.Ra(14,0,null,0,14,"ion-card",[],null,null,null,i.T,i.f)),e.Qa(15,49152,null,0,u.h,[e.i,e.l],null,null),(n()(),e.Ra(16,0,null,0,4,"ion-card-header",[["class","card-menu"]],null,null,null,i.Q,i.h)),e.Qa(17,49152,null,0,u.j,[e.i,e.l],null,null),(n()(),e.Ra(18,0,null,0,1,"ion-icon",[["name","images"]],null,null,null,i.Z,i.p)),e.Qa(19,49152,null,0,u.z,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.gb(-1,0,[" All selections "])),(n()(),e.Ra(21,0,null,0,7,"ion-card-content",[],null,null,null,i.P,i.g)),e.Qa(22,49152,null,0,u.i,[e.i,e.l],null,null),(n()(),e.Ra(23,0,null,0,5,"ion-grid",[["class","selections"]],null,null,null,i.X,i.n)),e.Qa(24,49152,null,0,u.x,[e.i,e.l],null,null),(n()(),e.Ra(25,0,null,0,3,"ion-row",[],null,null,null,i.Ia,i.y)),e.Qa(26,49152,null,0,u.Da,[],null,null),(n()(),e.Ja(16777216,null,0,1,null,v)),e.Qa(28,278528,null,0,s.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,3,0,"dark"),n(l,7,0,"/"),n(l,8,0,"/"),n(l,19,0,"images"),n(l,28,0,t.selections)},null)}var m=e.Na("app-allselections",d.a,function(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,1,"app-allselections",[],null,null,null,b,h)),e.Qa(1,114688,null,0,d.a,[f.a,a.l,p.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},HHlg:function(n,l,t){"use strict";t.d(l,"a",function(){return i}),t.d(l,"b",function(){return u}),t.d(l,"c",function(){return o}),t.d(l,"d",function(){return c}),t.d(l,"e",function(){return a}),t.d(l,"f",function(){return r}),t.d(l,"g",function(){return p}),t.d(l,"h",function(){return d}),t.d(l,"i",function(){return h}),t.d(l,"j",function(){return s}),t.d(l,"k",function(){return f});var e=t("B5Ai");function i(n,l,t,i,u){return e.a(this,void 0,void 0,function(){var r;return e.c(this,function(e){switch(e.label){case 0:if(n)return[2,n.attachViewToDom(l,t,u,i)];if("string"!=typeof t&&!(t instanceof HTMLElement))throw new Error("framework delegate is missing");return r="string"==typeof t?l.ownerDocument.createElement(t):t,i&&i.forEach(function(n){return r.classList.add(n)}),u&&Object.assign(r,u),l.appendChild(r),r.componentOnReady?[4,r.componentOnReady()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2,r]}})})}function u(n,l){if(l){if(n)return n.removeViewFromDom(l.parentElement,l);l.remove()}return Promise.resolve()}function r(){var n=window.TapticEngine;n&&n.selection()}function a(){var n=window.TapticEngine;n&&n.gestureSelectionStart()}function o(){var n=window.TapticEngine;n&&n.gestureSelectionChanged()}function c(){var n=window.TapticEngine;n&&n.gestureSelectionEnd()}function s(n,l){return null!==l.closest(n)}function d(n){var l;return"string"==typeof n&&n.length>0?((l={"ion-color":!0})["ion-color-"+n]=!0,l):void 0}function f(n,l){var t;return(t={})[l]=!0,t[l+"-"+n]=!!n,t}function p(n){var l={};return function(n){return void 0!==n?(Array.isArray(n)?n:n.split(" ")).filter(function(n){return null!=n}).map(function(n){return n.trim()}).filter(function(n){return""!==n}):[]}(n).forEach(function(n){return l[n]=!0}),l}function h(n,l,t,i){return e.a(this,void 0,void 0,function(){var u;return e.c(this,function(e){switch(e.label){case 0:return null==l||"#"===l[0]||-1!==l.indexOf("://")?[3,2]:(u=n.document.querySelector("ion-router"))?(null!=t&&t.preventDefault(),[4,u.componentOnReady()]):[3,2];case 1:return e.sent(),[2,u.push(l,i)];case 2:return[2,!1]}})})}},Izuc:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("B6Tt"),t("qyVB"),t("TpLW"),t("OO+k"),t("qNh5");var e=function(){function n(n,l,t,e,i,u,r){var a=this;this.route=n,this.videoService=l,this.profileService=t,this.playlistService=e,this.router=i,this.platform=u,this.authService=r,this.videos=[],this.role="visitor",this.key=this.route.snapshot.params.key,this.userKey=this.route.snapshot.params.userkey,this.playlistService.getPlaylistById(this.userKey,this.key).then(function(n){return a.playlist=n,n}).then(function(n){a.playlistService.getVideos(a.userKey,n).then(function(n){a.videos=n})})}return n.prototype.goToAbout=function(){this.router.navigateByUrl("about")},n.prototype.goToHome=function(){this.router.navigateByUrl("home")},n.prototype.ngOnInit=function(){try{document.querySelector("meta[name='description']").remove()}catch(n){}var n=document.createElement("meta");n.name="description",n.content="",document.getElementsByTagName("head")[0].appendChild(n)},n.prototype.ngOnDestroy=function(){},n}()},VMo3:function(n,l,t){"use strict";t.d(l,"a",function(){return e});var e=function(){function n(){}return n.isValid=function(n){return/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(n.value)?null:{invalidEmail:!0}},n}()},"cHb+":function(n,l,t){"use strict";t.d(l,"a",function(){return p}),t.d(l,"b",function(){return d}),t.d(l,"c",function(){return h}),t.d(l,"d",function(){return r});var e=t("B5Ai"),i=function(){return t.e(182).then(t.bind(null,"y1oY"))},u=function(){return t.e(181).then(t.bind(null,"YGkI"))};function r(n){return new Promise(function(l,t){n.queue.write(function(){(function(n){var l=n.enteringEl,t=n.leavingEl;(function(n,l,t){void 0!==n&&(n.style.zIndex="back"===t?"99":"101"),void 0!==l&&(l.style.zIndex="100")})(l,t,n.direction),n.showGoBack?l.classList.add("can-go-back"):l.classList.remove("can-go-back"),h(l,!1),t&&h(t,!1)})(n),function(n){return e.a(this,void 0,void 0,function(){var l;return e.c(this,function(t){switch(t.label){case 0:return[4,function(n){return e.a(this,void 0,void 0,function(){var l;return e.c(this,function(t){switch(t.label){case 0:return n.leavingEl&&n.animated&&0!==n.duration?n.animationBuilder?[2,n.animationBuilder]:"ios"!==n.mode?[3,2]:[4,i()]:[2,void 0];case 1:return l=t.sent().iosTransitionAnimation,[3,4];case 2:return[4,u()];case 3:l=t.sent().mdTransitionAnimation,t.label=4;case 4:return[2,l]}})})}(n)];case 1:return[2,(l=t.sent())?function(n,l){return e.a(this,void 0,void 0,function(){var t;return e.c(this,function(e){switch(e.label){case 0:return[4,o(l,!0)];case 1:return e.sent(),[4,l.animationCtrl.create(n,l.baseEl,l)];case 2:return t=e.sent(),c(l.window,l.enteringEl,l.leavingEl),[4,function(n,l){var t=l.progressCallback,e=new Promise(function(l){return n.onFinish(l)});return t?(n.progressStart(),t(n)):n.play(),e}(t,l)];case 3:return e.sent(),t.hasCompleted&&s(l.window,l.enteringEl,l.leavingEl),[2,{hasCompleted:t.hasCompleted,animation:t}]}})})}(l,n):function(n){return e.a(this,void 0,void 0,function(){var l,t;return e.c(this,function(e){switch(e.label){case 0:return l=n.enteringEl,t=n.leavingEl,[4,o(n,!1)];case 1:return e.sent(),c(n.window,l,t),s(n.window,l,t),[2,{hasCompleted:!0}]}})})}(n)]}})})}(n).then(function(t){t.animation&&t.animation.destroy(),a(n),l(t)},function(l){a(n),t(l)})})})}function a(n){var l=n.leavingEl;n.enteringEl.classList.remove("ion-page-invisible"),void 0!==l&&l.classList.remove("ion-page-invisible")}function o(n,l){return e.a(this,void 0,void 0,function(){var t;return e.c(this,function(i){switch(i.label){case 0:return t=(void 0!==n.deepWait?n.deepWait:l)?[p(n.enteringEl),p(n.leavingEl)]:[f(n.enteringEl),f(n.leavingEl)],[4,Promise.all(t)];case 1:return i.sent(),[4,function(n,l){return e.a(this,void 0,void 0,function(){return e.c(this,function(t){switch(t.label){case 0:return n?[4,n(l)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}})})}(n.viewIsReady,n.enteringEl)];case 2:return i.sent(),[2]}})})}function c(n,l,t){d(n,t,"ionViewWillLeave"),d(n,l,"ionViewWillEnter")}function s(n,l,t){d(n,l,"ionViewDidEnter"),d(n,t,"ionViewDidLeave")}function d(n,l,t){if(l){var e=new(0,n.CustomEvent)(t,{bubbles:!1,cancelable:!1});l.dispatchEvent(e)}}function f(n){return n&&n.componentOnReady?n.componentOnReady():Promise.resolve()}function p(n){return e.a(this,void 0,void 0,function(){var l;return e.c(this,function(t){switch(t.label){case 0:return(l=n)?null==l.componentOnReady?[3,2]:[4,l.componentOnReady()]:[3,4];case 1:if(null!=t.sent())return[2];t.label=2;case 2:return[4,Promise.all(Array.from(l.children).map(p))];case 3:t.sent(),t.label=4;case 4:return[2]}})})}function h(n,l){l?(n.setAttribute("aria-hidden","true"),n.classList.add("ion-page-hidden")):(n.hidden=!1,n.removeAttribute("aria-hidden"),n.classList.remove("ion-page-hidden"))}},"d/fU":function(n,l,t){"use strict";var e=t("CcnG"),i=t("ra/t"),u=t("ntG5"),r=t("CI40"),a=t("ZYCi"),o=t("fHOL"),c=t("tXrQ"),s=t("M9A9"),d=t("Ip0R"),f=t("1t1w"),p=t("46K1"),h=t("aa6e"),v=t("Eq7r"),b=t("9opb"),m=t("qyVB"),y=t("qNh5"),g=t("TpLW"),w=t("Rt4g"),k=t("B6Tt"),R=t("Izuc"),S=t("YxxD");t.d(l,"a",function(){return I});var Q=e.Pa({encapsulation:0,styles:[[""]],data:{}});function C(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,2,"ion-title",[["class","center"]],null,null,null,i.Sa,i.J)),e.Qa(1,49152,null,0,u.Ya,[e.i,e.l],null,null),(n()(),e.gb(2,0,["",""]))],null,function(n,l){n(l,2,0,l.component.playlist.title)})}function E(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.gb(1,null,["",""]))],null,function(n,l){n(l,1,0,l.component.playlist.title)})}function P(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,17,"ion-header",[],null,null,null,i.Y,i.o)),e.Qa(1,49152,null,0,u.y,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,15,"ion-toolbar",[["color","fg-header"]],null,null,null,i.Ta,i.I)),e.Qa(3,49152,null,0,u.Xa,[e.i,e.l],{color:[0,"color"]},null),(n()(),e.Ra(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.O,i.e)),e.Qa(5,49152,null,0,u.g,[],null,null),(n()(),e.Ra(6,0,null,0,2,"ion-back-button",[["defaultHref","/"],["id","backButton"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.bb(n,8).onClick(t)&&i),i},i.L,i.b)),e.Qa(7,49152,null,0,u.c,[e.i,e.l],{defaultHref:[0,"defaultHref"]},null),e.Qa(8,16384,null,0,r.a,[[2,a.l],[2,o.a],c.a,e.l],{defaultHref:[0,"defaultHref"]},null),(n()(),e.Ra(9,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,i.O,i.e)),e.Qa(10,49152,null,0,u.g,[],null,null),(n()(),e.Ra(11,0,null,0,4,"ion-button",[["icon-only",""]],null,[[null,"click"]],function(n,l,t){var i=!0,u=n.component;return"click"===l&&(i=!1!==e.bb(n,13).onClick(t)&&i),"click"===l&&(i=!1!==u.goToAbout()&&i),i},i.N,i.d)),e.Qa(12,49152,null,0,u.f,[e.i,e.l],null,null),e.Qa(13,16384,null,0,s.a,[[2,a.l],e.l],null,null),(n()(),e.Ra(14,0,null,0,1,"ion-icon",[["name","information-circle"]],null,null,null,i.Z,i.p)),e.Qa(15,49152,null,0,u.z,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.Ja(16777216,null,0,1,null,C)),e.Qa(17,16384,null,0,d.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ra(18,0,null,null,8,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,i.W,i.m)),e.Qa(19,49152,null,0,u.r,[e.i,e.l],null,null),(n()(),e.Ra(20,0,null,0,2,"div",[["class","show-when-lg"]],null,null,null,null,null)),(n()(),e.Ja(16777216,null,null,1,null,E)),e.Qa(22,16384,null,0,d.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ra(23,0,null,0,3,"ion-grid",[],null,null,null,i.X,i.n)),e.Qa(24,49152,null,0,u.x,[e.i,e.l],null,null),(n()(),e.Ra(25,0,null,0,1,"app-item-video",[],null,null,null,f.b,f.a)),e.Qa(26,638976,null,0,p.a,[h.a,v.a,b.a,m.a,y.a,g.a,w.a,k.a,c.a],{videos:[0,"videos"],role:[1,"role"],display:[2,"display"],playlist:[3,"playlist"]},null)],function(n,l){var t=l.component;n(l,3,0,"fg-header"),n(l,7,0,"/"),n(l,8,0,"/"),n(l,15,0,"information-circle"),n(l,17,0,t.playlist),n(l,22,0,t.playlist),n(l,26,0,t.videos,t.role,"playlist",t.playlist)},null)}var I=e.Na("app-playlist",R.a,function(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,1,"app-playlist",[],null,null,null,P,Q)),e.Qa(1,245760,null,0,R.a,[a.a,m.a,g.a,k.a,a.l,S.a,y.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},dACG:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("iax6");var e=function(){}},dXE8:function(n,l,t){"use strict";var e=t("CcnG"),i=t("ra/t"),u=t("ntG5"),r=t("M9A9"),a=t("ZYCi"),o=t("Ip0R"),c=t("gIcY"),s=t("Zq1E"),d=t("pWbT"),f=t("TGkX"),p=t("iax6"),h=t("9opb"),v=t("aa6e"),b=t("qNh5"),m=t("TpLW");t.d(l,"a",function(){return Q});var y=e.Pa({encapsulation:0,styles:[[""]],data:{}});function g(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,11,"ion-item",[],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.bb(n,2).onClick(t)&&i),i},i.Da,i.t)),e.Qa(1,49152,null,0,u.E,[e.i,e.l],null,null),e.Qa(2,16384,null,0,r.a,[[2,a.l],e.l],null,null),(n()(),e.Ra(3,0,null,0,2,"ion-label",[["class","clickable playlist-name"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.showPlaylist(n.context.$implicit)&&e),e},i.Ea,i.u)),e.Qa(4,49152,null,0,u.K,[e.i,e.l],null,null),(n()(),e.gb(5,0,[" "," "])),(n()(),e.Ra(6,0,null,0,5,"div",[["slot","end"]],null,null,null,null,null)),(n()(),e.Ra(7,0,null,null,4,"ion-button",[],null,[[null,"click"]],function(n,l,t){var i=!0,u=n.component;return"click"===l&&(i=!1!==e.bb(n,9).onClick(t)&&i),"click"===l&&(i=!1!==u.actionPlaylist(n.context.$implicit)&&i),i},i.N,i.d)),e.Qa(8,49152,null,0,u.f,[e.i,e.l],null,null),e.Qa(9,16384,null,0,r.a,[[2,a.l],e.l],null,null),(n()(),e.Ra(10,0,null,0,1,"ion-icon",[["name","create"]],null,null,null,i.Z,i.p)),e.Qa(11,49152,null,0,u.z,[e.i,e.l],{name:[0,"name"]},null)],function(n,l){n(l,11,0,"create")},function(n,l){n(l,5,0,l.context.$implicit.title)})}function w(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,10,"ion-card",[],null,null,null,i.T,i.f)),e.Qa(1,49152,null,0,u.h,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,2,"ion-card-header",[["class","card-menu"]],null,null,null,i.Q,i.h)),e.Qa(3,49152,null,0,u.j,[e.i,e.l],null,null),(n()(),e.gb(-1,0,[" My playlists "])),(n()(),e.Ra(5,0,null,0,5,"ion-card-content",[],null,null,null,i.P,i.g)),e.Qa(6,49152,null,0,u.i,[e.i,e.l],null,null),(n()(),e.Ra(7,0,null,0,3,"ion-list",[["listPlaylist",""]],null,null,null,i.Fa,i.v)),e.Qa(8,49152,null,0,u.L,[e.i,e.l],null,null),(n()(),e.Ja(16777216,null,0,1,null,g)),e.Qa(10,278528,null,0,o.j,[e.R,e.O,e.u],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,10,0,l.component.listPlaylist)},null)}function k(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,37,"div",[],null,null,null,null,null)),(n()(),e.Ra(1,0,null,null,2,"div",[["class","show-when-lg"]],null,null,null,null,null)),(n()(),e.Ra(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["Your Playlists"])),(n()(),e.Ra(4,0,null,null,31,"ion-card",[],null,null,null,i.T,i.f)),e.Qa(5,49152,null,0,u.h,[e.i,e.l],null,null),(n()(),e.Ra(6,0,null,0,2,"ion-card-header",[["class","card-menu"]],null,null,null,i.Q,i.h)),e.Qa(7,49152,null,0,u.j,[e.i,e.l],null,null),(n()(),e.gb(-1,0,[" Create a playlist "])),(n()(),e.Ra(9,0,null,0,26,"ion-card-content",[],null,null,null,i.P,i.g)),e.Qa(10,49152,null,0,u.i,[e.i,e.l],null,null),(n()(),e.Ra(11,0,null,0,24,"form",[["class","playlist-new"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var i=!0,u=n.component;return"submit"===l&&(i=!1!==e.bb(n,13).onSubmit(t)&&i),"reset"===l&&(i=!1!==e.bb(n,13).onReset()&&i),"ngSubmit"===l&&(i=!1!==u.addPlaylist()&&i),i},null,null)),e.Qa(12,16384,null,0,c.n,[],null,null),e.Qa(13,540672,null,0,c.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.eb(2048,null,c.a,null,[c.d]),e.Qa(15,16384,null,0,c.i,[[4,c.a]],null,null),(n()(),e.Ra(16,0,null,null,12,"ion-item",[],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.bb(n,18).onClick(t)&&i),i},i.Da,i.t)),e.Qa(17,49152,null,0,u.E,[e.i,e.l],null,null),e.Qa(18,16384,null,0,r.a,[[2,a.l],e.l],null,null),(n()(),e.Ra(19,0,null,0,2,"ion-label",[["color","primary"]],null,null,null,i.Ea,i.u)),e.Qa(20,49152,null,0,u.K,[e.i,e.l],{color:[0,"color"]},null),(n()(),e.gb(-1,0,["Playlist title"])),(n()(),e.Ra(22,0,null,0,6,"ion-input",[["formControlName","playlistName"],["placeholder","My awesome playlist"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(n,l,t){var i=!0,u=n.component;return"ionChange"===l&&(i=!1!==e.bb(n,23)._handleInputEvent(t.target.value)&&i),"ionBlur"===l&&(i=!1!==e.bb(n,23)._handleBlurEvent()&&i),"ngModelChange"===l&&(i=!1!==(u.namePl=t)&&i),i},i.Ca,i.s)),e.Qa(23,16384,null,0,s.a,[e.l],null,null),e.eb(1024,null,c.f,function(n){return[n]},[s.a]),e.Qa(25,671744,null,0,c.c,[[3,c.a],[8,null],[8,null],[6,c.f],[2,c.p]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.eb(2048,null,c.g,null,[c.c]),e.Qa(27,16384,null,0,c.h,[[4,c.g]],null,null),e.Qa(28,49152,null,0,u.D,[e.i,e.l],{placeholder:[0,"placeholder"]},null),(n()(),e.Ra(29,0,null,null,6,"p",[["class","center"]],null,null,null,null,null)),(n()(),e.Ra(30,0,null,null,5,"ion-button",[["type","submit"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==e.bb(n,32).onClick(t)&&i),i},i.N,i.d)),e.Qa(31,49152,null,0,u.f,[e.i,e.l],{type:[0,"type"]},null),e.Qa(32,16384,null,0,r.a,[[2,a.l],e.l],null,null),(n()(),e.Ra(33,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.Z,i.p)),e.Qa(34,49152,null,0,u.z,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.gb(-1,0,[" Create playlist"])),(n()(),e.Ja(16777216,null,null,1,null,w)),e.Qa(37,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,13,0,t.playlistForm),n(l,20,0,"primary"),n(l,25,0,"playlistName",t.namePl),n(l,28,0,"My awesome playlist"),n(l,31,0,"submit"),n(l,34,0,"add"),n(l,37,0,t.listPlaylist.length>0)},function(n,l){n(l,11,0,e.bb(l,15).ngClassUntouched,e.bb(l,15).ngClassTouched,e.bb(l,15).ngClassPristine,e.bb(l,15).ngClassDirty,e.bb(l,15).ngClassValid,e.bb(l,15).ngClassInvalid,e.bb(l,15).ngClassPending),n(l,22,0,e.bb(l,27).ngClassUntouched,e.bb(l,27).ngClassTouched,e.bb(l,27).ngClassPristine,e.bb(l,27).ngClassDirty,e.bb(l,27).ngClassValid,e.bb(l,27).ngClassInvalid,e.bb(l,27).ngClassPending)})}function R(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,14,"div",[],null,null,null,null,null)),(n()(),e.Ra(1,0,null,null,13,"div",[["class","center header"]],null,null,null,null,null)),(n()(),e.Ra(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["Please connect to Tango Fury"])),(n()(),e.Ra(4,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["Create an account and connect to Tango Fury to create your own playlists and manage your favorites maestros."])),(n()(),e.Ra(6,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),e.gb(-1,null,["It's free and we won't send you any further email :)."])),(n()(),e.Ra(8,0,null,null,6,"p",[],null,null,null,null,null)),(n()(),e.Ra(9,0,null,null,5,"ion-button",[],null,[[null,"click"]],function(n,l,t){var i=!0,u=n.component;return"click"===l&&(i=!1!==e.bb(n,11).onClick(t)&&i),"click"===l&&(i=!1!==u.goToLogin()&&i),i},i.N,i.d)),e.Qa(10,49152,null,0,u.f,[e.i,e.l],null,null),e.Qa(11,16384,null,0,r.a,[[2,a.l],e.l],null,null),(n()(),e.Ra(12,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,i.Z,i.p)),e.Qa(13,49152,null,0,u.z,[e.i,e.l],{name:[0,"name"]},null),(n()(),e.gb(-1,0,[" Connect "]))],function(n,l){n(l,13,0,"person")},null)}function S(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,3,"ion-header",[],null,null,null,i.Y,i.o)),e.Qa(1,49152,null,0,u.y,[e.i,e.l],null,null),(n()(),e.Ra(2,0,null,0,1,"app-menu",[],null,null,null,d.b,d.a)),e.Qa(3,114688,null,0,f.a,[a.l],null,null),(n()(),e.Ra(4,0,null,null,5,"ion-content",[["class","fg-content"],["padding",""]],null,null,null,i.W,i.m)),e.Qa(5,49152,null,0,u.r,[e.i,e.l],null,null),(n()(),e.Ja(16777216,null,0,1,null,k)),e.Qa(7,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null),(n()(),e.Ja(16777216,null,0,1,null,R)),e.Qa(9,16384,null,0,o.k,[e.R,e.O],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,3,0),n(l,7,0,0==t.displayConnect),n(l,9,0,1==t.displayConnect)},null)}var Q=e.Na("app-playlist-list",p.a,function(n){return e.ib(0,[(n()(),e.Ra(0,0,null,null,1,"app-playlist-list",[],null,null,null,S,y)),e.Qa(1,114688,null,0,p.a,[h.a,v.a,b.a,m.a,c.b,b.a,a.l],null,null)],function(n,l){n(l,1,0)},null)},{},{},[])},gfhn:function(n,l,t){"use strict";t.d(l,"a",function(){return a});var e=function(){function n(n){this.doc=n,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return n.prototype.createGesture=function(n){return new i(this,this.newID(),n.name,n.priority||0,!!n.disableScroll)},n.prototype.createBlocker=function(n){return void 0===n&&(n={}),new u(this,this.newID(),n.disable,!!n.disableScroll)},n.prototype.start=function(n,l,t){return this.canStart(n)?(this.requestedStart.set(l,t),!0):(this.requestedStart.delete(l),!1)},n.prototype.capture=function(n,l,t){if(!this.start(n,l,t))return!1;var e=this.requestedStart,i=-1e4;if(e.forEach(function(n){i=Math.max(i,n)}),i===t){this.capturedId=l,e.clear();var u=new CustomEvent("ionGestureCaptured",{detail:n});return this.doc.body.dispatchEvent(u),!0}return e.delete(l),!1},n.prototype.release=function(n){this.requestedStart.delete(n),this.capturedId===n&&(this.capturedId=void 0)},n.prototype.disableGesture=function(n,l){var t=this.disabledGestures.get(n);void 0===t&&(t=new Set,this.disabledGestures.set(n,t)),t.add(l)},n.prototype.enableGesture=function(n,l){var t=this.disabledGestures.get(n);void 0!==t&&t.delete(l)},n.prototype.disableScroll=function(n){this.disabledScroll.add(n),1===this.disabledScroll.size&&this.doc.body.classList.add(r)},n.prototype.enableScroll=function(n){this.disabledScroll.delete(n),0===this.disabledScroll.size&&this.doc.body.classList.remove(r)},n.prototype.canStart=function(n){return void 0===this.capturedId&&!this.isDisabled(n)},n.prototype.isCaptured=function(){return void 0!==this.capturedId},n.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},n.prototype.isDisabled=function(n){var l=this.disabledGestures.get(n);return!!(l&&l.size>0)},n.prototype.newID=function(){return this.gestureId++,this.gestureId},n}(),i=function(){function n(n,l,t,e,i){this.id=l,this.name=t,this.priority=e,this.disableScroll=i,this.ctrl=n}return n.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},n.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},n.prototype.capture=function(){if(!this.ctrl)return!1;var n=this.ctrl.capture(this.name,this.id,this.priority);return n&&this.disableScroll&&this.ctrl.disableScroll(this.id),n},n.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},n.prototype.destroy=function(){this.release(),this.ctrl=void 0},n}(),u=function(){function n(n,l,t,e){this.id=l,this.disable=t,this.disableScroll=e,this.ctrl=n}return n.prototype.block=function(){if(this.ctrl){if(this.disable)for(var n=0,l=this.disable;n<l.length;n++)this.ctrl.disableGesture(l[n],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},n.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var n=0,l=this.disable;n<l.length;n++)this.ctrl.enableGesture(l[n],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},n.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},n}(),r="backdrop-no-scroll",a=new e(document)},iax6:function(n,l,t){"use strict";t.d(l,"a",function(){return r}),t("OO+k"),t("qNh5"),t("TpLW");var e=t("4oom"),i=function(n,l,t,e){return new(t||(t=Promise))(function(i,u){function r(n){try{o(e.next(n))}catch(n){u(n)}}function a(n){try{o(e.throw(n))}catch(n){u(n)}}function o(n){n.done?i(n.value):new t(function(l){l(n.value)}).then(r,a)}o((e=e.apply(n,l||[])).next())})},u=function(n,l){var t,e,i,u,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function a(u){return function(a){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,e&&(i=2&u[0]?e.return:u[0]?e.throw||((i=e.return)&&i.call(e),0):e.next)&&!(i=i.call(e,u[1])).done)return i;switch(e=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,e=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===u[0]||2===u[0])){r=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(6===u[0]&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=l.call(n,r)}catch(n){u=[6,n],e=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}},r=function(){function n(n,l,t,e,i,u,r){var a=this;this.modalCtrl=n,this.actionSheetCtrl=l,this.authService=t,this.profileService=e,this.formBuilder=i,this.authProvider=u,this.router=r,this.listPlaylist=[],this.namePl="",this.userId="",this.role="visitor",this.displayConnect=!1,this.profileService.getUserRole().then(function(n){return a.role=n,"visitor"==n&&(a.displayConnect=!0),n}),this.profileService.getUserId().then(function(n){a.userId=n}),this.playlistForm=i.group({playlistName:[""]})}return n.prototype.ionViewWillEnter=function(){this.getPlaylists()},n.prototype.addPlaylist=function(){if(null!=this.playlistForm.value.playlistName&&""!=this.playlistForm.value.playlistName){var n=this.namePl;this.namePl="",this.profileService.addPlaylist(n),this.getPlaylists()}},n.prototype.getPlaylists=function(){var n=this;this.profileService.getPlaylists().then(function(l){n.listPlaylist=l})},n.prototype.removePlaylist=function(n){confirm("Do you really want to delete this playlist ? ")&&(this.profileService.removePlaylist(n),this.getPlaylists())},n.prototype.showPlaylist=function(n){this.router.navigateByUrl("/tabs/(playlist-list:playlist-user/"+this.userId+"/"+n.key+")")},n.prototype.goToLogin=function(){this.router.navigateByUrl("login")},n.prototype.actionPlaylist=function(n){return i(this,void 0,void 0,function(){var l,t=this;return u(this,function(r){switch(r.label){case 0:return(l=[{text:"Modify playlist",icon:"settings",handler:function(){return i(t,void 0,void 0,function(){return u(this,function(l){switch(l.label){case 0:return[4,this.modalCtrl.create({component:e.a,componentProps:{playlist:n}})];case 1:return l.sent().present(),[2]}})})}},{text:"Delete Playlist",icon:"remove",handler:function(){t.removePlaylist(n)}}]).push({text:"Cancel",icon:"",handler:function(){console.log("cancel")}}),[4,this.actionSheetCtrl.create({header:"Actions",buttons:l})];case 1:return r.sent().present(),[2]}})})},n.prototype.ngOnInit=function(){try{document.querySelector("meta[name='description']").remove()}catch(n){}var n=document.createElement("meta");n.name="description",n.content="",document.getElementsByTagName("head")[0].appendChild(n)},n.prototype.goToAbout=function(){this.router.navigateByUrl("about")},n}()},lxt6:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("Izuc");var e=function(){}},omAO:function(n,l,t){"use strict";t.d(l,"a",function(){return e}),t("BHOm");var e=function(){}}}]);