(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{PpLr:function(t,e,n){"use strict";n.d(e,"a",function(){return o});class o{}},"S+eF":function(t,e,n){!function(e){"use strict";"function"==typeof bootstrap?bootstrap("promise",e):t.exports=e()}(function(){"use strict";var t=!1;try{throw new Error}catch(W){t=!!W.stack}var e,n=b(),o=function(){},i=function(){var t={task:void 0,next:null},e=t,n=!1,o=void 0,r=!1,s=[];function u(){for(var e,o;t.next;)e=(t=t.next).task,t.task=void 0,(o=t.domain)&&(t.domain=void 0,o.enter()),a(e,o);for(;s.length;)a(e=s.pop());n=!1}function a(t,e){try{t()}catch(W){if(r)throw e&&e.exit(),setTimeout(u,0),e&&e.enter(),W;setTimeout(function(){throw W},0)}e&&e.exit()}if(i=function(t){e=e.next={task:t,domain:r&&process.domain,next:null},n||(n=!0,o())},"object"==typeof process&&"[object process]"===process.toString()&&process.nextTick)r=!0,o=function(){process.nextTick(u)};else if("function"==typeof setImmediate)o="undefined"!=typeof window?setImmediate.bind(window,u):function(){setImmediate(u)};else if("undefined"!=typeof MessageChannel){var c=new MessageChannel;c.port1.onmessage=function(){o=l,c.port1.onmessage=u,u()};var l=function(){c.port2.postMessage(0)};o=function(){setTimeout(u,0),l()}}else o=function(){setTimeout(u,0)};return i.runAfter=function(t){s.push(t),n||(n=!0,o())},i}(),r=Function.call;function s(t){return function(){return r.apply(t,arguments)}}var u,a=s(Array.prototype.slice),c=s(Array.prototype.reduce||function(t,e){var n=0,o=this.length;if(1===arguments.length)for(;;){if(n in this){e=this[n++];break}if(++n>=o)throw new TypeError}for(;n<o;n++)n in this&&(e=t(e,this[n],n));return e}),l=s(Array.prototype.indexOf||function(t){for(var e=0;e<this.length;e++)if(this[e]===t)return e;return-1}),p=s(Array.prototype.map||function(t,e){var n=this,o=[];return c(n,function(i,r,s){o.push(t.call(e,r,s,n))},void 0),o}),f=Object.create||function(t){function e(){}return e.prototype=t,new e},d=s(Object.prototype.hasOwnProperty),h=Object.keys||function(t){var e=[];for(var n in t)d(t,n)&&e.push(n);return e},v=s(Object.prototype.toString);u="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var y="From previous event:";function m(e,n){if(t&&n.stack&&"object"==typeof e&&null!==e&&e.stack&&-1===e.stack.indexOf(y)){for(var o=[],i=n;i;i=i.source)i.stack&&o.unshift(i.stack);o.unshift(e.stack);var r=o.join("\n"+y+"\n");e.stack=function(t){for(var e=r.split("\n"),n=[],o=0;o<e.length;++o){var i=e[o];!w(i)&&-1===(s=i).indexOf("(module.js:")&&-1===s.indexOf("(node.js:")&&i&&n.push(i)}var s;return n.join("\n")}()}}function g(t){var e=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(e)return[e[1],Number(e[2])];var n=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(n)return[n[1],Number(n[2])];var o=/.*@(.+):(\d+)$/.exec(t);return o?[o[1],Number(o[2])]:void 0}function w(t){var o=g(t);if(!o)return!1;var i=o[1];return o[0]===e&&i>=n&&i<=Q}function b(){if(t)try{throw new Error}catch(W){var n=W.stack.split("\n"),o=g(n[0].indexOf("@")>0?n[1]:n[2]);if(!o)return;return e=o[0],o[1]}}function k(t){return t instanceof S?t:U(t)?(e=t,n=T(),k.nextTick(function(){try{e.then(n.resolve,n.reject,n.notify)}catch(t){n.reject(t)}}),n.promise):M(t);var e,n}function T(){var e,n=[],o=[],i=f(T.prototype),r=f(S.prototype);if(r.promiseDispatch=function(t,i,r){var s=a(arguments);n?(n.push(s),"when"===i&&r[1]&&o.push(r[1])):k.nextTick(function(){e.promiseDispatch.apply(e,s)})},r.valueOf=function(){if(n)return r;var t=I(e);return R(t)&&(e=t),t},r.inspect=function(){return e?e.inspect():{state:"pending"}},k.longStackSupport&&t)try{throw new Error}catch(W){r.stack=W.stack.substring(W.stack.indexOf("\n")+1)}function s(t){e=t,r.source=t,c(n,function(e,n){k.nextTick(function(){t.promiseDispatch.apply(t,n)})},void 0),n=void 0,o=void 0}return i.promise=r,i.resolve=function(t){e||s(k(t))},i.fulfill=function(t){e||s(M(t))},i.reject=function(t){e||s(E(t))},i.notify=function(t){e||c(o,function(e,n){k.nextTick(function(){n(t)})},void 0)},i}function j(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var e=T();try{t(e.resolve,e.reject,e.notify)}catch(n){e.reject(n)}return e.promise}function V(t){return j(function(e,n){for(var o=0,i=t.length;o<i;o++)k(t[o]).then(e,n)})}function S(t,e,n){void 0===e&&(e=function(t){return E(new Error("Promise does not support operation: "+t))}),void 0===n&&(n=function(){return{state:"unknown"}});var o=f(S.prototype);if(o.promiseDispatch=function(n,i,r){var s;try{s=t[i]?t[i].apply(o,r):e.call(o,i,r)}catch(u){s=E(u)}n&&n(s)},o.inspect=n,n){var i=n();"rejected"===i.state&&(o.exception=i.reason),o.valueOf=function(){var t=n();return"pending"===t.state||"rejected"===t.state?o:t.value}}return o}function x(t,e,n,o){return k(t).then(e,n,o)}function I(t){if(R(t)){var e=t.inspect();if("fulfilled"===e.state)return e.value}return t}function R(t){return t instanceof S}function U(t){return(e=t)===Object(e)&&"function"==typeof t.then;var e}k.resolve=k,k.nextTick=i,k.longStackSupport=!1,"object"==typeof process&&process&&process.env&&process.env.Q_DEBUG&&(k.longStackSupport=!0),k.defer=T,T.prototype.makeNodeResolver=function(){var t=this;return function(e,n){e?t.reject(e):t.resolve(arguments.length>2?a(arguments,1):n)}},k.Promise=j,k.promise=j,j.race=V,j.all=F,j.reject=E,j.resolve=k,k.passByCopy=function(t){return t},S.prototype.passByCopy=function(){return this},k.join=function(t,e){return k(t).join(e)},S.prototype.join=function(t){return k([this,t]).spread(function(t,e){if(t===e)return t;throw new Error("Can't join: not the same: "+t+" "+e)})},k.race=V,S.prototype.race=function(){return this.then(k.race)},k.makePromise=S,S.prototype.toString=function(){return"[object Promise]"},S.prototype.then=function(t,e,n){var o=this,i=T(),r=!1;return k.nextTick(function(){o.promiseDispatch(function(e){r||(r=!0,i.resolve(function(e){try{return"function"==typeof t?t(e):e}catch(n){return E(n)}}(e)))},"when",[function(t){r||(r=!0,i.resolve(function(t){if("function"==typeof e){m(t,o);try{return e(t)}catch(n){return E(n)}}return E(t)}(t)))}])}),o.promiseDispatch(void 0,"when",[void 0,function(t){var e,o=!1;try{e=function(t){return"function"==typeof n?n(t):t}(t)}catch(W){if(o=!0,!k.onerror)throw W;k.onerror(W)}o||i.notify(e)}]),i.promise},k.tap=function(t,e){return k(t).tap(e)},S.prototype.tap=function(t){return t=k(t),this.then(function(e){return t.fcall(e).thenResolve(e)})},k.when=x,S.prototype.thenResolve=function(t){return this.then(function(){return t})},k.thenResolve=function(t,e){return k(t).thenResolve(e)},S.prototype.thenReject=function(t){return this.then(function(){throw t})},k.thenReject=function(t,e){return k(t).thenReject(e)},k.nearer=I,k.isPromise=R,k.isPromiseAlike=U,k.isPending=function(t){return R(t)&&"pending"===t.inspect().state},S.prototype.isPending=function(){return"pending"===this.inspect().state},k.isFulfilled=function(t){return!R(t)||"fulfilled"===t.inspect().state},S.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},k.isRejected=function(t){return R(t)&&"rejected"===t.inspect().state},S.prototype.isRejected=function(){return"rejected"===this.inspect().state};var P,L=[],C=[],D=[],A=!0;function O(){L.length=0,C.length=0,A||(A=!0)}function E(t){var e=S({when:function(e){return e&&function(t){if(A){var e=l(C,t);-1!==e&&("object"==typeof process&&"function"==typeof process.emit&&k.nextTick.runAfter(function(){var n=l(D,t);-1!==n&&(process.emit("rejectionHandled",L[e],t),D.splice(n,1))}),C.splice(e,1),L.splice(e,1))}}(this),e?e(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return function(t,e){A&&("object"==typeof process&&"function"==typeof process.emit&&k.nextTick.runAfter(function(){-1!==l(C,t)&&(process.emit("unhandledRejection",e,t),D.push(t))}),C.push(t),L.push(e&&void 0!==e.stack?e.stack:"(no stack) "+e))}(e,t),e}function M(t){return S({when:function(){return t},get:function(e){return t[e]},set:function(e,n){t[e]=n},delete:function(e){delete t[e]},post:function(e,n){return null==e?t.apply(void 0,n):t[e].apply(t,n)},apply:function(e,n){return t.apply(e,n)},keys:function(){return h(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function B(t,e,n){return k(t).spread(e,n)}function N(t,e,n){return k(t).dispatch(e,n)}function F(t){return x(t,function(t){var e=0,n=T();return c(t,function(o,i,r){var s;R(i)&&"fulfilled"===(s=i.inspect()).state?t[r]=s.value:(++e,x(i,function(o){t[r]=o,0==--e&&n.resolve(t)},n.reject,function(t){n.notify({index:r,value:t})}))},void 0),0===e&&n.resolve(t),n.promise})}function q(t){if(0===t.length)return k.resolve();var e=k.defer(),n=0;return c(t,function(o,i,r){n++,x(t[r],function(t){e.resolve(t)},function(){0==--n&&e.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))},function(t){e.notify({index:r,value:t})})},void 0),e.promise}function G(t){return x(t,function(t){return t=p(t,k),x(F(p(t,function(t){return x(t,o,o)})),function(){return t})})}k.resetUnhandledRejections=O,k.getUnhandledReasons=function(){return L.slice()},k.stopUnhandledRejectionTracking=function(){O(),A=!1},O(),k.reject=E,k.fulfill=M,k.master=function(t){return S({isDef:function(){}},function(e,n){return N(t,e,n)},function(){return k(t).inspect()})},k.spread=B,S.prototype.spread=function(t,e){return this.all().then(function(e){return t.apply(void 0,e)},e)},k.async=function(t){return function(){function e(t,e){var r;if("undefined"==typeof StopIteration){try{r=n[t](e)}catch(s){return E(s)}return r.done?k(r.value):x(r.value,o,i)}try{r=n[t](e)}catch(s){return function(t){return"[object StopIteration]"===v(t)||t instanceof u}(s)?k(s.value):E(s)}return x(r,o,i)}var n=t.apply(this,arguments),o=e.bind(e,"next"),i=e.bind(e,"throw");return o()}},k.spawn=function(t){k.done(k.async(t)())},k.return=function(t){throw new u(t)},k.promised=function(t){return function(){return B([this,F(arguments)],function(e,n){return t.apply(e,n)})}},k.dispatch=N,S.prototype.dispatch=function(t,e){var n=this,o=T();return k.nextTick(function(){n.promiseDispatch(o.resolve,t,e)}),o.promise},k.get=function(t,e){return k(t).dispatch("get",[e])},S.prototype.get=function(t){return this.dispatch("get",[t])},k.set=function(t,e,n){return k(t).dispatch("set",[e,n])},S.prototype.set=function(t,e){return this.dispatch("set",[t,e])},k.del=k.delete=function(t,e){return k(t).dispatch("delete",[e])},S.prototype.del=S.prototype.delete=function(t){return this.dispatch("delete",[t])},k.mapply=k.post=function(t,e,n){return k(t).dispatch("post",[e,n])},S.prototype.mapply=S.prototype.post=function(t,e){return this.dispatch("post",[t,e])},k.send=k.mcall=k.invoke=function(t,e){return k(t).dispatch("post",[e,a(arguments,2)])},S.prototype.send=S.prototype.mcall=S.prototype.invoke=function(t){return this.dispatch("post",[t,a(arguments,1)])},k.fapply=function(t,e){return k(t).dispatch("apply",[void 0,e])},S.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},k.try=k.fcall=function(t){return k(t).dispatch("apply",[void 0,a(arguments,1)])},S.prototype.fcall=function(){return this.dispatch("apply",[void 0,a(arguments)])},k.fbind=function(t){var e=k(t),n=a(arguments,1);return function(){return e.dispatch("apply",[this,n.concat(a(arguments))])}},S.prototype.fbind=function(){var t=this,e=a(arguments);return function(){return t.dispatch("apply",[this,e.concat(a(arguments))])}},k.keys=function(t){return k(t).dispatch("keys",[])},S.prototype.keys=function(){return this.dispatch("keys",[])},k.all=F,S.prototype.all=function(){return F(this)},k.any=q,S.prototype.any=function(){return q(this)},k.allResolved=(P=G,function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("allResolved is deprecated, use allSettled instead.",new Error("").stack),P.apply(P,arguments)}),S.prototype.allResolved=function(){return G(this)},k.allSettled=function(t){return k(t).allSettled()},S.prototype.allSettled=function(){return this.then(function(t){return F(p(t,function(t){function e(){return t.inspect()}return(t=k(t)).then(e,e)}))})},k.fail=k.catch=function(t,e){return k(t).then(void 0,e)},S.prototype.fail=S.prototype.catch=function(t){return this.then(void 0,t)},k.progress=function(t,e){return k(t).then(void 0,void 0,e)},S.prototype.progress=function(t){return this.then(void 0,void 0,t)},k.fin=k.finally=function(t,e){return k(t).finally(e)},S.prototype.fin=S.prototype.finally=function(t){return t=k(t),this.then(function(e){return t.fcall().then(function(){return e})},function(e){return t.fcall().then(function(){throw e})})},k.done=function(t,e,n,o){return k(t).done(e,n,o)},S.prototype.done=function(t,e,n){var o=function(t){k.nextTick(function(){if(m(t,i),!k.onerror)throw t;k.onerror(t)})},i=t||e||n?this.then(t,e,n):this;"object"==typeof process&&process&&process.domain&&(o=process.domain.bind(o)),i.then(void 0,o)},k.timeout=function(t,e,n){return k(t).timeout(e,n)},S.prototype.timeout=function(t,e){var n=T(),o=setTimeout(function(){e&&"string"!=typeof e||((e=new Error(e||"Timed out after "+t+" ms")).code="ETIMEDOUT"),n.reject(e)},t);return this.then(function(t){clearTimeout(o),n.resolve(t)},function(t){clearTimeout(o),n.reject(t)},n.notify),n.promise},k.delay=function(t,e){return void 0===e&&(e=t,t=void 0),k(t).delay(e)},S.prototype.delay=function(t){return this.then(function(e){var n=T();return setTimeout(function(){n.resolve(e)},t),n.promise})},k.nfapply=function(t,e){return k(t).nfapply(e)},S.prototype.nfapply=function(t){var e=T(),n=a(t);return n.push(e.makeNodeResolver()),this.fapply(n).fail(e.reject),e.promise},k.nfcall=function(t){var e=a(arguments,1);return k(t).nfapply(e)},S.prototype.nfcall=function(){var t=a(arguments),e=T();return t.push(e.makeNodeResolver()),this.fapply(t).fail(e.reject),e.promise},k.nfbind=k.denodeify=function(t){var e=a(arguments,1);return function(){var n=e.concat(a(arguments)),o=T();return n.push(o.makeNodeResolver()),k(t).fapply(n).fail(o.reject),o.promise}},S.prototype.nfbind=S.prototype.denodeify=function(){var t=a(arguments);return t.unshift(this),k.denodeify.apply(void 0,t)},k.nbind=function(t,e){var n=a(arguments,2);return function(){var o=n.concat(a(arguments)),i=T();return o.push(i.makeNodeResolver()),k(function(){return t.apply(e,arguments)}).fapply(o).fail(i.reject),i.promise}},S.prototype.nbind=function(){var t=a(arguments,0);return t.unshift(this),k.nbind.apply(void 0,t)},k.nmapply=k.npost=function(t,e,n){return k(t).npost(e,n)},S.prototype.nmapply=S.prototype.npost=function(t,e){var n=a(e||[]),o=T();return n.push(o.makeNodeResolver()),this.dispatch("post",[t,n]).fail(o.reject),o.promise},k.nsend=k.nmcall=k.ninvoke=function(t,e){var n=a(arguments,2),o=T();return n.push(o.makeNodeResolver()),k(t).dispatch("post",[e,n]).fail(o.reject),o.promise},S.prototype.nsend=S.prototype.nmcall=S.prototype.ninvoke=function(t){var e=a(arguments,1),n=T();return e.push(n.makeNodeResolver()),this.dispatch("post",[t,e]).fail(n.reject),n.promise},k.nodeify=function(t,e){return k(t).nodeify(e)},S.prototype.nodeify=function(t){if(!t)return this;this.then(function(e){k.nextTick(function(){t(null,e)})},function(e){k.nextTick(function(){t(e)})})},k.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var Q=b();return k})},dZuI:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var o=n("iqUP"),i=n("ZZ/e"),r=n("Rt4g"),s=n("TpLW"),u=n("B6Tt"),a=n("qNh5"),c=n("qyVB"),l=n("S+eF"),p=n("8Y7J"),f=function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function s(t){try{a(o.next(t))}catch(e){r(e)}}function u(t){try{a(o.throw(t))}catch(e){r(e)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,u)}a((o=o.apply(t,e||[])).next())})};class d{constructor(t,e,n,o,i,r,s,u,a,c){this.alertService=t,this.videoService=e,this.modalCtrl=n,this.LoadingCtrl=o,this.authService=i,this.profileService=r,this.maestroService=s,this.playlistService=u,this.navCtrl=a,this.plateform=c,this.firstLoad=!1,this.displayTopVideos=0,this.videosLast=[],this.topVideos=new Array,this.selections=new Array,this.loadiTop=!1,this.loadiMaestros=!1,this.loadiSelections=!1,this.role="visitor",this.offsetAll=0,this.videosWatched=[],this.maestros=new Array,this.favoritesMaestros=new Array,this.loadMaestroInfos=!1,this.loadProfileInfos=!1,this.user=[]}initPage(){return f(this,void 0,void 0,function*(){if(0==this.firstLoad){let e=yield this.LoadingCtrl.create({message:"Loading many stuff, Tangofury will be ready soon !"});yield e.present(),(new Date).getTime(),yield this.maestroService.loadMaestros(new Date).then(()=>{this.loadMaestroInfos=!0,(new Date).getTime(),Object(l.resolve)(this.loadMaestroInfos)});var t=o.storage();yield this.playlistService.getSelections().then(e=>{e.forEach(e=>{t.ref("selections/"+e.image).getDownloadURL().then(t=>{e.image=t,this.selections.push(e)}),(new Date).getTime(),Object(l.resolve)(this.selections)})}),yield this.videoService.getVideos(null,null,0,!0).then(t=>{this.videoService.setTopVideos(t),(new Date).getTime()}),yield this.profileService.getUserData().then(t=>{t?(this.user=t,this.userId=t.key,this.profileService.setRole(t.role),(new Date).getTime(),this.profileService.logConnexion()):this.profileService.setRole("visitor")}),"user"==this.profileService.retrieveRole()&&(yield this.maestroService.LoadListFavorites(this.user).then(t=>{this.maestroService.setFavoritesMaestros(t),(new Date).getTime()})),this.profileService.loadVideosWatched(this.profileService.retrieveUserId()).then(()=>{(new Date).getTime()}),yield e.dismiss()}return this.firstLoad=!0,"finish"})}tfIsLoaded(){return this.firstLoad}reInitFirstLoad(){this.firstLoad=!1}presentAlert(){return f(this,void 0,void 0,function*(){let t=yield this.alertService.create({header:"Do you like Tango Fury ?",message:"Give your advice on Google Play to help Tango Fury to grow up !",buttons:[{text:"Yes ! :)",handler:()=>{window.open("https://play.google.com/e/apps/details?id=tango.fury")}},{text:"Cancel",role:"cancel",handler:()=>{console.log("Cancel clicked")}}]});yield t.present()})}}d.ngInjectableDef=p.Q({factory:function(){return new d(p.U(i.b),p.U(c.a),p.U(i.Hb),p.U(i.Gb),p.U(a.a),p.U(s.a),p.U(r.a),p.U(u.a),p.U(i.Ib),p.U(i.Kb))},token:d,providedIn:"root"})},qyVB:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var o=n("ZZ/e"),i=n("iqUP"),r=n("TpLW"),s=n("Rt4g"),u=n("8Y7J"),a=function(t,e,n,o){return new(n||(n=Promise))(function(i,r){function s(t){try{a(o.next(t))}catch(e){r(e)}}function u(t){try{a(o.throw(t))}catch(e){r(e)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,u)}a((o=o.apply(t,e||[])).next())})};class c{constructor(t,e,n,o){this.loadingCtrl=t,this.profileService=e,this.maestroService=n,this.platform=o,this.videos=new Array,this.topVideos=[],this.allVideos=[],this.allMilongas=[],this.allVals=[],this.allOthers=[],this.allLessons=[],this.limitOffset=24}launchVideo(t){window.open("https://www.youtube.com/watch?v="+t.youtubeId)}getVideos(t,e="",n=0,o=!1){return new Promise(r=>{if(null==t)if(null==e)if(1==o)var s=i.database().ref("/videos").orderByChild("topVideo").equalTo(1).limitToLast(n+24);else s=i.database().ref("/videos").orderByChild("datePublication").limitToLast(n+24);else s=i.database().ref("/videos").orderByChild("type").equalTo(e).limitToLast(n+24);else s=null==e?i.database().ref("maestros/"+t.key+"/videos").orderByChild("datePublication").limitToLast(n+24):i.database().ref("maestros/"+t.key+"/videos").orderByChild("type").equalTo(e).limitToLast(n+24);var u=this.profileService.getVideosWatched();s.once("value").then(t=>{let e=[];t.forEach(function(t){var n={key:t.key,id:t.child("id").val(),title:t.child("title").val(),youtubeId:t.child("youtubeId").val(),urlImage:t.child("urlImage").val(),datePublication:t.child("datePublication").val(),description:t.child("description").val(),importUser:t.child("importUser").val(),topVideo:t.child("topVideo").val(),type:t.child("type").val(),valid:t.child("valid").val(),dateAdd:t.child("dateAdd").val(),seen:!1};u.indexOf(n.youtubeId)>-1&&(n.seen=!0),n.valid&&e.push(n)}),r(e.length>0?e.reverse():[])})})}loadAllVideos(){return new Promise((t,e)=>{i.database().ref("/videos").orderByChild("datePublication").once("value").then(e=>{let n=[],o=[];e.forEach(function(t){var e={key:t.key,id:t.child("id").val(),title:t.child("title").val(),youtubeId:t.child("youtubeId").val(),urlImage:t.child("urlImage").val(),datePublication:t.child("datePublication").val(),description:t.child("description").val(),importUser:t.child("importUser").val(),topVideo:t.child("topVideo").val(),type:t.child("type").val(),valid:t.child("valid").val(),dateAdd:t.child("dateAdd").val(),seen:!1};e.valid&&(n.push(e),e.topVideo&&o.push(e))}),n.length>0?(this.allVideos=n,this.topVideos=o,this.allVideos.reverse(),t(this.allVideos)):t(null)})})}addToVideos(t){this.allVideos.unshift(t)}setVideos(t){this.allVideos=t;for(let e of this.allVideos)"milonga"==e.type&&this.allMilongas.push(e),"vals"==e.type&&this.allVals.push(e),"other"==e.type&&this.allOthers.push(e),"lesson"==e.type&&this.allLessons.push(e)}getAllVideos(){return this.allVideos}presentLoading(t){return a(this,void 0,void 0,function*(){let e=yield this.loadingCtrl.create({message:t,duration:500});yield e.present()})}getTopvideos(t){return this.topVideos.slice(t,t+this.limitOffset)}setTopVideos(t){this.topVideos=t}addTopVideo(t){this.presentLoading("Setting as a top video"),t.topVideo=1,i.database().ref(`/videos/${t.key}`).set(t),this.topVideos.unshift(t)}removeTopVideo(t){t.topVideo=0,i.database().ref(`/videos/${t.key}`).set(t)}playVideo(t){t.seen=!0,this.profileService.setVideoSeen(t),window.open("https://www.youtube.com/watch?v="+t.youtubeId)}setType(t,e){return t.type=e,this.maestroService.getMaestros().forEach(n=>{this.findVideo(t,"maestros/"+n.key+"/videos","setType",e).then()}),this.findVideo(t,"videos","setType",e).then(),!0}deleteVideo(t){this.maestroService.getMaestros().forEach(e=>{this.findVideo(t,"maestros/"+e.key+"/videos","delete",null).then()}),this.deleteGeneralVideo(t)}deleteGeneralVideo(t){i.database().ref("videos/"+t.key).set(null),i.database().ref("/videos-deleted/").push(t.youtubeId)}getDeletedVideos(){return a(this,void 0,void 0,function*(){var t=Array();return(yield i.database().ref("videos-deleted").once("value")).forEach(function(e){t.push(e.val())}),t})}findVideo(t,e,n,o){return new Promise((r,s)=>{i.database().ref(e).orderByChild("youtubeId").equalTo(t.youtubeId).once("value").then(r=>{r.forEach(function(r){"delete"==n&&(t.valid=0,i.database().ref(e+"/"+r.key).set(t)),"setType"==n&&(t.type=o,i.database().ref(e+"/"+r.key).set(t))})})})}}c.ngInjectableDef=u.Q({factory:function(){return new c(u.U(o.Gb),u.U(r.a),u.U(s.a),u.U(o.Kb))},token:c,providedIn:"root"})}}]);