(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maestro-maestro-module~tabs-tabs-module"],{

/***/ "./src/app/maestro/maestro.module.ts":
/*!*******************************************!*\
  !*** ./src/app/maestro/maestro.module.ts ***!
  \*******************************************/
/*! exports provided: MaestroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaestroPageModule", function() { return MaestroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _maestro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maestro.page */ "./src/app/maestro/maestro.page.ts");
/* harmony import */ var _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-video/item-video.module */ "./src/app/item-video/item-video.module.ts");
/* harmony import */ var _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../footer/footer.module */ "./src/app/footer/footer.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _maestro_page__WEBPACK_IMPORTED_MODULE_5__["MaestroPage"]
    }
];
var MaestroPageModule = /** @class */ (function () {
    function MaestroPageModule() {
    }
    MaestroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_6__["ItemVideoModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"]
            ],
            declarations: [_maestro_page__WEBPACK_IMPORTED_MODULE_5__["MaestroPage"]]
        })
    ], MaestroPageModule);
    return MaestroPageModule;
}());



/***/ }),

/***/ "./src/app/maestro/maestro.page.html":
/*!*******************************************!*\
  !*** ./src/app/maestro/maestro.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n\n  <ion-toolbar color=\"dark\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button (click)=\"goToMaestros()\" defaultHref=\"/\"></ion-back-button>\n      </ion-buttons>\n\n    <ion-title class='center' *ngIf=\"maestro\">{{maestro.surname }} {{maestro.nickname}} {{maestro.name}}</ion-title>\n\n  </ion-toolbar>\n\n\n\n  <ion-toolbar color=\"dark\" class='sub-bar' no-border-top>\n      <ion-segment [(ngModel)]=\"type\" >\n        <ion-segment-button value=\"all\">\n          All\n        </ion-segment-button>\n  \n        <ion-segment-button value=\"vals\">\n          Vals\n        </ion-segment-button>\n        <ion-segment-button  value=\"milonga\">\n          Milongas\n        </ion-segment-button>\n        <ion-segment-button  value=\"lesson\">\n          Lessons\n        </ion-segment-button>\n        <ion-segment-button  value=\"other\">\n          Others\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class='fg-content'>\n    <ion-card>\n        <ion-card-content *ngIf=\"maestro\">\n          <ion-grid class=\"card-background-page \">\n            <ion-row>\n              <ion-col size=\"4\" size-md=\"2\" size-xl=\"1\" >\n                <img class='round' *ngIf=\"maestro.imageDisplay\" src=\"assets/img/maestros/{{maestro.imageDisplay}}\">\n              </ion-col>\n    \n              <ion-col  size=\"8\" size-md=\"10\" size-xl=\"11\" >\n                <h1>Videos of {{maestro.surname }} {{maestro.nickname}} {{maestro.name}}</h1>\n                <p ><ion-button ion-button color=\"light\" *ngIf=\"(maestro.facebook !='')\" (click)=\"openLink(maestro.facebook)\"><ion-icon name=\"logo-facebook\"></ion-icon> Facebook</ion-button>\n                <br *ngIf=\"(maestro.siteweb !='')\"><ion-button color=\"light\" *ngIf=\"(maestro.siteweb !='')\" (click)=\"openLink(maestro.siteweb)\"><ion-icon name=\"link\"></ion-icon> Website</ion-button>\n                <br *ngIf=\"(maestro.wikipedia !='')\"><ion-button color=\"light\" *ngIf=\"(maestro.wikipedia !='')\" (click)=\"openLink(maestro.wikipedia)\">Wikipedia</ion-button>\n                <p *ngIf=\"(maestro.description !='')\">{{maestro.description}}</p>\n\n                <div *ngIf=\"role == 'admin' || role=='user'\">\n                  <div *ngIf=\"isFavorite == true\">\n                    <ion-button ion-button round (click)=\"toggleFavoriteMaetro(maestro)\">\n                      <span class='large-txt' ><ion-icon name=\"star\" ></ion-icon></span>\n                      remove from favorites\n                    </ion-button>\n                  </div>\n          \n                  <div *ngIf=\"isFavorite == false\">\n                    <ion-button color=\"primary\" (click)=\"toggleFavoriteMaetro(maestro)\">\n                      <span class='large-txt' ><ion-icon name=\"star-outline\" ></ion-icon></span>\n                      add to favorites\n                    </ion-button>\n                  </div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n     </ion-card>\n\n\n     <div [ngSwitch]=\"type\">\n      <ion-list *ngSwitchCase=\"'all'\">\n        \n        <app-item-video [videos]=\"videos\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n        \n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetAll,'all')\">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  \n     </ion-list>\n  \n  \n      <ion-list *ngSwitchCase=\"'vals'\">\n  \n        <app-item-video [videos]=\"videosVals\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetVals,'vals')\">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  \n      </ion-list>\n  \n  \n      <ion-list *ngSwitchCase=\"'milonga'\" >\n          <app-item-video [videos]=\"videosMilongas\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetMilongas,'milonga')\">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n  \n      </ion-list>\n  \n      <ion-list *ngSwitchCase=\"'lesson'\">\n        <app-item-video [videos]=\"videosLessons\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetLesson,'lesson')\">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n     </ion-list>\n  \n  \n       <ion-list *ngSwitchCase=\"'other'\">\n          <app-item-video [videos]=\"videosOthers\" [role]=\"role\" [display]=\"'classic'\"></app-item-video>\n  \n         <ion-infinite-scroll (ionInfinite)=\"doInfinite($event,offsetOther,'other')\">\n           <ion-infinite-scroll-content></ion-infinite-scroll-content>\n         </ion-infinite-scroll>\n  \n      </ion-list>\n  \n    </div>\n     \n</ion-content>"

/***/ }),

