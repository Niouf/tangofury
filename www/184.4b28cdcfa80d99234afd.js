(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{swaW:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return o});var i=n("49CS");function o(t,e){var n,o,d,f=10*-u,l=0,v=!1,p=!1,L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),b=new WeakMap;function w(t){f=Object(i.b)(t),E(t)}function m(){clearTimeout(d),d=void 0,n&&(S(!1),n=void 0),v=!0}function h(t){n||p||(v=!1,g(function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}}(t),t))}function E(t){p||(g(void 0,t),v&&t.cancelable&&t.preventDefault())}function g(t,e){if(!t||t!==n){clearTimeout(d),d=void 0;var o=Object(i.j)(e),s=o.x,u=o.y;if(n){if(b.has(n))throw new Error("internal error");n.classList.contains(r)||j(n,s,u),S(!0)}if(t){var f=b.get(t);f&&(clearTimeout(f),b.delete(t));var l=a(t)?0:c;t.classList.remove(r),d=setTimeout(function(){j(t,s,u),d=void 0},l)}n=t}}function j(t,e,n){l=Date.now(),t.classList.add(r);var i=L&&function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}(t);i&&i.addRipple&&(o=i.addRipple(e,n))}function S(t){void 0!==o&&o.then(function(t){return t()});var e=n;if(e){var i=s-Date.now()+l;if(t&&i>0&&!a(e)){var c=setTimeout(function(){e.classList.remove(r),b.delete(e)},s);b.set(e,c)}else e.classList.remove(r)}}t.addEventListener("click",function(t){(v||p)&&(t.preventDefault(),t.stopPropagation())},!0),t.addEventListener("ionScrollStart",function(){p=!0,m()}),t.addEventListener("ionScrollEnd",function(){p=!1}),t.addEventListener("ionGestureCaptured",m),t.addEventListener("touchstart",function(t){f=Object(i.b)(t),h(t)},!0),t.addEventListener("touchcancel",w,!0),t.addEventListener("touchend",w,!0),t.addEventListener("mousedown",function(t){var e=Object(i.b)(t)-u;f<e&&h(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(i.b)(t)-u;f<e&&E(t)},!0)}function a(t){return t.classList.contains("ion-activatable-instant")}var r="activated",c=200,s=200,u=2500}}]);