(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playlist-list-playlist-list-module~tabs-tabs-module"],{

/***/ "./src/app/playlist-list/playlist-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/playlist-list/playlist-list.module.ts ***!
  \*******************************************************/
/*! exports provided: PlaylistListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistListPageModule", function() { return PlaylistListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _playlist_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playlist-list.page */ "./src/app/playlist-list/playlist-list.page.ts");
/* harmony import */ var _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-video/item-video.module */ "./src/app/item-video/item-video.module.ts");
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
        component: _playlist_list_page__WEBPACK_IMPORTED_MODULE_5__["PlaylistListPage"]
    }
];
var PlaylistListPageModule = /** @class */ (function () {
    function PlaylistListPageModule() {
    }
    PlaylistListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _item_video_item_video_module__WEBPACK_IMPORTED_MODULE_6__["ItemVideoModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_7__["MenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_8__["FooterModule"]
            ],
            declarations: [_playlist_list_page__WEBPACK_IMPORTED_MODULE_5__["PlaylistListPage"]],
            exports: []
        })
    ], PlaylistListPageModule);
    return PlaylistListPageModule;
}());



/***/ }),

/***/ "./src/app/playlist-list/playlist-list.page.html":
/*!*******************************************************!*\
  !*** ./src/app/playlist-list/playlist-list.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <app-menu></app-menu>\n</ion-header>\n\n\n<ion-content padding class='fg-content'>\n<div *ngIf=\"displayConnect == false\">\n  <ion-show-when size=\"md, lg, xl\"><h1>Your Playlists</h1></ion-show-when>\n  <ion-card>\n    <ion-card-header class='card-menu'>\n      Create a playlist\n    </ion-card-header>\n    <ion-card-content>\n        <form class='playlist-new' [formGroup]=\"playlistForm\" (ngSubmit)=\"addPlaylist()\" novalidate>\n          <ion-item>\n            <ion-label color=\"primary\">Playlist title</ion-label>\n            <ion-input formControlName=\"playlistName\" [(ngModel)]=\"namePl\" placeholder=\"My awesome playlist\"></ion-input>\n          </ion-item>\n          <p class='center'><ion-button  type=\"submit\"><ion-icon name=\"add\"></ion-icon> Create playlist</ion-button></p>\n        </form>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card *ngIf=\"listPlaylist.length > 0\">\n      <ion-card-header class='card-menu'>\n        My playlists\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list listPlaylist  >\n          <ion-item *ngFor=\"let playList of listPlaylist\">\n            <ion-label (click)=\"showPlaylist(playList)\" class='clickable playlist-name'>\n              {{ playList.title }}\n            </ion-label>\n            <div  slot='end'>\n                <ion-button (click)=\"actionPlaylist(playList)\"><ion-icon name='create'></ion-icon></ion-button>\n            </div>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n  </ion-card>\n</div>\n\n<div *ngIf=\"displayConnect == true\">\n    <div class='center header'>\n        <h1>Please connect to Tango Fury</h1>\n        <p>Create an account and connect to Tango Fury to create your own playlists and manage your favorites maestros.</p>\n        <p>It's free and we won't send you any further email :).</p>\n        <p>    \n          <ion-button (click)='goToLogin()'>\n            <ion-icon name=\"person\"></ion-icon> Connect\n          </ion-button>\n        </p>\n    </div>\n</div>\n</ion-content>"

/***/ }),

/***/ "./src/app/playlist-list/playlist-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/playlist-list/playlist-list.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/playlist-list/playlist-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/playlist-list/playlist-list.page.ts ***!
  \*****************************************************/
/*! exports provided: PlaylistListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistListPage", function() { return PlaylistListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth/auth */ "./src/app/services/auth/auth.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_playlist_edit_modal_playlist_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-playlist-edit/modal-playlist-edit.component */ "./src/app/modal-playlist-edit/modal-playlist-edit.component.ts");
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







