(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{W86d:function(o,e,a){"use strict";a.r(e),a.d(e,"IonSearchbar",function(){return i});var t=a("cBjU"),r=a("TJRR"),n=a("HHlg"),i=function(){function o(){this.isCancelVisible=!1,this.shouldAlignLeft=!0,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonIcon="md-arrow-back",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search",this.value=""}return o.prototype.debounceChanged=function(){this.ionChange=Object(r.g)(this.ionChange,this.debounce)},o.prototype.valueChanged=function(){var o=this.nativeInput,e=this.value;o.value!==e&&(o.value=e),this.ionChange.emit({value:e})},o.prototype.componentDidLoad=function(){this.positionElements(),this.debounceChanged()},o.prototype.focus=function(){this.nativeInput.focus()},o.prototype.clearInput=function(o){var e=this;this.ionClear.emit(),o&&(o.preventDefault(),o.stopPropagation()),setTimeout(function(){""!==e.value&&(e.value="",e.ionInput.emit())},64)},o.prototype.cancelSearchbar=function(o){o&&(o.preventDefault(),o.stopPropagation()),this.ionCancel.emit(),this.clearInput(),this.nativeInput.blur()},o.prototype.onInput=function(o){var e=o.target;e&&(this.value=e.value),this.ionInput.emit(o)},o.prototype.onBlur=function(){this.focused=!1,this.ionBlur.emit(),this.positionElements()},o.prototype.onFocus=function(){this.focused=!0,this.ionFocus.emit(),this.positionElements()},o.prototype.positionElements=function(){var o=this.shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!!this.focused;this.shouldAlignLeft=e,"ios"===this.mode&&(o!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())},o.prototype.positionPlaceholder=function(){var o="rtl"===this.doc.dir,e=this.nativeInput,a=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft)e.removeAttribute("style"),a.removeAttribute("style");else{var t=this.doc,r=t.createElement("span");r.innerHTML=this.placeholder,t.body.appendChild(r);var n=r.offsetWidth;r.remove();var i="calc(50% - "+n/2+"px)",c="calc(50% - "+(n/2+30)+"px)";o?(e.style.paddingRight=i,a.style.marginRight=c):(e.style.paddingLeft=i,a.style.marginLeft=c)}},o.prototype.positionCancelButton=function(){var o="rtl"===this.doc.dir,e=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button"),a=this.focused;if(e&&a!==this.isCancelVisible){var t=e.style;if(this.isCancelVisible=a,a)o?t.marginLeft="0":t.marginRight="0";else{var r=e.offsetWidth;r>0&&(o?t.marginLeft=-r+"px":t.marginRight=-r+"px")}}},o.prototype.hostData=function(){return{class:Object.assign({},Object(n.h)(this.color),{"searchbar-animated":this.animated,"searchbar-has-value":""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this.shouldAlignLeft,"searchbar-has-focus":this.focused})}},o.prototype.render=function(){var o=this,e=this.clearIcon||("ios"===this.mode?"ios-close-circle":"md-close"),a=this.searchIcon||"search",r=this.showCancelButton&&Object(t.b)("button",{type:"button",tabIndex:"ios"!==this.mode||this.focused?void 0:-1,onMouseDown:this.cancelSearchbar.bind(this),onTouchStart:this.cancelSearchbar.bind(this),class:"searchbar-cancel-button"},"md"===this.mode?Object(t.b)("ion-icon",{mode:this.mode,icon:this.cancelButtonIcon,lazy:!1}):this.cancelButtonText);return[Object(t.b)("div",{class:"searchbar-input-container"},Object(t.b)("input",{ref:function(e){return o.nativeInput=e},class:"searchbar-input",onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),"md"===this.mode&&r,Object(t.b)("ion-icon",{mode:this.mode,icon:a,lazy:!1,class:"searchbar-search-icon"}),Object(t.b)("button",{type:"button","no-blur":!0,class:"searchbar-clear-button",onMouseDown:this.clearInput.bind(this),onTouchStart:this.clearInput.bind(this)},Object(t.b)("ion-icon",{mode:this.mode,icon:e,lazy:!1,class:"searchbar-clear-icon"}))),"ios"===this.mode&&r]},Object.defineProperty(o,"is",{get:function(){return"ion-searchbar"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},autocomplete:{type:String,attr:"autocomplete"},autocorrect:{type:String,attr:"autocorrect"},cancelButtonIcon:{type:String,attr:"cancel-button-icon"},cancelButtonText:{type:String,attr:"cancel-button-text"},clearIcon:{type:String,attr:"clear-icon"},color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},doc:{context:"document"},el:{elementRef:!0},focus:{method:!0},focused:{state:!0},mode:{type:String,attr:"mode"},placeholder:{type:String,attr:"placeholder"},searchIcon:{type:String,attr:"search-icon"},showCancelButton:{type:Boolean,attr:"show-cancel-button"},spellcheck:{type:Boolean,attr:"spellcheck"},type:{type:String,attr:"type"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(o,"events",{get:function(){return[{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionCancel",method:"ionCancel",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClear",method:"ionClear",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(o,"style",{get:function(){return".sc-ion-searchbar-ios-h{--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, .ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-style:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;width:100%;border:0;outline:0;background:var(--background);font-family:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--cancel-button-color)}.searchbar-clear-button.sc-ion-searchbar-ios{margin:0;padding:0;display:none;min-height:0;outline:0;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.sc-ion-searchbar-ios-h{--clear-button-color:var(--ion-text-color-step-400, #666666);--cancel-button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-text-color, #000);--icon-color:var(--ion-text-color-step-400, #666666);--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);padding:12px;height:60px;contain:strict}.searchbar-input-container.sc-ion-searchbar-ios{height:36px;contain:strict}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:8px;top:0;position:absolute;width:16px;height:100%;contain:strict}.searchbar-input.sc-ion-searchbar-ios{padding:0 28px;border-radius:10px;height:100%;font-size:14px;font-weight:400;contain:strict}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding:0 0 0 8px;display:none;-ms-flex-negative:0;flex-shrink:0;border:0;outline:0;background-color:transparent;font-size:16px;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}.searchbar-show-cancel.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, .searchbar-show-cancel.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, .searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-transition:all .3s ease;transition:all .3s ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);-webkit-transition:all .3s ease;transition:all .3s ease;opacity:0;pointer-events:none}.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover:hover){.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.ion-color.sc-ion-searchbar-ios-h, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h{color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb),.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios, ion-toolbar.ion-color   .sc-ion-searchbar-ios-h   .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:.5}"},enumerable:!0,configurable:!0}),Object.defineProperty(o,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),o}()}}]);