/***/ "./src/app/maestro/maestro.page.scss":
/*!*******************************************!*\
  !*** ./src/app/maestro/maestro.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: black; }\n"

/***/ }),

/***/ "./src/app/maestro/maestro.page.ts":
/*!*****************************************!*\
  !*** ./src/app/maestro/maestro.page.ts ***!
  \*****************************************/
/*! exports provided: MaestroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaestroPage", function() { return MaestroPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/maestro/maestro */ "./src/app/services/maestro/maestro.ts");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _services_video_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/video/video */ "./src/app/services/video/video.ts");
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






//import { ModalPlaylistPage } from "../modal-playlist/modal-playlist";

var MaestroPage = /** @class */ (function () {
    function MaestroPage(route, router, maestroService, videoService, profileService, toastCtrl, loadingCtrl, titleService, metaService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.maestroService = maestroService;
        this.videoService = videoService;
        this.profileService = profileService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.titleService = titleService;
        this.metaService = metaService;
        this.videos = [];
        this.videosVals = [];
        this.videosMilongas = [];
        this.videosOthers = [];
        this.videosTango = [];
        this.videosLessons = [];
        this.videosWatched = [];
        this.offsetAll = 0;
        this.offsetMilongas = 0;
        this.offsetVals = 0;
        this.offsetOthers = 0;
        this.offsetLessons = 0;
        this.role = "visitor";
        this.isFavorite = false;
        this.type = "all";
        this.slug = this.route.snapshot.params['slug'];
        this.initMaestro(this.slug);
        this.profileService.getUserRole().then(function (role) {
            _this.role = role;
        });
    }
    MaestroPage.prototype.initMaestro = function (slug) {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading maestro',
                        })];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        return [4 /*yield*/, this.loadMaestroData(this.slug).then(function () {
                                _this.loadVideos(0);
                                _this.loadVals(0);
                                _this.loadMilongas(0);
                                _this.loadLessons(0);
                                _this.loadOthers(0);
                            })];
                    case 2:
                        _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    MaestroPage.prototype.loadMaestroData = function (slug) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.maestroService.getMaestro(slug).then(function (results) {
                _this.maestro = results;
                _this.titleService.setTitle("Tango videos of " + _this.maestro.surname + " " + _this.maestro.name);
                _this.metaService.addTag({ name: 'description', content: "Watch new tango, vals and milongas videos of " + _this.maestro.surname + " " + _this.maestro.name });
                _this.isFavorite = _this.checkFavorite(_this.maestro);
                resolve(_this.maestro);
            });
        });
    };
    MaestroPage.prototype.goToAbout = function () {
        this.router.navigateByUrl("about");
    };
    MaestroPage.prototype.goToMaestros = function () {
        //this.router.navigateByUrl(`tango-maestros`);
        this.router.navigateByUrl("tabs/(tango-maestros:tango-maestros)");
        //this.router.navigateByUrl(`tango-maestros`);
    };
    MaestroPage.prototype.ngOnInit = function () {
        // Try to remove META-Tags
        try {
            document.querySelector("meta[name='description']").remove();
        }
        catch (e) {
        }
        // Add the new META-Tags
        var description = document.createElement('meta');
        description.name = "description";
        description.content = "Latest videos of " + this.maestro.surname + " " + this.maestro.nickname + " " + this.maestro.name;
        document.getElementsByTagName('head')[0].appendChild(description);
    };
    MaestroPage.prototype.checkFavorite = function (maestro) {
        if (this.maestroService.getFavoritesMaestros()) {
            for (var _i = 0, _a = this.maestroService.getFavoritesMaestros(); _i < _a.length; _i++) {
                var fav = _a[_i];
                if (maestro.id == fav.id) {
                    return true;
                }
            }
            return false;
        }
        else {
            return false;
        }
    };
    MaestroPage.prototype.loadVideos = function (offset) {
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
                        this.videoService.getVideos(this.maestro, null, offset).then(function (results) {
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
    MaestroPage.prototype.loadVals = function (offset) {
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
                        this.videoService.getVideos(this.maestro, "vals", offset).then(function (results) {
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
    MaestroPage.prototype.loadMilongas = function (offset) {
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
                        this.videoService.getVideos(this.maestro, "milonga", offset).then(function (results) {
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
    MaestroPage.prototype.loadLessons = function (offset) {
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
                        this.videoService.getVideos(this.maestro, "other", offset).then(function (results) {
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
    MaestroPage.prototype.loadOthers = function (offset) {
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
                        this.videoService.getVideos(this.maestro, "lesson", offset).then(function (results) {
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
    MaestroPage.prototype.doInfinite = function (infiniteScroll, offset, type) {
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
    MaestroPage.prototype.openLink = function (link) {
        window.open(link);
    };
    MaestroPage.prototype.toggleFavoriteMaetro = function (maestro) {
        return __awaiter(this, void 0, void 0, function () {
            var toast, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.isFavorite == true)) return [3 /*break*/, 2];
                        this.maestroService.removeListFavorites(maestro);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: "Updating your favorite's list",
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        this.isFavorite = false;
                        return [3 /*break*/, 4];
                    case 2:
                        this.maestroService.addListFavorites(maestro);
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: "Adding this maestro to your favorite's list",
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        this.isFavorite = true;
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MaestroPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maestro',
            template: __webpack_require__(/*! ./maestro.page.html */ "./src/app/maestro/maestro.page.html"),
            styles: [__webpack_require__(/*! ./maestro.page.scss */ "./src/app/maestro/maestro.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__["MaestroProvider"],
            _services_video_video__WEBPACK_IMPORTED_MODULE_6__["VideoProvider"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_5__["ProfileProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]])
    ], MaestroPage);
    return MaestroPage;
}());



/***/ })

}]);
//# sourceMappingURL=maestro-maestro-module~tabs-tabs-module.js.map