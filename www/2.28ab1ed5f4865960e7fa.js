(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"19mU":function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o=function(){}},"S+eF":function(t,n,e){!function(n){"use strict";"function"==typeof bootstrap?bootstrap("promise",n):t.exports=n()}(function(){"use strict";var t=!1;try{throw new Error}catch(n){t=!!n.stack}var n,e=w(),o=function(){},r=function(){var t={task:void 0,next:null},n=t,e=!1,o=void 0,i=!1,u=[];function c(){for(var n,o;t.next;)n=(t=t.next).task,t.task=void 0,(o=t.domain)&&(t.domain=void 0,o.enter()),s(n,o);for(;u.length;)s(n=u.pop());e=!1}function s(t,n){try{t()}catch(t){if(i)throw n&&n.exit(),setTimeout(c,0),n&&n.enter(),t;setTimeout(function(){throw t},0)}n&&n.exit()}if(r=function(t){n=n.next={task:t,domain:i&&process.domain,next:null},e||(e=!0,o())},"object"==typeof process&&"[object process]"===process.toString()&&process.nextTick)i=!0,o=function(){process.nextTick(c)};else if("function"==typeof setImmediate)o="undefined"!=typeof window?setImmediate.bind(window,c):function(){setImmediate(c)};else if("undefined"!=typeof MessageChannel){var a=new MessageChannel;a.port1.onmessage=function(){o=f,a.port1.onmessage=c,c()};var f=function(){a.port2.postMessage(0)};o=function(){setTimeout(c,0),f()}}else o=function(){setTimeout(c,0)};return r.runAfter=function(t){u.push(t),e||(e=!0,o())},r}(),i=Function.call;function u(t){return function(){return i.apply(t,arguments)}}var c,s=u(Array.prototype.slice),a=u(Array.prototype.reduce||function(t,n){var e=0,o=this.length;if(1===arguments.length)for(;;){if(e in this){n=this[e++];break}if(++e>=o)throw new TypeError}for(;e<o;e++)e in this&&(n=t(n,this[e],e));return n}),f=u(Array.prototype.indexOf||function(t){for(var n=0;n<this.length;n++)if(this[n]===t)return n;return-1}),l=u(Array.prototype.map||function(t,n){var e=this,o=[];return a(e,function(r,i,u){o.push(t.call(n,i,u,e))},void 0),o}),p=Object.create||function(t){function n(){}return n.prototype=t,new n},h=u(Object.prototype.hasOwnProperty),d=Object.keys||function(t){var n=[];for(var e in t)h(t,e)&&n.push(e);return n},v=u(Object.prototype.toString);c="undefined"!=typeof ReturnValue?ReturnValue:function(t){this.value=t};var y="From previous event:";function m(n,e){if(t&&e.stack&&"object"==typeof n&&null!==n&&n.stack&&-1===n.stack.indexOf(y)){for(var o=[],r=e;r;r=r.source)r.stack&&o.unshift(r.stack);o.unshift(n.stack);var i=o.join("\n"+y+"\n");n.stack=function(t){for(var n=i.split("\n"),e=[],o=0;o<n.length;++o){var r=n[o];!k(r)&&-1===(u=r).indexOf("(module.js:")&&-1===u.indexOf("(node.js:")&&r&&e.push(r)}var u;return e.join("\n")}()}}function g(t){var n=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);if(n)return[n[1],Number(n[2])];var e=/at ([^ ]+):(\d+):(?:\d+)$/.exec(t);if(e)return[e[1],Number(e[2])];var o=/.*@(.+):(\d+)$/.exec(t);return o?[o[1],Number(o[2])]:void 0}function k(t){var o=g(t);if(!o)return!1;var r=o[1];return o[0]===n&&r>=e&&r<=Q}function w(){if(t)try{throw new Error}catch(t){var e=t.stack.split("\n"),o=g(e[0].indexOf("@")>0?e[1]:e[2]);if(!o)return;return n=o[0],o[1]}}function b(t){return t instanceof S?t:E(t)?(n=t,e=j(),b.nextTick(function(){try{n.then(e.resolve,e.reject,e.notify)}catch(t){e.reject(t)}}),e.promise):Z(t);var n,e}function j(){var n,e=[],o=[],r=p(j.prototype),i=p(S.prototype);if(i.promiseDispatch=function(t,r,i){var u=s(arguments);e?(e.push(u),"when"===r&&i[1]&&o.push(i[1])):b.nextTick(function(){n.promiseDispatch.apply(n,u)})},i.valueOf=function(){if(e)return i;var t=C(n);return O(t)&&(n=t),t},i.inspect=function(){return n?n.inspect():{state:"pending"}},b.longStackSupport&&t)try{throw new Error}catch(t){i.stack=t.stack.substring(t.stack.indexOf("\n")+1)}function u(t){n=t,i.source=t,a(e,function(n,e){b.nextTick(function(){t.promiseDispatch.apply(t,e)})},void 0),e=void 0,o=void 0}return r.promise=i,r.resolve=function(t){n||u(b(t))},r.fulfill=function(t){n||u(Z(t))},r.reject=function(t){n||u(N(t))},r.notify=function(t){n||a(o,function(n,e){b.nextTick(function(){e(t)})},void 0)},r}function x(t){if("function"!=typeof t)throw new TypeError("resolver must be a function.");var n=j();try{t(n.resolve,n.reject,n.notify)}catch(t){n.reject(t)}return n.promise}function T(t){return x(function(n,e){for(var o=0,r=t.length;o<r;o++)b(t[o]).then(n,e)})}function S(t,n,e){void 0===n&&(n=function(t){return N(new Error("Promise does not support operation: "+t))}),void 0===e&&(e=function(){return{state:"unknown"}});var o=p(S.prototype);if(o.promiseDispatch=function(e,r,i){var u;try{u=t[r]?t[r].apply(o,i):n.call(o,r,i)}catch(t){u=N(t)}e&&e(u)},o.inspect=e,e){var r=e();"rejected"===r.state&&(o.exception=r.reason),o.valueOf=function(){var t=e();return"pending"===t.state||"rejected"===t.state?o:t.value}}return o}function R(t,n,e,o){return b(t).then(n,e,o)}function C(t){if(O(t)){var n=t.inspect();if("fulfilled"===n.state)return n.value}return t}function O(t){return t instanceof S}function E(t){return(n=t)===Object(n)&&"function"==typeof t.then;var n}b.resolve=b,b.nextTick=r,b.longStackSupport=!1,"object"==typeof process&&process&&process.env&&process.env.Q_DEBUG&&(b.longStackSupport=!0),b.defer=j,j.prototype.makeNodeResolver=function(){var t=this;return function(n,e){n?t.reject(n):t.resolve(arguments.length>2?s(arguments,1):e)}},b.Promise=x,b.promise=x,x.race=T,x.all=U,x.reject=N,x.resolve=b,b.passByCopy=function(t){return t},S.prototype.passByCopy=function(){return this},b.join=function(t,n){return b(t).join(n)},S.prototype.join=function(t){return b([this,t]).spread(function(t,n){if(t===n)return t;throw new Error("Can't join: not the same: "+t+" "+n)})},b.race=T,S.prototype.race=function(){return this.then(b.race)},b.makePromise=S,S.prototype.toString=function(){return"[object Promise]"},S.prototype.then=function(t,n,e){var o=this,r=j(),i=!1;return b.nextTick(function(){o.promiseDispatch(function(n){i||(i=!0,r.resolve(function(n){try{return"function"==typeof t?t(n):n}catch(t){return N(t)}}(n)))},"when",[function(t){i||(i=!0,r.resolve(function(t){if("function"==typeof n){m(t,o);try{return n(t)}catch(t){return N(t)}}return N(t)}(t)))}])}),o.promiseDispatch(void 0,"when",[void 0,function(t){var n,o=!1;try{n=function(t){return"function"==typeof e?e(t):t}(t)}catch(t){if(o=!0,!b.onerror)throw t;b.onerror(t)}o||r.notify(n)}]),r.promise},b.tap=function(t,n){return b(t).tap(n)},S.prototype.tap=function(t){return t=b(t),this.then(function(n){return t.fcall(n).thenResolve(n)})},b.when=R,S.prototype.thenResolve=function(t){return this.then(function(){return t})},b.thenResolve=function(t,n){return b(t).thenResolve(n)},S.prototype.thenReject=function(t){return this.then(function(){throw t})},b.thenReject=function(t,n){return b(t).thenReject(n)},b.nearer=C,b.isPromise=O,b.isPromiseAlike=E,b.isPending=function(t){return O(t)&&"pending"===t.inspect().state},S.prototype.isPending=function(){return"pending"===this.inspect().state},b.isFulfilled=function(t){return!O(t)||"fulfilled"===t.inspect().state},S.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},b.isRejected=function(t){return O(t)&&"rejected"===t.inspect().state},S.prototype.isRejected=function(){return"rejected"===this.inspect().state};var I,P=[],M=[],A=[],D=!0;function L(){P.length=0,M.length=0,D||(D=!0)}function N(t){var n=S({when:function(n){return n&&function(t){if(D){var n=f(M,t);-1!==n&&("object"==typeof process&&"function"==typeof process.emit&&b.nextTick.runAfter(function(){var e=f(A,t);-1!==e&&(process.emit("rejectionHandled",P[n],t),A.splice(e,1))}),M.splice(n,1),P.splice(n,1))}}(this),n?n(t):this}},function(){return this},function(){return{state:"rejected",reason:t}});return function(t,n){D&&("object"==typeof process&&"function"==typeof process.emit&&b.nextTick.runAfter(function(){-1!==f(M,t)&&(process.emit("unhandledRejection",n,t),A.push(t))}),M.push(t),P.push(n&&void 0!==n.stack?n.stack:"(no stack) "+n))}(n,t),n}function Z(t){return S({when:function(){return t},get:function(n){return t[n]},set:function(n,e){t[n]=e},delete:function(n){delete t[n]},post:function(n,e){return null===n||void 0===n?t.apply(void 0,e):t[n].apply(t,e)},apply:function(n,e){return t.apply(n,e)},keys:function(){return d(t)}},void 0,function(){return{state:"fulfilled",value:t}})}function B(t,n,e){return b(t).spread(n,e)}function F(t,n,e){return b(t).dispatch(n,e)}function U(t){return R(t,function(t){var n=0,e=j();return a(t,function(o,r,i){var u;O(r)&&"fulfilled"===(u=r.inspect()).state?t[i]=u.value:(++n,R(r,function(o){t[i]=o,0==--n&&e.resolve(t)},e.reject,function(t){e.notify({index:i,value:t})}))},void 0),0===n&&e.resolve(t),e.promise})}function G(t){if(0===t.length)return b.resolve();var n=b.defer(),e=0;return a(t,function(o,r,i){e++,R(t[i],function(t){n.resolve(t)},function(){0==--e&&n.reject(new Error("Can't get fulfillment value from any promise, all promises were rejected."))},function(t){n.notify({index:i,value:t})})},void 0),n.promise}function V(t){return R(t,function(t){return t=l(t,b),R(U(l(t,function(t){return R(t,o,o)})),function(){return t})})}b.resetUnhandledRejections=L,b.getUnhandledReasons=function(){return P.slice()},b.stopUnhandledRejectionTracking=function(){L(),D=!1},L(),b.reject=N,b.fulfill=Z,b.master=function(t){return S({isDef:function(){}},function(n,e){return F(t,n,e)},function(){return b(t).inspect()})},b.spread=B,S.prototype.spread=function(t,n){return this.all().then(function(n){return t.apply(void 0,n)},n)},b.async=function(t){return function(){function n(t,n){var i;if("undefined"==typeof StopIteration){try{i=e[t](n)}catch(t){return N(t)}return i.done?b(i.value):R(i.value,o,r)}try{i=e[t](n)}catch(t){return function(t){return"[object StopIteration]"===v(t)||t instanceof c}(t)?b(t.value):N(t)}return R(i,o,r)}var e=t.apply(this,arguments),o=n.bind(n,"next"),r=n.bind(n,"throw");return o()}},b.spawn=function(t){b.done(b.async(t)())},b.return=function(t){throw new c(t)},b.promised=function(t){return function(){return B([this,U(arguments)],function(n,e){return t.apply(n,e)})}},b.dispatch=F,S.prototype.dispatch=function(t,n){var e=this,o=j();return b.nextTick(function(){e.promiseDispatch(o.resolve,t,n)}),o.promise},b.get=function(t,n){return b(t).dispatch("get",[n])},S.prototype.get=function(t){return this.dispatch("get",[t])},b.set=function(t,n,e){return b(t).dispatch("set",[n,e])},S.prototype.set=function(t,n){return this.dispatch("set",[t,n])},b.del=b.delete=function(t,n){return b(t).dispatch("delete",[n])},S.prototype.del=S.prototype.delete=function(t){return this.dispatch("delete",[t])},b.mapply=b.post=function(t,n,e){return b(t).dispatch("post",[n,e])},S.prototype.mapply=S.prototype.post=function(t,n){return this.dispatch("post",[t,n])},b.send=b.mcall=b.invoke=function(t,n){return b(t).dispatch("post",[n,s(arguments,2)])},S.prototype.send=S.prototype.mcall=S.prototype.invoke=function(t){return this.dispatch("post",[t,s(arguments,1)])},b.fapply=function(t,n){return b(t).dispatch("apply",[void 0,n])},S.prototype.fapply=function(t){return this.dispatch("apply",[void 0,t])},b.try=b.fcall=function(t){return b(t).dispatch("apply",[void 0,s(arguments,1)])},S.prototype.fcall=function(){return this.dispatch("apply",[void 0,s(arguments)])},b.fbind=function(t){var n=b(t),e=s(arguments,1);return function(){return n.dispatch("apply",[this,e.concat(s(arguments))])}},S.prototype.fbind=function(){var t=this,n=s(arguments);return function(){return t.dispatch("apply",[this,n.concat(s(arguments))])}},b.keys=function(t){return b(t).dispatch("keys",[])},S.prototype.keys=function(){return this.dispatch("keys",[])},b.all=U,S.prototype.all=function(){return U(this)},b.any=G,S.prototype.any=function(){return G(this)},b.allResolved=(I=V,function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn("allResolved is deprecated, use allSettled instead.",new Error("").stack),I.apply(I,arguments)}),S.prototype.allResolved=function(){return V(this)},b.allSettled=function(t){return b(t).allSettled()},S.prototype.allSettled=function(){return this.then(function(t){return U(l(t,function(t){function n(){return t.inspect()}return(t=b(t)).then(n,n)}))})},b.fail=b.catch=function(t,n){return b(t).then(void 0,n)},S.prototype.fail=S.prototype.catch=function(t){return this.then(void 0,t)},b.progress=function(t,n){return b(t).then(void 0,void 0,n)},S.prototype.progress=function(t){return this.then(void 0,void 0,t)},b.fin=b.finally=function(t,n){return b(t).finally(n)},S.prototype.fin=S.prototype.finally=function(t){return t=b(t),this.then(function(n){return t.fcall().then(function(){return n})},function(n){return t.fcall().then(function(){throw n})})},b.done=function(t,n,e,o){return b(t).done(n,e,o)},S.prototype.done=function(t,n,e){var o=function(t){b.nextTick(function(){if(m(t,r),!b.onerror)throw t;b.onerror(t)})},r=t||n||e?this.then(t,n,e):this;"object"==typeof process&&process&&process.domain&&(o=process.domain.bind(o)),r.then(void 0,o)},b.timeout=function(t,n,e){return b(t).timeout(n,e)},S.prototype.timeout=function(t,n){var e=j(),o=setTimeout(function(){n&&"string"!=typeof n||((n=new Error(n||"Timed out after "+t+" ms")).code="ETIMEDOUT"),e.reject(n)},t);return this.then(function(t){clearTimeout(o),e.resolve(t)},function(t){clearTimeout(o),e.reject(t)},e.notify),e.promise},b.delay=function(t,n){return void 0===n&&(n=t,t=void 0),b(t).delay(n)},S.prototype.delay=function(t){return this.then(function(n){var e=j();return setTimeout(function(){e.resolve(n)},t),e.promise})},b.nfapply=function(t,n){return b(t).nfapply(n)},S.prototype.nfapply=function(t){var n=j(),e=s(t);return e.push(n.makeNodeResolver()),this.fapply(e).fail(n.reject),n.promise},b.nfcall=function(t){var n=s(arguments,1);return b(t).nfapply(n)},S.prototype.nfcall=function(){var t=s(arguments),n=j();return t.push(n.makeNodeResolver()),this.fapply(t).fail(n.reject),n.promise},b.nfbind=b.denodeify=function(t){var n=s(arguments,1);return function(){var e=n.concat(s(arguments)),o=j();return e.push(o.makeNodeResolver()),b(t).fapply(e).fail(o.reject),o.promise}},S.prototype.nfbind=S.prototype.denodeify=function(){var t=s(arguments);return t.unshift(this),b.denodeify.apply(void 0,t)},b.nbind=function(t,n){var e=s(arguments,2);return function(){var o=e.concat(s(arguments)),r=j();return o.push(r.makeNodeResolver()),b(function(){return t.apply(n,arguments)}).fapply(o).fail(r.reject),r.promise}},S.prototype.nbind=function(){var t=s(arguments,0);return t.unshift(this),b.nbind.apply(void 0,t)},b.nmapply=b.npost=function(t,n,e){return b(t).npost(n,e)},S.prototype.nmapply=S.prototype.npost=function(t,n){var e=s(n||[]),o=j();return e.push(o.makeNodeResolver()),this.dispatch("post",[t,e]).fail(o.reject),o.promise},b.nsend=b.nmcall=b.ninvoke=function(t,n){var e=s(arguments,2),o=j();return e.push(o.makeNodeResolver()),b(t).dispatch("post",[n,e]).fail(o.reject),o.promise},S.prototype.nsend=S.prototype.nmcall=S.prototype.ninvoke=function(t){var n=s(arguments,1),e=j();return n.push(e.makeNodeResolver()),this.dispatch("post",[t,n]).fail(e.reject),e.promise},b.nodeify=function(t,n){return b(t).nodeify(n)},S.prototype.nodeify=function(t){if(!t)return this;this.then(function(n){b.nextTick(function(){t(null,n)})},function(n){b.nextTick(function(){t(n)})})},b.noConflict=function(){throw new Error("Q.noConflict only works when Q is used as a global")};var Q=w();return b})},TGkX:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o=function(){function t(t){this.router=t}return t.prototype.goToAbout=function(){this.router.navigateByUrl("about")},t.prototype.ngOnInit=function(){},t}()},dZuI:function(t,n,e){"use strict";e.d(n,"a",function(){return g});var o=e("iqUP"),r=(e("OO+k"),e("Rt4g")),i=e("TpLW"),u=e("B6Tt"),c=e("qNh5"),s=e("qyVB"),a=e("S+eF"),f=e("CcnG"),l=e("CssM"),p=e("9opb"),h=e("Eq7r"),d=e("tXrQ"),v=e("YxxD"),y=function(t,n,e,o){return new(e||(e=Promise))(function(r,i){function u(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){t.done?r(t.value):new e(function(n){n(t.value)}).then(u,c)}s((o=o.apply(t,n||[])).next())})},m=function(t,n){var e,o,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,o=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},g=function(){function t(t,n,e,o,r,i,u,c,s,a){this.alertService=t,this.videoService=n,this.modalCtrl=e,this.LoadingCtrl=o,this.authService=r,this.profileService=i,this.maestroService=u,this.playlistService=c,this.navCtrl=s,this.plateform=a,this.firstLoad=!1,this.displayTopVideos=0,this.videosLast=[],this.topVideos=new Array,this.selections=new Array,this.loadiTop=!1,this.loadiMaestros=!1,this.loadiSelections=!1,this.role="visitor",this.offsetAll=0,this.videosWatched=[],this.maestros=new Array,this.favoritesMaestros=new Array,this.loadMaestroInfos=!1,this.loadProfileInfos=!1,this.user=[]}return t.prototype.initPage=function(){return y(this,void 0,void 0,function(){var t,n,e=this;return m(this,function(r){switch(r.label){case 0:return 0!=this.firstLoad?[3,10]:[4,this.LoadingCtrl.create({message:"Loading many stuff, Tangofury will be ready soon !"})];case 1:return[4,(t=r.sent()).present()];case 2:return r.sent(),[4,this.maestroService.loadMaestros(new Date).then(function(){e.loadMaestroInfos=!0,console.log("maestro termine"),Object(a.resolve)(e.loadMaestroInfos)})];case 3:return r.sent(),n=o.storage(),this.playlistService.getSelections().then(function(t){t.forEach(function(t){n.ref("selections/"+t.image).getDownloadURL().then(function(n){t.image=n,e.selections.push(t)}),console.log("selection termine"),Object(a.resolve)(e.selections)})}),[4,this.videoService.getVideos(null,null,0,!0).then(function(t){e.videoService.setTopVideos(t),console.log("top videos done")})];case 4:return r.sent(),[4,this.profileService.getUserData().then(function(t){t?(e.user=t,e.userId=t.key,e.profileService.setRole(t.role),console.log("loading user ok"),e.profileService.logConnexion()):e.profileService.setRole("visitor")})];case 5:return r.sent(),"visitor"==this.profileService.retrieveRole()?[3,8]:[4,this.maestroService.LoadListFavorites(this.user).then(function(t){e.maestroService.setFavoritesMaestros(t),console.log("loading favs ok")})];case 6:return r.sent(),[4,this.profileService.loadVideosWatched(this.profileService.retrieveUserId()).then(function(){console.log("loading video watched ok")})];case 7:r.sent(),r.label=8;case 8:return[4,t.dismiss()];case 9:r.sent(),r.label=10;case 10:return this.firstLoad=!0,[2,"finish"]}})})},t.prototype.tfIsLoaded=function(){return this.firstLoad},t.prototype.presentAlert=function(){return y(this,void 0,void 0,function(){return m(this,function(t){switch(t.label){case 0:return[4,this.alertService.create({header:"Do you like Tango Fury ?",message:"Give your advice on Google Play to help Tango Fury to grow up !",buttons:[{text:"Yes ! :)",handler:function(){window.open("https://play.google.com/e/apps/details?id=tango.fury")}},{text:"Cancel",role:"cancel",handler:function(){console.log("Cancel clicked")}}]})];case 1:return[4,t.sent().present()];case 2:return t.sent(),[2]}})})},t.ngInjectableDef=f.V({factory:function(){return new t(f.Z(l.a),f.Z(s.a),f.Z(p.a),f.Z(h.a),f.Z(c.a),f.Z(i.a),f.Z(r.a),f.Z(u.a),f.Z(d.a),f.Z(v.a))},token:t,providedIn:"root"}),t}()},pWbT:function(t,n,e){"use strict";var o=e("CcnG"),r=e("ra/t"),i=e("ntG5"),u=e("gIcY"),c=e("uhuC");e("TGkX"),e("ZYCi"),e.d(n,"a",function(){return s}),e.d(n,"b",function(){return a});var s=o.Pa({encapsulation:0,styles:[["ion-button[_ngcontent-%COMP%]{background-color:transparent;color:var(--ion-color-primary-contrast);margin-right:1em;margin-top:1em}ion-button[_ngcontent-%COMP%]:hover{color:var(--ion-color-primary)}.toolbar-tf[_ngcontent-%COMP%]   .logo-tf[_ngcontent-%COMP%]{height:4.5em}"]],data:{}});function a(t){return o.ib(0,[(t()(),o.Ra(0,0,null,null,8,"ion-hide-when",[["size","md, lg, xl"]],null,null,null,r.Ba,r.r)),o.Qa(1,49152,null,0,i.z,[o.l],{size:[0,"size"]},null),(t()(),o.Ra(2,0,null,0,6,"ion-toolbar",[["class","center"],["color","dark"]],null,null,null,r.Ta,r.I)),o.Qa(3,49152,null,0,i.Xa,[o.l],{color:[0,"color"]},null),(t()(),o.Ra(4,0,null,0,4,"ion-segment",[],null,[[null,"ionChange"],[null,"ionBlur"]],function(t,n,e){var r=!0;return"ionChange"===n&&(r=!1!==o.bb(t,7)._handleChangeEvent(e.target.value)&&r),"ionBlur"===n&&(r=!1!==o.bb(t,7)._handleBlurEvent()&&r),r},r.Ma,r.B)),o.eb(5120,null,u.f,function(t){return[t]},[c.a]),o.Qa(6,49152,null,0,i.Ga,[o.l],null,null),o.Qa(7,16384,null,0,c.a,[o.l],null,null),(t()(),o.Ra(8,0,null,0,0,"img",[["alt","logo Tango Fury"],["class","logo-tf clickable center"],["slot","secondary"],["src","assets/img/logo-tangofury.png"]],null,[[null,"click"]],function(t,n,e){var o=!0;return"click"===n&&(o=!1!==t.component.goToAbout()&&o),o},null,null))],function(t,n){t(n,1,0,"md, lg, xl"),t(n,3,0,"dark")},null)}}}]);