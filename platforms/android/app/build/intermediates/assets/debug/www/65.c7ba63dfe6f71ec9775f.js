(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{frvz:function(n,o,e){"use strict";e.r(o),e.d(o,"mdTransitionAnimation",function(){return a}),e("gDZG");const i="translateY",t="40px",r="0px";function a(n,o,e){const a=e.leavingEl,s=c(e.enteringEl),d=new n;d.addElement(s).beforeRemoveClass("ion-page-invisible");const u="back"===e.direction;u?d.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(e.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo(i,t,r,!0).fromTo("opacity",.01,1,!0);const p=s.querySelector("ion-toolbar");if(p){const o=new n;o.addElement(p),d.add(o)}if(a&&u){d.duration(e.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const o=new n;o.addElement(c(a)).fromTo(i,r,t).fromTo("opacity",1,0),d.add(o)}return Promise.resolve(d)}function c(n){return n.classList.contains("ion-page")?n:n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||n}}}]);