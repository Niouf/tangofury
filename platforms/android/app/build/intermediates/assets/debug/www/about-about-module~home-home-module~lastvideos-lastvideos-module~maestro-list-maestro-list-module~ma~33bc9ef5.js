(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module~home-home-module~lastvideos-lastvideos-module~maestro-list-maestro-list-module~ma~33bc9ef5"],{

/***/ "./src/app/services/video/video.ts":
/*!*****************************************!*\
  !*** ./src/app/services/video/video.ts ***!
  \*****************************************/
/*! exports provided: VideoProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoProvider", function() { return VideoProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/maestro/maestro */ "./src/app/services/maestro/maestro.ts");
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





/*
  Generated class for the VideoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var VideoProvider = /** @class */ (function () {
    function VideoProvider(loadingCtrl, profileService, maestroService, platform) {
        this.loadingCtrl = loadingCtrl;
        this.profileService = profileService;
        this.maestroService = maestroService;
        this.platform = platform;
        this.videos = new Array();
        this.topVideos = [];
        this.allVideos = [];
        this.allMilongas = [];
        this.allVals = [];
        this.allOthers = [];
        this.allLessons = [];
        this.limitOffset = 12;
    }
    VideoProvider.prototype.launchVideo = function (video) {
        window.open("https://www.youtube.com/watch?v=" + video.youtubeId);
    };
    VideoProvider.prototype.getVideos = function (maestro, type, offset, topvideos) {
        var _this = this;
        if (type === void 0) { type = ""; }
        if (offset === void 0) { offset = 0; }
        if (topvideos === void 0) { topvideos = false; }
        return new Promise(function (resolve) {
            if (maestro == null) {
                if (type == null) {
                    if (topvideos == true) {
                        //affiche les top videos
                        var fb = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("/videos").orderByChild("topVideo").equalTo(1).limitToLast(offset + 12);
                    }
                    else {
                        //vue par défaut
                        var fb = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("/videos").orderByChild("datePublication").limitToLast(offset + 12);
                    }
                }
                else {
                    var fb = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("/videos").orderByChild("type").equalTo(type).limitToLast(offset + 12);
                }
            }
            else {
                if (type == null) {
                    var fb = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("maestros/" + maestro.key + "/videos").orderByChild("datePublication").limitToLast(offset + 12);
                }
                else {
                    var fb = firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("maestros/" + maestro.key + "/videos").orderByChild("type").equalTo(type).limitToLast(offset + 12);
                }
            }
            var videosWatched = _this.profileService.getVideosWatched();
            fb.once("value")
                .then(function (querySnapshot) {
                var arr = [];
                var arrTop = [];
                querySnapshot.forEach(function (doc) {
                    var video = {
                        key: doc.key,
                        id: doc.child("id").val(),
                        title: doc.child("title").val(),
                        youtubeId: doc.child("youtubeId").val(),
                        urlImage: doc.child("urlImage").val(),
                        datePublication: doc.child("datePublication").val(),
                        description: doc.child("description").val(),
                        importUser: doc.child("importUser").val(),
                        topVideo: doc.child("topVideo").val(),
                        type: doc.child("type").val(),
                        valid: doc.child("valid").val(),
                        dateAdd: doc.child("dateAdd").val(),
                        seen: false
                    };
                    //Si la video est dans le tableau des vues on la passe en seen true
                    if (videosWatched.indexOf(video.youtubeId) > -1) {
                        video.seen = true;
                    }
                    if (video.valid) {
                        arr.push(video);
                    }
                });
                if (arr.length > 0) {
                    resolve(arr.reverse());
                }
                else {
                    resolve([]);
                }
            });
        });
    };
    VideoProvider.prototype.loadAllVideos = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]()
                .ref("/videos")
                .orderByChild("datePublication")
                //.limitToLast(8000)
                .once("value")
                .then(function (querySnapshot) {
                var arr = [];
                var arrTop = [];
                querySnapshot.forEach(function (doc) {
                    var video = {
                        key: doc.key,
                        id: doc.child("id").val(),
                        title: doc.child("title").val(),
                        youtubeId: doc.child("youtubeId").val(),
                        urlImage: doc.child("urlImage").val(),
                        datePublication: doc.child("datePublication").val(),
                        description: doc.child("description").val(),
                        importUser: doc.child("importUser").val(),
                        topVideo: doc.child("topVideo").val(),
                        type: doc.child("type").val(),
                        valid: doc.child("valid").val(),
                        dateAdd: doc.child("dateAdd").val(),
                        seen: false
                    };
                    if (video.valid) {
                        arr.push(video);
                        if (video.topVideo)
                            arrTop.push(video);
                    }
                });
                if (arr.length > 0) {
                    _this.allVideos = arr;
                    _this.topVideos = arrTop;
                    _this.allVideos.reverse();
                    resolve(_this.allVideos);
                }
                else {
                    resolve(null);
                }
            });
        });
    };
    VideoProvider.prototype.addToVideos = function (video) {
        this.allVideos.unshift(video);
    };
    VideoProvider.prototype.setVideos = function (videos) {
        this.allVideos = videos;
        for (var _i = 0, _a = this.allVideos; _i < _a.length; _i++) {
            var video = _a[_i];
            if (video.type == "milonga")
                this.allMilongas.push(video);
            if (video.type == "vals")
                this.allVals.push(video);
            if (video.type == "other")
                this.allOthers.push(video);
            if (video.type == "lesson")
                this.allLessons.push(video);
        }
    };
    VideoProvider.prototype.getAllVideos = function () {
        return this.allVideos;
    };
    VideoProvider.prototype.presentLoading = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var loader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: message,
                            duration: 500
                        })];
                    case 1:
                        loader = _a.sent();
                        return [4 /*yield*/, loader.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    VideoProvider.prototype.getTopvideos = function (offset) {
        return this.topVideos.slice(offset, offset + this.limitOffset);
    };
    VideoProvider.prototype.setTopVideos = function (videos) {
        this.topVideos = videos;
    };
    VideoProvider.prototype.addTopVideo = function (video) {
        this.presentLoading("Setting as a top video");
        video.topVideo = 1;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("/videos/" + video.key).set(video);
        this.topVideos.unshift(video);
    };
    VideoProvider.prototype.removeTopVideo = function (video) {
        video.topVideo = 0;
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("/videos/" + video.key).set(video);
    };
    VideoProvider.prototype.playVideo = function (video) {
        video.seen = true;
        this.profileService.setVideoSeen(video);
        window.open("https://www.youtube.com/watch?v=" + video.youtubeId);
    };
    VideoProvider.prototype.setType = function (video, type) {
        var _this = this;
        video.type = type;
        this.maestroService.getMaestros().forEach(function (maestro) {
            _this.findVideo(video, "maestros/" + maestro.key + "/videos", "setType", type).then();
        });
        //delete video from general
        this.findVideo(video, "videos", "setType", type).then();
        return true;
    };
    VideoProvider.prototype.deleteVideo = function (video) {
        var _this = this;
        //delete video from maestros
        this.maestroService.getMaestros().forEach(function (maestro) {
            _this.findVideo(video, "maestros/" + maestro.key + "/videos", "delete", null).then();
        });
        //delete video from general
        this.deleteGeneralVideo(video);
    };
    VideoProvider.prototype.deleteGeneralVideo = function (video) {
        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref("videos/" + video.key).set(null);
        console.log("deleting video " + video.title);
    };
    VideoProvider.prototype.findVideo = function (video, target, operation, type) {
        return new Promise(function (resolve, reject) {
            //trouve la video 
            firebase__WEBPACK_IMPORTED_MODULE_2__["database"]()
                .ref(target)
                .orderByChild("youtubeId")
                .equalTo(video.youtubeId)
                .once("value")
                .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (operation == "delete") {
                        video.valid = 0;
                        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(target + "/" + doc.key).set(video);
                        console.log("deleting " + video.title);
                    }
                    if (operation == "setType") {
                        video.type = type;
                        firebase__WEBPACK_IMPORTED_MODULE_2__["database"]().ref(target + "/" + doc.key).set(video);
                    }
                });
            });
        });
    };
    VideoProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_3__["ProfileProvider"],
            _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__["MaestroProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], VideoProvider);
    return VideoProvider;
}());



/***/ })

}]);
//# sourceMappingURL=about-about-module~home-home-module~lastvideos-lastvideos-module~maestro-list-maestro-list-module~ma~33bc9ef5.js.map