(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{dkA4:function(e,t,n){"use strict";n.r(t),n.d(t,"IonNav",function(){return p}),n.d(t,"IonNavPop",function(){return l}),n.d(t,"IonNavPush",function(){return d}),n.d(t,"IonNavSetRoot",function(){return v});var i=n("B5Ai"),o=n("cBjU"),r=n("HHlg"),s=n("TJRR"),a=n("cHb+"),u=function(){function e(e,t){this.component=e,this.params=t,this.state=1}return e.prototype.init=function(e){return i.a(this,void 0,void 0,function(){var t,n;return i.c(this,function(i){switch(i.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(r.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=i.sent(),i.label=2;case 2:return[2]}})})},e.prototype._destroy=function(){Object(s.i)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}();function c(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var i=e.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;var o=Object.keys(i),r=Object.keys(n);if(o.length!==r.length)return!1;for(var s=0,a=o;s<a.length;s++){var u=a[s];if(i[u]!==n[u])return!1}return!0}function h(e,t){return e?e instanceof u?e:new u(e,t):null}var p=function(){function e(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return i.a(this,void 0,void 0,function(){var e,t=this;return i.c(this,function(i){switch(i.label){case 0:return this.rootChanged(),e=this,[4,n.e(0).then(n.bind(null,"2jMD"))];case 1:return e.gesture=i.sent().createGesture({el:this.win.document.body,queue:this.queue,gestureName:"goback-swipe",gesturePriority:30,threshold:10,canStart:function(){return t.canStart()},onStart:function(){return t.onStart()},onMove:function(e){return t.onMove(e)},onEnd:function(e){return t.onEnd(e)}}),this.swipeGestureChanged(),[2]}})})},e.prototype.componentDidUnload=function(){for(var e=0,t=this.views;e<t.length;e++){var n=t[e];Object(a.b)(this.win,n.element,"ionViewWillUnload"),n._destroy()}this.gesture&&this.gesture.destroy(),this.sbTrns&&this.sbTrns.destroy(),this.transInstr.length=this.views.length=0,this.sbTrns=void 0,this.destroyed=!0},e.prototype.push=function(e,t,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},i)},e.prototype.insert=function(e,t,n,i,o){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:i},o)},e.prototype.insertPages=function(e,t,n,i){return this.queueTrns({insertStart:e,insertViews:t,opts:n},i)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var i={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(i.removeView=e,i.removeStart=1):"number"==typeof e&&(i.removeStart=e+1),this.queueTrns(i,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,i){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},i)},e.prototype.setRoot=function(e,t,n,i){return this.setPages([{page:e,params:t}],n,i)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var o,r=this,s=this.getActiveSync();if(c(s,e,t))return Promise.resolve({changed:!1,element:s.element});var a,u=new Promise(function(e){return o=e}),h={updateURL:!1,viewIsReady:function(e){var t,n=new Promise(function(e){return t=e});return o({changed:!0,element:e,markVisible:function(){return i.a(r,void 0,void 0,function(){return i.c(this,function(e){switch(e.label){case 0:return t(),[4,a];case 1:return e.sent(),[2]}})})}}),n}};if(0===n)a=this.setRoot(e,t,h);else{var p=this.views.find(function(n){return c(n,e,t)});p?a=this.popTo(p,Object.assign({},h,{direction:"back"})):1===n?a=this.push(e,t,h):-1===n&&(a=this.setRoot(e,t,Object.assign({},h,{direction:"back",animated:!0})))}return u},e.prototype.getRouteId=function(){return i.a(this,void 0,void 0,function(){var e;return i.c(this,function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]})})},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=this.win.document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?-1:1)}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return i.a(this,void 0,void 0,function(){var t,n,o,r;return i.c(this,function(i){switch(i.label){case 0:if(i.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&1===n.state?[4,n.init(this.el)]:[3,2];case 1:i.sent(),i.label=2;case 2:return this.postViewInit(n,t,e),(e.enteringRequiresTransition||e.leavingRequiresTransition)&&n!==t?[4,this.transition(n,t,e)]:[3,4];case 3:return o=i.sent(),[3,5];case 4:o={hasCompleted:!0,requiresTransition:!1},i.label=5;case 5:return this.success(o,e),this.ionNavDidChange.emit(),[3,7];case 6:return r=i.sent(),this.failed(r,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}})})},e.prototype.prepareTI=function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(s.i)(void 0!==e.removeStart,"removeView needs removeStart"),Object(s.i)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var i=e.insertViews;if(i){Object(s.i)(i.length>0,"length can not be zero");var o=i.map(function(e){return e instanceof u?e:"page"in e?h(e.page,e.params):h(e,void 0)}).filter(function(e){return null!==e});if(0===o.length)throw new Error("invalid views to insert");for(var r=0,a=o;r<a.length;r++){var c=a[r];c.delegate=e.opts.delegate;var p=c.nav;if(p&&p!==this)throw new Error("inserted view was already inserted");if(3===c.state)throw new Error("inserted view was already destroyed")}e.insertViews=o}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var i=e.removeStart;if(void 0!==i)for(var o=this.views,r=i+e.removeCount,s=o.length-1;s>=0;s--){var a=o[s];if((s<i||s>=r)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){Object(s.i)(t||e,"Both leavingView and enteringView are null"),Object(s.i)(n.resolve,"resolve must be valid"),Object(s.i)(n.reject,"reject must be valid");var i,o=n.opts,r=n.insertViews,u=n.removeStart,c=n.removeCount;if(void 0!==u&&void 0!==c){Object(s.i)(u>=0,"removeStart can not be negative"),Object(s.i)(c>=0,"removeCount can not be negative"),i=[];for(var h=0;h<c;h++)(g=this.views[h+u])&&g!==e&&g!==t&&i.push(g);o.direction=o.direction||"back"}var p=this.views.length+(void 0!==r?r.length:0)-(void 0!==c?c:0);if(Object(s.i)(p>=0,"final balance can not be negative"),0===p)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(r){for(var l=n.insertStart,d=0,v=r;d<v.length;d++)this.insertViewAt(g=v[d],l),l++;n.enteringRequiresTransition&&(o.direction=o.direction||"forward")}if(i&&i.length>0){for(var f=0,m=i;f<m.length;f++){var g=m[f];Object(a.b)(this.win,g.element,"ionViewWillLeave"),Object(a.b)(this.win,g.element,"ionViewDidLeave"),Object(a.b)(this.win,g.element,"ionViewWillUnload")}for(var b=0,y=i;b<y.length;b++)this.destroyView(g=y[b])}},e.prototype.transition=function(e,t,n){return i.a(this,void 0,void 0,function(){var o,r,s,u,c,h,p,l=this;return i.c(this,function(i){switch(i.label){case 0:return this.sbTrns&&(this.sbTrns.destroy(),this.sbTrns=void 0),r=(o=n.opts).progressAnimation?function(e){l.sbTrns=e}:void 0,s=e.element,u=t&&t.element,c=this.animated&&this.config.getBoolean("animated",!0),h=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(e),animationCtrl:this.animationCtrl,queue:this.queue,window:this.win,baseEl:this.el,progressCallback:r,animated:c,enteringEl:s,leavingEl:u},o),[4,Object(a.d)(h)];case 1:return p=i.sent().hasCompleted,[2,this.transitionFinish(p,e,t,o)]}})})},e.prototype.transitionFinish=function(e,t,n,i){var o=e?t:n;return o&&this.cleanup(o),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:i.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,i=n.indexOf(e);i>-1?(Object(s.i)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(i,1)[0])):(Object(s.i)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(s.i)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(s.i)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),i=t.length-1;i>=0;i--){var o=t[i],r=o.element;i>n?(Object(a.b)(this.win,r,"ionViewWillUnload"),this.destroyView(o)):i<n&&Object(a.c)(r,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&this.canGoBackSync()},e.prototype.onStart=function(){this.isTransitioning||this.transInstr.length>0||this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbTrns&&(this.isTransitioning=!0,this.sbTrns.progressStep(e.deltaX/this.win.innerWidth))},e.prototype.onEnd=function(e){if(this.sbTrns){var t=this.win.innerWidth,n=e.deltaX/t,i=e.velocityX,o=i>=0&&(i>.2||e.deltaX>t/2),r=(o?1-n:n)*t,s=0;if(r>5){var a=r/Math.abs(i);s=Math.min(a,300)}this.sbTrns.progressEnd(o,n,s)}},e.prototype.render=function(){return["ios"===this.mode&&Object(o.b)("div",{class:"nav-decor"}),Object(o.b)("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-nav"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-nav-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor.sc-ion-nav{display:none}.show-decor.sc-ion-nav-h   .nav-decor.sc-ion-nav{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");e&&e.pop({skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),d=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.push(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),v=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),t=this.component;e&&void 0!==t&&e.setRoot(t,this.componentProps,{skipIfBusy:!0})},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}()}}]);