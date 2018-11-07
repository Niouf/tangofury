(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/about/about.page.html":
/*!***************************************!*\
  !*** ./src/app/about/about.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"dark\">\n        \n        <ion-buttons slot=\"start\">\n            <ion-back-button id=\"backButton\" defaultHref=\"/\"></ion-back-button> \n        </ion-buttons>\n\n        <ion-title class='center' >About</ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n\n\n\n<ion-content padding class='fg-content'>\n  <h1>About Tango Fury</h1>\n    <ion-card>\n      <ion-card-header class='card-menu'>\n        <ion-icon name=\"heart\"></ion-icon> Do you like Tango Fury ?\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>Give some <ion-icon name=\"star\"></ion-icon> to Tango Fury on the Google Play Store ! :) </p>\n        <p class='center'>\n          <ion-button (click)=\"rateTF()\">\n            Rate Tango Fury\n          </ion-button>\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card>\n      <ion-card-header class='card-menu'>\n        <ion-icon name=\"information-circle\"></ion-icon> About\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>This app has been backed with love by Fabien Grignoux. If you have any comment or suggestion please email me at fab.grignoux@gmail.com or join me on <a href=\"https://www.facebook.com/fabien.grignoux\">Facebook</a>.</p>\n        <p>Hope to see you on the dancefloor ! :)</p>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card *ngIf=\"role!='visitor'\">\n      <ion-card-header class='card-menu'>\n       <ion-icon name=\"settings\"></ion-icon>  Parameters\n      </ion-card-header>\n      <ion-card-content >\n        <p>Lougout from Tango Fury ?</p>\n        <p class='center'>\n            <ion-button (click)=\"logOut()\">\n              Logout\n            </ion-button>\n        </p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"role=='admin'\">\n    <ion-card-header class='card-menu' >\n      <ion-icon name=\"sync\"></ion-icon> Administration\n    </ion-card-header>\n\n    <ion-card-content>\n        <p class='center'>\n          <ion-button (click)=\"importVideos()\">\n            Import\n          </ion-button>\n          <strong>{{resultImport}}</strong>\n         </p>\n         <hr>\n         <p class='center'>\n           <ion-button (click)=\"clearVideos()\">\n             Clear multiple items\n           </ion-button>\n           <strong>{{resultClear}}</strong>\n        </p>\n    </ion-card-content>\n  </ion-card>\n\n    <ion-card *ngIf=\"role=='admin'\">\n      <ion-card-header class='card-menu' >\n        <ion-icon name=\"world\"></ion-icon> Sitemap\n      </ion-card-header>\n      <ion-card-content>\n        <p *ngFor=\"let item of sitemap\">\n          {{item}}\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth */ "./src/app/services/auth/auth.ts");
/* harmony import */ var _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/maestro/maestro */ "./src/app/services/maestro/maestro.ts");
/* harmony import */ var _services_playlist_playlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/playlist/playlist */ "./src/app/services/playlist/playlist.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_video_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/video/video */ "./src/app/services/video/video.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
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






//import { LoginPage } from "../login/login";




