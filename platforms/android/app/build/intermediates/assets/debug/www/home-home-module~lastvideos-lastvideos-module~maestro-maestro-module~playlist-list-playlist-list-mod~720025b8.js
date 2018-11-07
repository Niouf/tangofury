(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module~lastvideos-lastvideos-module~maestro-maestro-module~playlist-list-playlist-list-mod~720025b8"],{

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-footer>\n  <ion-toolbar>\n      <ion-tabs color=\"dark\">\n          <ion-tab label=\"Home !\" icon=\"home\" href=\"/home\" aria-selected=true>\n          </ion-tab>\n          <ion-tab label=\"Latest videos\" icon=\"film\" href=\"/tango-videos\">\n          </ion-tab>\n          <ion-tab label=\"Maestros\" icon=\"star\" href=\"/tango-maestros\">\n          </ion-tab>\n          <ion-tab label=\"Playlists\" icon=\"albums\" href=\"/playlists\">\n          </ion-tab>\n        </ion-tabs>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/footer/footer.module.ts ***!
  \*****************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            ],
            declarations: [
                _footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            ],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/item-video/item-video.component.html":
/*!******************************************************!*\
  !*** ./src/app/item-video/item-video.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"display=='classic'\">  \n  <ion-list>\n      <ion-item *ngFor=\"let video of videos\"    lines=\"inset\" [color]=\"false===video.seen?'medium':'light'\" [ngClass]=\"true===video.seen?'video-seen':'video-unseen'\">\n          <ion-thumbnail class='clickable' (click)=\"playVideo(video)\"  item-start>\n            <img class='image-video' src=\"{{video.urlImage}}\">\n          </ion-thumbnail>\n          <ion-label text-wrap class='text-video clickable' (click)=\"playVideo(video)\">\n              <ion-text><h3><span class='video-title' >{{video.title}}</span> </h3></ion-text>\n              <ion-text><p><span class='video-date' >{{video.datePublication | date: 'dd/MM/yyyy'}} {{video.type}}</span></p></ion-text>\n          </ion-label>\n          <ion-button *ngIf=\"role == 'admin' || role=='user'\" slot=\"end\" (click)=\"addPlaylistModal(video)\"><ion-icon name='add-circle' ></ion-icon></ion-button>\n          <ion-button *ngIf=\"role == 'admin'\" slot=\"end\" (click)=\"actionVideo(video)\"><ion-icon name='cog' ></ion-icon></ion-button>\n      </ion-item>\n      \n  </ion-list>\n  <ion-item text-wrap *ngIf=\"1 > videos.length \" >\n      No videos found. \n  </ion-item>\n</div>\n\n\n<ion-grid *ngIf=\"display=='blocks' || display=='playlist'\">\n  <ion-row>\n    <ion-col  *ngFor=\"let video of videos\" size=\"12\" size-sm=\"6\" size-lg=\"4\" size-xl='3'>\n        <ion-card  >\n          \n          <img class='clickable'  src=\"{{video.urlImage}}\" (click)=\"playVideo(video)\"/>\n          <ion-card-content>\n            <p class='video-date'>\n              <span >{{video.type}} {{video.datePublication | date: 'dd/MM/yyyy' }}</span>\n            </p>\n            \n            <ion-card-title class='clickable' (click)=\"playVideo(video)\">\n              {{video.title}}\n            </ion-card-title>\n\n            \n                <div>\n                  <ion-button *ngIf=\"role == 'admin' || role=='user'\" expand=\"full\" clear small icon-start (click)=\"addPlaylistModal(video)\">\n                    <ion-icon name='add'></ion-icon>\n                    Add to playlist\n                  </ion-button>\n                </div>\n\n                <div *ngIf=\"display != 'playlist'\">\n                  <ion-button text-right *ngIf=\"role == 'admin'\" expand=\"full\" clear small color=\"dark\" (click)=\"removeTopVideo(video)\" icon-start>\n                    <ion-icon name='remove'></ion-icon>\n                    remove\n                  </ion-button>\n                </div>\n\n                  <div *ngIf=\"display == 'playlist'\">\n                    <ion-button text-right *ngIf=\"role == 'admin'\" expand=\"full\" clear small color=\"dark\" (click)=\"removeVideoFromPlaylist(video,playlist)\" icon-start>\n                      <ion-icon name='remove'></ion-icon>\n                      remove\n                    </ion-button>\n                  </div>\n          </ion-card-content>\n        </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./src/app/item-video/item-video.component.scss":
/*!******************************************************!*\
  !*** ./src/app/item-video/item-video.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-video {\n  margin-left: 1em; }\n\n.video-date {\n  text-align: right; }\n\nion-item.video-seen {\n  background: var(--fg-item-seen); }\n\nion-item.video-unseen {\n  background: var(--fg-item-unseen); }\n\nion-item.video-unseen div {\n    background: var(--fg-item-unseen); }\n\nh3 {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/item-video/item-video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/item-video/item-video.component.ts ***!
  \****************************************************/
