(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{z8P9:function(t,i,e){"use strict";e.r(i),e.d(i,"IonCol",function(){return l}),e.d(i,"IonGrid",function(){return s}),e.d(i,"IonRow",function(){return u});var n=e("cBjU"),r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function o(t,i){return void 0===i||""===i||t.matchMedia(r[i]).matches}var d=window,a=!!(d.CSS&&d.CSS.supports&&d.CSS.supports("--a: 0")),p=["","xs","sm","md","lg","xl"],l=function(){function t(){}return t.prototype.onResize=function(){this.el.forceUpdate()},t.prototype.getColumns=function(t){for(var i,e=0,n=p;e<n.length;e++){var r=n[e],d=o(this.win,r),a=this[t+r.charAt(0).toUpperCase()+r.slice(1)];d&&void 0!==a&&(i=a)}return i},t.prototype.calculateSize=function(){var t=this.getColumns("size");if(t&&""!==t){var i="auto"===t?"auto":a?"calc(calc("+t+" / var(--ion-grid-columns, 12)) * 100%)":t/12*100+"%";return{flex:"0 0 "+i,width:""+i,"max-width":""+i}}},t.prototype.calculatePosition=function(t,i){var e,n=this.getColumns(t);if(n)return(e={})[i]=a?"calc(calc("+n+" / var(--ion-grid-columns, 12)) * 100%)":n>0&&n<12?n/12*100+"%":"auto",e},t.prototype.calculateOffset=function(){return this.calculatePosition("offset","margin-left")},t.prototype.calculatePull=function(){return this.calculatePosition("pull","right")},t.prototype.calculatePush=function(){return this.calculatePosition("push","left")},t.prototype.hostData=function(){return{style:Object.assign({},this.calculateOffset(),this.calculatePull(),this.calculatePush(),this.calculateSize())}},t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-col"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},offset:{type:String,attr:"offset"},offsetLg:{type:String,attr:"offset-lg"},offsetMd:{type:String,attr:"offset-md"},offsetSm:{type:String,attr:"offset-sm"},offsetXl:{type:String,attr:"offset-xl"},offsetXs:{type:String,attr:"offset-xs"},pull:{type:String,attr:"pull"},pullLg:{type:String,attr:"pull-lg"},pullMd:{type:String,attr:"pull-md"},pullSm:{type:String,attr:"pull-sm"},pullXl:{type:String,attr:"pull-xl"},pullXs:{type:String,attr:"pull-xs"},push:{type:String,attr:"push"},pushLg:{type:String,attr:"push-lg"},pushMd:{type:String,attr:"push-md"},pushSm:{type:String,attr:"push-sm"},pushXl:{type:String,attr:"push-xl"},pushXs:{type:String,attr:"push-xs"},size:{type:String,attr:"size"},sizeLg:{type:String,attr:"size-lg"},sizeMd:{type:String,attr:"size-md"},sizeSm:{type:String,attr:"size-sm"},sizeXl:{type:String,attr:"size-xl"},sizeXs:{type:String,attr:"size-xs"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:resize",method:"onResize",passive:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{padding:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}@media (min-width:576px){:host{padding:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}@media (min-width:768px){:host{padding:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}@media (min-width:992px){:host{padding:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}@media (min-width:1200px){:host{padding:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}"},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){this.fixed=!1}return t.prototype.hostData=function(){return{class:{"grid-fixed":this.fixed}}},t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-grid"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{fixed:{type:Boolean,attr:"fixed"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{padding:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block}@media (min-width:576px){:host{padding:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}}@media (min-width:768px){:host{padding:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}}@media (min-width:992px){:host{padding:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}}@media (min-width:1200px){:host{padding:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}}:host(.grid-fixed){width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}@media (min-width:576px){:host(.grid-fixed){width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}@media (min-width:768px){:host(.grid-fixed){width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}@media (min-width:992px){:host(.grid-fixed){width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}@media (min-width:1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}:host([no-padding]),:host([no-padding]) ::slotted(ion-col){padding:0}"},enumerable:!0,configurable:!0}),t}(),u=function(){function t(){}return t.prototype.render=function(){return Object(n.b)("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-row"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}"},enumerable:!0,configurable:!0}),t}()}}]);