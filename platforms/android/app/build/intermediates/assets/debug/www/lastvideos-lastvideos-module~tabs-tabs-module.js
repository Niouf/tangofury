(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lastvideos-lastvideos-module~tabs-tabs-module"],{

/***/ "./src/app/lastvideos/lastvideos.module.ts":
/*!*************************************************!*\
  !*** ./src/app/lastvideos/lastvideos.module.ts ***!
  \*************************************************/
/*! exports provided: LastvideosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastvideosPageModule", function() { return LastvideosPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../item-video/item-video.module */ "./src/app/item-video/item-video.module.ts");
/* harmony import */ var _lastvideos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lastvideos.page */ "./src/app/lastvideos/lastvideos.page.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../menu/menu.module */ "./src/app/menu/menu.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _lastvideos_page__WEBPACK_IMPORTED_MODULE_6__["LastvideosPage"]
    }
];
var LastvideosPageModule = /** @class */ (function () {
    function LastvideosPageModule() {
    }
    LastvideosPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_5__["ItemVideoModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__["MenuModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _lastvideos_page__WEBPACK_IMPORTED_MODULE_6__["LastvideosPage"],
            ]
        })
    ], LastvideosPageModule);
    return LastvideosPageModule;
}());



/***/ }),

/***/ "./src/app/lastvideos/lastvideos.page.html":
/*!*************************************************!*\
  !*** ./src/app/lastvideos/lastvideos.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n    <app-menu></app-menu>\n  \n    <ion-toolbar color=\"dark\" class='sub-bar' no-border-top  >\n      <ion-segment [(ngModel)]=\"type\" >\n        <ion-segment-button value=\"all\">\n          All\n        </ion-segment-button>\n  \n        <ion-segment-button value=\"vals\" >\n          Vals\n        </ion-segment-button>\n        <ion-segment-button  value=\"milonga\" >\n          Milongas\n        </ion-segment-button>\n        <ion-segment-button  value=\"lesson\" >\n          Lessons\n        </ion-segment-button>\n        <ion-segment-button  value=\"other\">\n          Others\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n\n  \n  <ion-content padding class='fg-content'>\n    <ion-show-when size=\"md, lg, xl\"><h1>Latest videos</h1></ion-show-when>\n\n    <div [ngSwitch]=\"type\">\n      <ion-list *ngSwitchCase=\"'all'\">\n        <app-item-video [videos]=\"videos\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetAll,'all')\" \n          loadingSpinner=\"bubbles\"\n         loadingText=\"Loading more data…\">\n        \n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n     </ion-list>\n  \n  \n      <ion-list *ngSwitchCase=\"'vals'\">\n  \n        <app-item-video [videos]=\"videosVals\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetVals,'vals')\"\n          loadingSpinner=\"bubbles\"\n          loadingText=\"Loading more data…\">\n        >\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  \n      </ion-list>\n  \n  \n      <ion-list *ngSwitchCase=\"'milonga'\" >\n        <app-item-video [videos]=\"videosMilongas\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetMilongas,'milonga')\"\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data…\">\n        \n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  \n      </ion-list>\n  \n  \n  \n      <ion-list *ngSwitchCase=\"'lesson'\">\n        <app-item-video [videos]=\"videosLessons\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetLessons,'lesson')\"\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more data…\">\n        \n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n      </ion-list>\n  \n  \n       <ion-list *ngSwitchCase=\"'other'\">\n          <app-item-video [videos]=\"videosOthers\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n         <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetOthers,'other')\"\n         loadingSpinner=\"bubbles\"\n         loadingText=\"Loading more data…\">\n         \n           <ion-infinite-scroll-content></ion-infinite-scroll-content>\n         </ion-infinite-scroll>\n  \n      </ion-list>\n  \n    </div>\n\n  </ion-content>"

/***/ }),

/***/ "./src/app/lastvideos/lastvideos.page.ts":
/*!***********************************************!*\
  !*** ./src/app/lastvideos/lastvideos.page.ts ***!
  \***********************************************/
/*! exports provided: LastvideosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastvideosPage", function() { return LastvideosPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/maestro/maestro */ "./src/app/services/maestro/maestro.ts");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth/auth */ "./src/app/services/auth/auth.ts");
/* harmony import */ var _services_video_video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/video/video */ "./src/app/services/video/video.ts");
/* harmony import */ var _services_general_general__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/general/general */ "./src/app/services/general/general.ts");
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