/*! exports provided: ItemVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVideoComponent", function() { return ItemVideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/maestro/maestro */ "./src/app/services/maestro/maestro.ts");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _services_playlist_playlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/playlist/playlist */ "./src/app/services/playlist/playlist.ts");
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth */ "./src/app/services/auth/auth.ts");
/* harmony import */ var _services_video_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/video/video */ "./src/app/services/video/video.ts");
/* harmony import */ var _modal_playlist_modal_playlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-playlist/modal-playlist.component */ "./src/app/modal-playlist/modal-playlist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var ItemVideoComponent = /** @class */ (function () {
    //display=this.elementRef.nativeElement.getAttribute('display')
    function ItemVideoComponent(actionSheetCtrl, loadingCtrl, modalCtrl, 
    //public datepipe: DatePipe,
    videoService, authService, profileService, maestroService, playlistService, navCtrl) {
        var _this = this;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.videoService = videoService;
        this.authService = authService;
        this.profileService = profileService;
        this.maestroService = maestroService;
        this.playlistService = playlistService;
        this.navCtrl = navCtrl;
        this.role = 'visitor';
        this.display = 'classic';
        this.playlist = '';
        this.profileService.getUserRole().then(function (role) {
            _this.role = role;
        });
    }
    ItemVideoComponent.prototype.playVideo = function (video) {
        this.videoService.playVideo(video);
    };
    ItemVideoComponent.prototype.ngOnChanges = function () {
    };
    ItemVideoComponent.prototype.removeTopVideo = function (video) {
        this.videoService.removeTopVideo(video);
        this.removeVideoFromList(video);
    };
    ItemVideoComponent.prototype.removeVideoFromPlaylist = function (video, playlist) {
        this.playlistService.removeVideo(video, playlist);
        this.removeVideoFromList(video);
    };
    ItemVideoComponent.prototype.removeVideoFromList = function (video) {
        var index = this.videos.indexOf(video);
        if (index > -1) {
            this.videos.splice(index, 1);
        }
    };
    ItemVideoComponent.prototype.addTopVideo = function (video) {
        this.videoService.addTopVideo(video);
    };
    ItemVideoComponent.prototype.addPlaylistModal = function (video) {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({ component: _modal_playlist_modal_playlist_component__WEBPACK_IMPORTED_MODULE_7__["ModalPlaylistComponent"], componentProps: { video: video } })];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemVideoComponent.prototype.actionVideo = function (video) {
        return __awaiter(this, void 0, void 0, function () {
            var myButtons, actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myButtons = [
                            {
                                text: 'Add to playlist',
                                icon: "add",
                                handler: function () {
                                    _this.addPlaylistModal(video);
                                }
                            }
                        ];
                        if (this.role == "admin") {
                            myButtons.push({
                                text: 'Add to Top videos',
                                icon: "star",
                                handler: function () {
                                    _this.videoService.addTopVideo(video);
                                }
                            }, {
                                text: 'Define as tango',
                                icon: "settings",
                                handler: function () {
                                    _this.videoService.setType(video, "tango");
                                }
                            }, {
                                text: 'Define as vals',
                                icon: "settings",
                                handler: function () {
                                    _this.videoService.setType(video, "vals");
                                }
                            }, {
                                text: 'Define as milonga',
                                icon: "settings",
                                handler: function () {
                                    _this.videoService.setType(video, "milonga");
                                }
                            }, {
                                text: 'Define as Lesson',
                                icon: "settings",
                                handler: function () {
                                    _this.videoService.setType(video, "lesson");
                                }
                            }, {
                                text: 'Define as other video type',
                                icon: "settings",
                                handler: function () {
                                    _this.videoService.setType(video, "other");
                                }
                            }, {
                                text: 'Delete',
                                icon: "remove-circle",
                                handler: function () {
                                    _this.removeVideoFromList(video);
                                    _this.videoService.deleteVideo(video);
                                }
                            });
                        }
                        myButtons.push({
                            text: 'Cancel',
                            icon: "",
                            handler: function () {
                                console.log("cancel");
                            }
                        });
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Actions',
                                buttons: myButtons
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ItemVideoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemVideoComponent.prototype, "videos", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemVideoComponent.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemVideoComponent.prototype, "display", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemVideoComponent.prototype, "playlist", void 0);
    ItemVideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-video',
            template: __webpack_require__(/*! ./item-video.component.html */ "./src/app/item-video/item-video.component.html"),
            styles: [__webpack_require__(/*! ./item-video.component.scss */ "./src/app/item-video/item-video.component.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_video_video__WEBPACK_IMPORTED_MODULE_6__["VideoProvider"],
            _services_auth_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_3__["ProfileProvider"],
            _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_2__["MaestroProvider"],
            _services_playlist_playlist__WEBPACK_IMPORTED_MODULE_4__["PlaylistProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]])
    ], ItemVideoComponent);
    return ItemVideoComponent;
}());



/***/ }),

/***/ "./src/app/item-video/item-video.module.ts":
/*!*************************************************!*\
  !*** ./src/app/item-video/item-video.module.ts ***!
  \*************************************************/
/*! exports provided: ItemVideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemVideoModule", function() { return ItemVideoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _item_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-video.component */ "./src/app/item-video/item-video.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { FormsModule } from '@angular/forms';


var ItemVideoModule = /** @class */ (function () {
    function ItemVideoModule() {
    }
    ItemVideoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                //FormsModule,
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            ],
            declarations: [
                _item_video_component__WEBPACK_IMPORTED_MODULE_3__["ItemVideoComponent"],
            ],
            exports: [_item_video_component__WEBPACK_IMPORTED_MODULE_3__["ItemVideoComponent"]]
        })
    ], ItemVideoModule);
    return ItemVideoModule;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module~lastvideos-lastvideos-module~maestro-maestro-module~playlist-list-playlist-list-mod~720025b8.js.map