var PlaylistListPage = /** @class */ (function () {
    function PlaylistListPage(modalCtrl, actionSheetCtrl, authService, profileService, formBuilder, authProvider, router) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.authService = authService;
        this.profileService = profileService;
        this.formBuilder = formBuilder;
        this.authProvider = authProvider;
        this.router = router;
        this.listPlaylist = [];
        this.namePl = "";
        this.userId = "";
        this.role = "visitor";
        this.displayConnect = false;
        this.profileService.getUserRole().then(function (role) {
            _this.role = role;
            if (role == "visitor")
                _this.displayConnect = true;
            return role;
        });
        /*
        this.profileService.getUserRole().then(role=>{
          this.role=role;
          }
        ).then(role=>{
          this.authService.lockAuth(role);
        });
    
        this.videos=this.playlistService.getVideosWithoutLoading();
        */
        this.profileService.getUserId().then(function (id) {
            _this.userId = id;
        });
        this.playlistForm = formBuilder.group({ playlistName: [''] });
    }
    PlaylistListPage.prototype.ionViewWillEnter = function () {
        this.getPlaylists();
    };
    PlaylistListPage.prototype.addPlaylist = function () {
        if (this.playlistForm.value.playlistName != null && this.playlistForm.value.playlistName != "") {
            var playlistName = this.namePl;
            this.namePl = "";
            this.profileService.addPlaylist(playlistName);
            this.getPlaylists();
        }
    };
    PlaylistListPage.prototype.getPlaylists = function () {
        var _this = this;
        this.profileService.getPlaylists().then(function (data) {
            _this.listPlaylist = data;
        });
    };
    PlaylistListPage.prototype.removePlaylist = function (playList) {
        var result = confirm("Do you really want to delete this playlist ? ");
        if (result) {
            this.profileService.removePlaylist(playList);
            this.getPlaylists();
        }
    };
    PlaylistListPage.prototype.showPlaylist = function (playList) {
        var urlPL = "/tabs/(playlist-list:playlist-user/" + this.userId + "/" + playList.key + ")";
        //urlPL=`/tabs/(home:playlist/NbtwzggJpfYmu1rN4lqdCNBBSVu1/${playList.key})`
        this.router.navigateByUrl(urlPL);
    };
    PlaylistListPage.prototype.goToLogin = function () {
        this.router.navigateByUrl("login");
    };
    PlaylistListPage.prototype.actionPlaylist = function (playlist) {
        return __awaiter(this, void 0, void 0, function () {
            var myButtons, actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        myButtons = [
                            {
                                text: 'Modify playlist',
                                icon: "settings",
                                handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var modal;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.modalCtrl.create({ component: _modal_playlist_edit_modal_playlist_edit_component__WEBPACK_IMPORTED_MODULE_6__["ModalPlaylistEditComponent"], componentProps: { playlist: playlist } })];
                                            case 1:
                                                modal = _a.sent();
                                                modal.present();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }
                            }, {
                                text: 'Delete Playlist',
                                icon: "remove",
                                handler: function () {
                                    _this.removePlaylist(playlist);
                                }
                            }
                        ];
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
    PlaylistListPage.prototype.ngOnInit = function () {
        // Try to remove META-Tags
        try {
            document.querySelector("meta[name='description']").remove();
        }
        catch (e) {
        }
        // Add the new META-Tags
        var description = document.createElement('meta');
        description.name = "description";
        description.content = "";
        document.getElementsByTagName('head')[0].appendChild(description);
    };
    PlaylistListPage.prototype.goToAbout = function () {
        this.router.navigateByUrl("about");
    };
    PlaylistListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-playlist-list',
            template: __webpack_require__(/*! ./playlist-list.page.html */ "./src/app/playlist-list/playlist-list.page.html"),
            styles: [__webpack_require__(/*! ./playlist-list.page.scss */ "./src/app/playlist-list/playlist-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _services_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_4__["ProfileProvider"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_auth_auth__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PlaylistListPage);
    return PlaylistListPage;
}());



/***/ })

}]);
//# sourceMappingURL=playlist-list-playlist-list-module~tabs-tabs-module.js.map