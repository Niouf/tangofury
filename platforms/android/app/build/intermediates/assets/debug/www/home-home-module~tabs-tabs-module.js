(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module~tabs-tabs-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-video/item-video.module */ "./src/app/item-video/item-video.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../menu/menu.module */ "./src/app/menu/menu.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_6__["ItemVideoModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_8__["MenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"],
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <app-menu></app-menu>\n</header>\n  <ion-content padding class=\"fg-content\">\n    <ion-show-when size=\"md, lg, xl\" *ngIf=\"role == 'visitor'\">\n        <div class='full-page'>\n            <ion-row class='title-tf'>\n                <ion-col>\n                    <h1><img src='assets/img/tangofury-inline.png' alt=\"tango fury\"></h1>\n                    <p class='slogan'>Watch the best tango performances.</p>\n                </ion-col>\n            </ion-row>\n            <ion-row *ngIf=\"role == 'visitor'\">\n                <ion-col size=\"6\" size-sm=\"12\" size-xs=\"12\" size-md=\"6\" size-lg=\"6\" class='connect-box'>\n                    <h2>Connect to Tango Fury to access new fonctionnality</h2>\n                    <p>Create your account and connect to Tango Fury to manage your own playlists, your favorites maestros and sync all your data between your computers and app.</p>\n                    <p>It's free and we won't send you any further email :).</p>\n                    <p>    \n                        <ion-button (click)='goToLogin()'>\n                        <ion-icon name=\"person\"></ion-icon> Connect\n                        </ion-button>\n                    </p>\n                </ion-col>\n        \n                <ion-col size=\"6\" size-sm=\"12\" size-xs=\"12\" size-md=\"6\" size-lg=\"6\" class=\"card-background-page\">\n                    <a class='center' href='https://play.google.com/store/apps/details?id=tango.fury&hl=en&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>\n                        <ion-card *ngIf=\"role == 'visitor'\">\n                            <ion-card-content class='center'>\n                                <img src=\"assets/img/hand2.jpg\"/>\n                                <ion-label class='card-title'>Download the app !</ion-label>\n                                <ion-show-when size=\"md, lg, xl\" class='card-subtitle center'>We build a nice mobile app that is faster and prettier <br/> than the website version. You should try it ! ;)\n                                    <ion-row>\n                                        <ion-col size=\"6\" offset=\"3\">\n                                                <img alt='Get it on Google Play' class='googleplay' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/>\n                                        </ion-col>\n                                    </ion-row> \n                                </ion-show-when> \n                            </ion-card-content>\n                        </ion-card>\n                    </a>\n                </ion-col>\n            </ion-row> \n        </div>\n    </ion-show-when> \n        \n\n      <ion-card *ngIf=\"(favoritesMaestros.length > 0)\">\n          <ion-card-header class='card-menu'>\n            <ion-icon name=\"star\"></ion-icon> Favorites\n          </ion-card-header>\n    \n          <ion-card-content>\n              <ion-grid class=\"card-background-page \">\n                  <ion-row>\n                    <ion-col *ngFor=\"let maestro of favoritesMaestros\" size=\"4\" size-sm=\"6\" size-md=\"4\" size-lg=\"2\" size-xl='2'>\n                        <ion-card  (click)=\"goToDetail(maestro)\"  >\n                          <img *ngIf=\"maestro.imageDisplay\" class='clickable' src=\"assets/img/maestros/{{maestro.imageDisplay}}\">\n                          <div *ngIf=\"(maestro.newvideos>0)\" class=\"clickable card-title\">+ {{maestro.newvideos}} videos</div>\n                        </ion-card>\n                    </ion-col>\n                  </ion-row>\n              </ion-grid>\n          </ion-card-content>\n      </ion-card>\n  \n  \n  \n      <ion-card >\n          <ion-card-header class='card-menu'>\n            <ion-icon name=\"images\"></ion-icon> Selections\n          </ion-card-header>\n    \n          <ion-card-content>\n              <ion-grid class=\"selections\">\n                  <ion-row>\n                    <ion-col *ngFor=\"let selection of selections\" size=\"6\" size-md=\"4\" size-lg=\"3\" size-xl=\"2\">\n                        <ion-card class='clickable' (click)=\"goToPlaylist(selection)\"  >\n                            <div class=\"half-black\"><img src=\"{{selection.image}}\"></div>\n                            <ion-card-subtitle class='center'>{{selection.title}}</ion-card-subtitle>\n                        </ion-card>\n                    </ion-col>\n                  </ion-row>\n                  <ion-row align-items-center>\n                    <ion-col class='center'>\n                        <ion-button block  color=\"primary\" (click)=\"goToAllselections()\">\n                            <ion-icon name=\"arrow-down\"></ion-icon> See all selections\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                </ion-grid>\n          </ion-card-content>\n      </ion-card> \n  \n  \n  \n  \n      <ion-card>\n          <ion-card-header class='card-menu'>\n            <ion-icon name=\"thumbs-up\"></ion-icon> Tango Fury's favorites\n          </ion-card-header>\n    \n          <ion-card-content>\n            <app-item-video [videos]=\"topVideos\" [role]=\"role\" [display]=\"'blocks'\"></app-item-video>\n            <ion-grid>\n                <ion-row align-items-center>\n                    <ion-col class='center'>\n                        <ion-button block  color=\"primary\" (click)=\"loadMoreTopVideos()\">\n                            <ion-icon name=\"arrow-down\"></ion-icon> Watch more top videos\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n          </ion-card-content>\n      </ion-card> \n  \n  </ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-page .title-tf {\n  text-align: center;\n  margin-top: 4em;\n  margin-bottom: 6em; }\n\n.full-page .slogan {\n  font-size: 1.7em;\n  color: var(--ion-color-primary-contrast);\n  margin-top: -0.7em; }\n\n.full-page h1 {\n  width: 100%; }\n\n.selections .card-title {\n  font-size: 1.2em;\n  text-align: center; }\n\n.card-background-page .half-class {\n  background: black; }\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 1.2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  text-shadow: 0 1px 0 black;\n  height: 3em; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff; }\n\nh2 {\n  font-size: 1.8em;\n  color: var(--fg-color-primary-lighter); }\n\n.googleplay {\n  max-width: 200px; }\n\n.connect-box {\n  color: var(--fg-color-on-dark-light); }\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 15%;\n  font-size: 2.2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  margin-right: 15px; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.5em;\n  position: absolute;\n  top: 40%;\n  width: 100%;\n  color: #fff;\n  margin-right: 15px;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/maestro/maestro */ "./src/app/services/maestro/maestro.ts");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _services_playlist_playlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/playlist/playlist */ "./src/app/services/playlist/playlist.ts");
/* harmony import */ var _services_general_general__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/general/general */ "./src/app/services/general/general.ts");
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth/auth */ "./src/app/services/auth/auth.ts");
/* harmony import */ var _services_video_video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/video/video */ "./src/app/services/video/video.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
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