/**
 * Generated class for the LastVideosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LastvideosPage = /** @class */ (function () {
    function LastvideosPage(router, actionSheetCtrl, loadingCtrl, modalCtrl, 
    //public datepipe: DatePipe,
    videoService, authService, profileService, maestroService, navCtrl, generalService, titleService, metaService) {
        var _this = this;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.videoService = videoService;
        this.authService = authService;
        this.profileService = profileService;
        this.maestroService = maestroService;
        this.navCtrl = navCtrl;
        this.generalService = generalService;
        this.titleService = titleService;
        this.metaService = metaService;
        this.maestros = new Array();
        this.favoritesMaestros = new Array();
        this.displayTopVideos = 4;
        this.videos = [];
        this.videosVals = [];
        this.videosMilongas = [];
        this.videosOthers = [];
        this.videosLessons = [];
        this.videosTango = [];
        this.topVideos = [];
        this.role = "user";
        this.offsetAll = 0;
        this.offsetVals = 0;
        this.offsetMilongas = 0;
        this.offsetOthers = 0;
        this.offsetLessons = 0;
        this.type = "all";
        this.titleService.setTitle("Latest tango videos");
        this.metaService.addTag({ name: 'description', content: 'Watch the latest tango videos on Youtube. You can also filter by type : milonga, vals, tango ...' });
        this.profileService.getUserRole().then(function (role) {
            _this.role = role;
        });
        this.loadInfos().then(function () {
            _this.loadVideos(0);
            _this.loadVals(0);
            _this.loadMilongas(0);
            _this.loadLessons(0);
            _this.loadOthers(0);
        });
    }
    LastvideosPage.prototype.loadInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generalService.initPage()];
                    case 1:
                        _a.sent();
                        this.role = this.profileService.returnRole();
                        this.favoritesMaestros = this.maestroService.getFavoritesMaestros();
                        this.topVideos = this.videoService.getTopvideos(0);
                        return [2 /*return*/];
                }
            });
        });
    };
    LastvideosPage.prototype.ionViewWillEnter = function () {
    };
    LastvideosPage.prototype.loadVideos = function (offset) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading videos',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.videoService.getVideos(null, null, offset).then(function (results) {
                            results.forEach(function (elementResult) {
                                var testPresent = true;
                                _this.videos.forEach(function (elementVideo) {
                                    if (elementResult.key == elementVideo.key) {
                                        testPresent = false;
                                    }
                                });
                                if (testPresent == true) {
                                    _this.videos.push(elementResult);
                                }
                            });
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LastvideosPage.prototype.loadVals = function (offset) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.videoService.getVideos(null, "vals", offset).then(function (results) {
                            results.forEach(function (elementResult) {
                                var testPresent = true;
                                _this.videosVals.forEach(function (elementVideo) {
                                    if (elementResult.key == elementVideo.key) {
                                        testPresent = false;
                                    }
                                });
                                if (testPresent == true) {
                                    _this.videosVals.push(elementResult);
                                }
                            });
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LastvideosPage.prototype.loadMilongas = function (offset) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.videoService.getVideos(null, "milonga", offset).then(function (results) {
                            results.forEach(function (elementResult) {
                                var testPresent = true;
                                _this.videosMilongas.forEach(function (elementVideo) {
                                    if (elementResult.key == elementVideo.key) {
                                        testPresent = false;
                                    }
                                });
                                if (testPresent == true) {
                                    _this.videosMilongas.push(elementResult);
                                }
                            });
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LastvideosPage.prototype.loadLessons = function (offset) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.videoService.getVideos(null, "lesson", offset).then(function (results) {
                            results.forEach(function (elementResult) {
                                var testPresent = true;
                                _this.videosLessons.forEach(function (elementVideo) {
                                    if (elementResult.key == elementVideo.key) {
                                        testPresent = false;
                                    }
                                });
                                if (testPresent == true) {
                                    _this.videosLessons.push(elementResult);
                                }
                            });
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LastvideosPage.prototype.loadOthers = function (offset) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        this.videoService.getVideos(null, "other", offset).then(function (results) {
                            results.forEach(function (elementResult) {
                                var testPresent = true;
                                _this.videosOthers.forEach(function (elementVideo) {
                                    if (elementResult.key == elementVideo.key) {
                                        testPresent = false;
                                    }
                                });
                                if (testPresent == true) {
                                    _this.videosOthers.push(elementResult);
                                }
                            });
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LastvideosPage.prototype.doInfinite = function (infiniteScroll, offset, type) {
        offset = offset + 20;
        if (type == "all") {
            this.loadVideos(offset);
            this.offsetAll = offset;
            //changement de fonctionnement sur infinite scroll
            infiniteScroll.target.complete();
        }
        if (type == "vals") {
            this.loadVals(offset);
            this.offsetVals = offset;
            //changement de fonctionnement sur infinite scroll
            infiniteScroll.target.complete();
        }
        if (type == "milonga") {
            this.loadMilongas(offset);
            this.offsetMilongas = offset;
            //changement de fonctionnement sur infinite scroll
            infiniteScroll.target.complete();
        }
        if (type == "lessons") {
            this.loadLessons(offset);
            this.offsetLessons = offset;
            //changement de fonctionnement sur infinite scroll
            infiniteScroll.target.complete();
        }
        if (type == "other") {
            this.loadOthers(offset);
            this.offsetOthers = offset;
            //changement de fonctionnement sur infinite scroll
            infiniteScroll.target.complete();
        }
    };
    LastvideosPage.prototype.goToAbout = function () {
        this.router.navigateByUrl("about");
        //this.navCtrl.goForward('/about');
    };
    LastvideosPage.prototype.ngOnInit = function () {
        // Try to remove META-Tags
        try {
            document.querySelector("meta[name='description']").remove();
        }
        catch (e) {
        }
        // Add the new META-Tags
        var description = document.createElement('meta');
        description.name = "description";
        description.content = "Watch all the latest tango videos uploaded on youtube";
        document.getElementsByTagName('head')[0].appendChild(description);
    };
    LastvideosPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-last-videos',
            template: __webpack_require__(/*! ./lastvideos.page.html */ "./src/app/lastvideos/lastvideos.page.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _services_video_video__WEBPACK_IMPORTED_MODULE_7__["VideoProvider"],
            _services_auth_auth__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_5__["ProfileProvider"],
            _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__["MaestroProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_general_general__WEBPACK_IMPORTED_MODULE_8__["GeneralProvider"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], LastvideosPage);
    return LastvideosPage;
}());



/***/ })

}]);
//# sourceMappingURL=lastvideos-lastvideos-module~tabs-tabs-module.js.map