var AboutPage = /** @class */ (function () {
    function AboutPage(MaestroService, videosService, http, profileService, authService, router, platform, playlistService) {
        var _this = this;
        this.MaestroService = MaestroService;
        this.videosService = videosService;
        this.http = http;
        this.profileService = profileService;
        this.authService = authService;
        this.router = router;
        this.platform = platform;
        this.playlistService = playlistService;
        this.role = "visitor";
        this.resultImport = "";
        this.resultClear = "";
        this.importMaestro = "";
        this.importNumMaestro = 0;
        this.youtubeIdList = [];
        this.sitemap = [];
        this.profileService.getUserRole().then(function (role) {
            _this.role = role;
        });
        //****************Pour réinitialiser les videos************************
        var eAll = 0;
        if (eAll == 1) {
            var maestroList = this.MaestroService.getMaestros();
            firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref("videos/").remove();
            for (var _i = 0, maestroList_1 = maestroList; _i < maestroList_1.length; _i++) {
                var maestro = maestroList_1[_i];
                firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref("maestros/" + maestro.key + "/videos/").remove();
            }
        }
        var emptyArray = [];
        this.videosService.setVideos(emptyArray);
        if (eAll == 0) {
            //Initialise le tableau d'id Youtube
            this.videosService.loadAllVideos().then(function (result) {
                _this.videosService.getAllVideos().forEach(function (item) {
                    _this.youtubeIdList.push(item.youtubeId);
                });
            });
        }
    }
    AboutPage.prototype.clearVideos = function () {
        return __awaiter(this, void 0, void 0, function () {
            var eArray, allVideos, cpt;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        eArray = [];
                        cpt = 0;
                        //get all videos
                        return [4 /*yield*/, this.videosService.loadAllVideos().then(function (videos) {
                                allVideos = videos;
                            })];
                    case 1:
                        //get all videos
                        _a.sent();
                        //check if videos have same id
                        allVideos.forEach(function (needle) {
                            cpt++;
                            _this.resultClear = "Traitement video " + cpt + "/" + allVideos.length;
                            allVideos.forEach(function (video) {
                                if (needle.youtubeId == video.youtubeId) {
                                    if (needle.key != video.key) {
                                        if (video.topVideo != true) {
                                            //supprime dans le general mais pas dans les maestros
                                            console.log("doublon " + video.title);
                                            _this.videosService.deleteVideo(video);
                                            //supprime dans le general et dans le maestro
                                            //this.videosService.deleteVideo(video)
                                        }
                                    }
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.prototype.importVideos = function () {
        var _this = this;
        var req = "https://www.tango-agenda.com/web/app_dev.php/fr/imports-youtube";
        this.http.get(req).subscribe(function (result) {
            _this.resultImport = "Imports completed";
        }, function (error) {
            _this.resultImport = "Imports completed";
        }, function () {
            _this.resultImport = "Imports completed";
        });
        //imports dans Firebase    
        this.resultImport = "Loading ... please wait.";
        //Récupère la liste des maestros
        var maestroList = this.MaestroService.getMaestros();
        if (maestroList.length == 0) {
            this.MaestroService.loadMaestros(new Date()).then(function (result) {
                _this.MaestroService.setMaestros(result);
                maestroList = result;
                _this.launchImport(maestroList);
            });
        }
        else {
            this.launchImport(maestroList);
        }
    };
    AboutPage.prototype.launchImport = function (maestroList) {
        return __awaiter(this, void 0, void 0, function () {
            var cpt, ytKey, _i, maestroList_2, maestro, search, req;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cpt = 1;
                        ytKey = "AIzaSyDjZZJFivBihtQBNWhlY3s8HTci9YJ8vw0";
                        _i = 0, maestroList_2 = maestroList;
                        _a.label = 1;
                    case 1:
                        if (!(_i < maestroList_2.length)) return [3 /*break*/, 4];
                        maestro = maestroList_2[_i];
                        search = maestro.surname + " " + maestro.name;
                        //var search2=maestro.nickname+" "+maestro.name;
                        if (maestro.nickname)
                            search = search + " " + maestro.nickname;
                        if (maestro.homonyme == true)
                            search = search + " tango";
                        req = "https://www.googleapis.com/youtube/v3/search?key=" + ytKey + "&order=date&maxResults=50&part=snippet&q=" + search;
                        this.importMaestro = maestro.surname + " " + maestro.name;
                        this.resultImport = "Loading ... please wait. " + " - " + this.importMaestro + " " + cpt + "/" + maestroList.length;
                        return [4 /*yield*/, this.getVideoFromSearch(req, maestro)];
                    case 2:
                        _a.sent();
                        cpt++;
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.resultImport = "Terminé ! ";
                        this.videosService.loadAllVideos().then(function (allVideos) {
                            if (allVideos) {
                                _this.videosService.setVideos(allVideos);
                            }
                            _this.resultImport = "Terminé ! Update des videos terminé .";
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AboutPage.prototype.getVideoFromSearch = function (req, maestro) {
        var _this = this;
        return new Promise(function (resolve) {
            //d'abord récupérer les videos du maestro
            _this.videosService.getVideos(maestro, null, 10000000).then(function (response) {
                var maestroVideos = [];
                ;
                response.forEach(function (item) {
                    maestroVideos.push(item.youtubeId);
                });
                //lancement de la requete de recherche
                _this.http.get(req, maestro).subscribe(function (data) {
                    data['items'].forEach(function (item) {
                        var video = _this.hydrateVideo(item);
                        //this.MaestroService.getVideosMaestro(maestro);
                        //test si la video existe
                        if (video.youtubeId) {
                            //Noeud général
                            if (_this.youtubeIdList.indexOf(video.youtubeId) > -1) {
                                //La vidéo existe dans le noeud général on fait rien
                            }
                            else {
                                //Ajout de la vidéo dans le noeud général
                                if (video.youtubeId !== null && video.youtubeId !== "") {
                                    firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref("videos/").push(video)
                                        .then(function (snap) {
                                        video.key = snap.key;
                                        // ajout de l'id de la video dans le tableau d'id general
                                        _this.youtubeIdList.push(video.youtubeId);
                                    });
                                }
                            }
                            //Noeud du maestro
                            if (maestroVideos.indexOf(video.youtubeId) > -1) {
                            }
                            else {
                                firebase__WEBPACK_IMPORTED_MODULE_7__["database"]().ref("/maestros/" + maestro.key + "/videos/").push(video);
                                maestroVideos.unshift(video);
                            }
                            resolve("done");
                        }
                    });
                }, function (err) { console.log(err); }, function () {
                    //console.log("finit" + " " + maestro.name + " " + request )
                });
                //Fin de la recherche youtube
            });
        });
    };
    AboutPage.prototype.hydrateVideo = function (item) {
        //var video = <IVideo>{};
        var video = {};
        video.title = item.snippet.title;
        video.youtubeId = "";
        if (item.id.videoId) {
            video.youtubeId = item.id.videoId;
        }
        else {
            if (item.videoId)
                video.youtubeId = item.videoId;
        }
        video.urlImage = item.snippet.thumbnails.high.url;
        video.datePublication = item.snippet.publishedAt;
        video.description = item.snippet.description;
        video.importUser = "bot";
        video.topVideo = false;
        video.type = "";
        if (video.title) {
            if (video.title.toLowerCase().indexOf("vals") > -1)
                video.type = "vals";
            if (video.title.toLowerCase().indexOf("waltz") > -1)
                video.type = "vals";
            if (video.title.toLowerCase().indexOf("milonga") > -1)
                video.type = "milonga";
            if (video.title.toLowerCase().indexOf("workshop") > -1)
                video.type = "lesson";
            if (video.title.toLowerCase().indexOf("lesson") > -1)
                video.type = "lesson";
            if (video.title.toLowerCase().indexOf("class") > -1)
                video.type = "lesson";
        }
        if (video.type) {
            // on garde le type actuel
        }
        else {
            if (video.description) {
                if (video.description.toLowerCase().indexOf("vals") > -1)
                    video.type = "vals";
                if (video.description.toLowerCase().indexOf("waltz") > -1)
                    video.type = "vals";
                if (video.description.toLowerCase().indexOf("milonga") > -1)
                    video.type = "milonga";
                if (video.description.toLowerCase().indexOf("workshop") > -1)
                    video.type = "lesson";
                if (video.description.toLowerCase().indexOf("lesson") > -1)
                    video.type = "lesson";
                if (video.description.toLowerCase().indexOf("class") > -1)
                    video.type = "lesson";
            }
        }
        video.valid = true;
        video.dateAdd = this.formatDate(new Date());
        return video;
    };
    AboutPage.prototype.formatDate = function (myDate) {
        var mm = myDate.getMonth() + 1; // getMonth() is zero-based
        var dd = myDate.getDate();
        return [myDate.getFullYear(),
            (mm > 9 ? '' : '0') + mm,
            (dd > 9 ? '' : '0') + dd
        ].join('-');
    };
    AboutPage.prototype.logOut = function () {
        this.authService.logoutUser();
        this.profileService.setRole("visitor");
        //this.router.navigateByUrl(`/tabs/(home:home)`);
        this.router.navigateByUrl("login");
    };
    AboutPage.prototype.rateTF = function () {
        window.open("https://play.google.com/store/apps/details?id=tango.fury");
    };
    AboutPage.prototype.generateSitemap = function () {
        var sitemap = [
            "https://www.tangofury.com/tabs/(home:home)",
            "https://www.tangofury.com/tabs/(latest:latest)",
            "https://www.tangofury.com/tabs/(tango-maestros:tango-maestros)",
        ];
        this.playlistService.getSelections().then(function (selections) {
            selections.forEach(function (selection) {
                sitemap.push("https://www.tangofury.com/tabs/(home:selection/NbtwzggJpfYmu1rN4lqdCNBBSVu1/" + selection.key + ")");
            });
        });
        var maestroList = this.MaestroService.getMaestros();
        maestroList.forEach(function (maestro) {
            sitemap.push("https://www.tangofury.com/tabs/(tango-maestros:maestro-details/" + maestro.slug + ")");
        });
        return sitemap;
    };
    AboutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.sitemap = this.generateSitemap();
        // Try to remove META-Tags
        try {
            document.querySelector("meta[name='description']").remove();
        }
        catch (e) {
        }
        // Add the new META-Tags
        var description = document.createElement('meta');
        description.name = "description";
        description.content = "Informations about the Tango Fury project";
        document.getElementsByTagName('head')[0].appendChild(description);
        this.inscBackAction = this.platform.backButton.subscribe(function () {
            // Check this log in chrome: "chrome://inspect/#devices"             
            _this.element = document.getElementById('backButton');
            _this.element.click();
            // OR
            // this.router.navigate(['/anyPage']);
        }, function (error) {
            console.log('\n\nERROR:\n' + error.message + '\n\n');
        });
    };
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.page.html */ "./src/app/about/about.page.html"),
            styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_maestro_maestro__WEBPACK_IMPORTED_MODULE_3__["MaestroProvider"],
            _services_video_video__WEBPACK_IMPORTED_MODULE_6__["VideoProvider"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileProvider"],
            _services_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _services_playlist_playlist__WEBPACK_IMPORTED_MODULE_4__["PlaylistProvider"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map