var HomePage = /** @class */ (function () {
    function HomePage(platform, videoService, modalCtrl, loadingCtrl, authService, profileService, maestroService, playlistService, generalService, navCtrl, router) {
        this.platform = platform;
        this.videoService = videoService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.profileService = profileService;
        this.maestroService = maestroService;
        this.playlistService = playlistService;
        this.generalService = generalService;
        this.navCtrl = navCtrl;
        this.router = router;
        this.displayTopVideos = 0;
        this.videosLast = [];
        this.topVideos = new Array();
        this.selections = new Array();
        this.loadiTop = false;
        this.loadiMaestros = false;
        this.loadiSelections = false;
        this.role = "visitor";
        this.offsetAll = 0;
        this.videosWatched = [];
        this.maestros = new Array();
        this.favoritesMaestros = new Array();
        //this.profileService.getUserRole().then(role=>{this.role=role});
        //this.loadingHome();
        this.loadInfos();
    }
    HomePage.prototype.loadInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generalService.initPage()];
                    case 1:
                        _a.sent();
                        this.role = this.profileService.returnRole();
                        this.favoritesMaestros = this.maestroService.getFavoritesMaestros();
                        this.selections = this.playlistService.retrieveSelections();
                        this.topVideos = this.videoService.getTopvideos(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.loadingHome = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storage, loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        storage = firebase__WEBPACK_IMPORTED_MODULE_9__["storage"]();
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading... Tango Fury will be ready soon !',
                            })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.profileService.getUserRole().then(function (role) {
                            _this.role = role;
                            //------------------------- Chargement des favoris ----------------------------
                            if (_this.role != "visitor") {
                                _this.profileService.getLastConnexion().then(function (lastConnexion) {
                                    _this.maestroService.LoadListFavorites(lastConnexion).then(function (data) {
                                        _this.favoritesMaestros = data;
                                    });
                                });
                            }
                            //------------------------- Fin de Chargement des favoris ----------------------------
                        });
                        //Chargement des séléctions
                        this.playlistService.getSelections().then(function (data) {
                            data.forEach(function (selection) {
                                storage.ref("selections/" + selection.image).getDownloadURL().then(function (imageFire) {
                                    selection.image = imageFire;
                                    _this.selections.push(selection);
                                });
                            });
                        }).then(function () {
                            //chargement des top videos
                            _this.videoService.getVideos(null, null, 0, true).then(function (results) {
                                _this.videoService.setTopVideos(results);
                                _this.topVideos = _this.videoService.getTopvideos(0);
                                loading.dismiss();
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.goToPlaylist = function (playlist) {
        this.router.navigateByUrl("/tabs/(home:selection/NbtwzggJpfYmu1rN4lqdCNBBSVu1/" + playlist.key + ")");
    };
    HomePage.prototype.goToAllselections = function () {
        this.router.navigateByUrl("/tabs/(home:tango-selections-all)");
    };
    HomePage.prototype.goToDetail = function (maestro) {
        this.router.navigateByUrl("/tabs/(tango-maestros:maestro-details/" + maestro.slug + ")");
    };
    HomePage.prototype.goToProfile = function () {
        this.router.navigateByUrl("ProfilePage");
    };
    HomePage.prototype.goToLogin = function () {
        this.router.navigateByUrl("login");
    };
    HomePage.prototype.goToAbout = function () {
        this.router.navigateByUrl("about");
    };
    HomePage.prototype.playVideo = function (video) {
        this.videoService.playVideo(video);
        //this.actionVideo(video);
    };
    HomePage.prototype.removeTopVideo = function (video) {
        this.videoService.removeTopVideo(video);
        var index = this.topVideos.indexOf(video);
        if (index > -1) {
            this.topVideos.splice(index, 1);
        }
    };
    HomePage.prototype.addTopVideo = function (video) {
        this.videoService.addTopVideo(video);
    };
    HomePage.prototype.loadMoreTopVideos = function () {
        var _this = this;
        this.displayTopVideos = this.displayTopVideos + 12;
        //chargement des top videos
        this.videoService.getVideos(null, null, this.displayTopVideos, true).then(function (results) {
            _this.topVideos = results;
        });
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _services_video_video__WEBPACK_IMPORTED_MODULE_8__["VideoProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_auth_auth__WEBPACK_IMPORTED_MODULE_7__["AuthProvider"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_4__["ProfileProvider"],
            _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_3__["MaestroProvider"],
            _services_playlist_playlist__WEBPACK_IMPORTED_MODULE_5__["PlaylistProvider"],
            _services_general_general__WEBPACK_IMPORTED_MODULE_6__["GeneralProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module~tabs-tabs-module.js.map