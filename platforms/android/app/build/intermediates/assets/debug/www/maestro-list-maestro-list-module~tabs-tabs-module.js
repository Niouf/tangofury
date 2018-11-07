(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maestro-list-maestro-list-module~tabs-tabs-module"],{

/***/ "./src/app/maestro-list/maestro-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/maestro-list/maestro-list.module.ts ***!
  \*****************************************************/
/*! exports provided: MaestroListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaestroListPageModule", function() { return MaestroListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _maestro_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maestro-list.page */ "./src/app/maestro-list/maestro-list.page.ts");
/* harmony import */ var _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../menu/menu.module */ "./src/app/menu/menu.module.ts");
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
        component: _maestro_list_page__WEBPACK_IMPORTED_MODULE_5__["MaestroListPage"]
    }
];
var MaestroListPageModule = /** @class */ (function () {
    function MaestroListPageModule() {
    }
    MaestroListPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _menu_menu_module__WEBPACK_IMPORTED_MODULE_6__["MenuModule"],
                _footer_footer_module__WEBPACK_IMPORTED_MODULE_7__["FooterModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_maestro_list_page__WEBPACK_IMPORTED_MODULE_5__["MaestroListPage"]]
        })
    ], MaestroListPageModule);
    return MaestroListPageModule;
}());



/***/ }),

/***/ "./src/app/maestro-list/maestro-list.page.html":
/*!*****************************************************!*\
  !*** ./src/app/maestro-list/maestro-list.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <app-menu></app-menu>\n</ion-header>\n\n<ion-content padding class='fg-content'>\n    <ion-show-when size=\"md, lg, xl\"><h1>Tango maestros</h1></ion-show-when>\n    <ion-card *ngIf=\"(favoritesMaestros.length > 0)\">\n        <ion-card-header class='card-menu'>\n          <ion-icon name=\"star\"></ion-icon> Favorites\n        </ion-card-header>\n  \n        <ion-card-content>\n            <ion-grid class=\"card-background-page \">\n                <ion-row>\n                  <ion-col *ngFor=\"let maestro of favoritesMaestros\" size=\"6\" size-sm=\"6\" size-md=\"4\" size-lg=\"2\" size-xl='2'>\n                      <ion-card (click)=\"goToDetail(maestro)\" class='clickable'  >\n                        <img *ngIf=\"maestro.imageDisplay\" src=\"assets/img/thumbs/{{maestro.imageDisplay}}\">\n                        <div *ngIf=\"(maestro.newvideos>0)\" class=\"card-title\">+ {{maestro.newvideos}} videos</div>\n                      </ion-card>\n                  </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card-content>\n    </ion-card>\n\n\n  <ion-card *ngIf=\"role=='admin'\">\n      <ion-card-header class='card-menu'>\n          <ion-icon name=\"key\" ></ion-icon> Administration\n      </ion-card-header>\n      <ion-card-content>\n        <p>\n          <ion-button (click)=\"addMaestro()\">\n              <ion-icon name=\"add\" ></ion-icon> Add a maestro\n          </ion-button>\n        </p>\n      </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header class='card-menu'>\n        <ion-icon name=\"people\" ></ion-icon> All maestros\n    </ion-card-header>\n    <ion-card-content class=\"card-background-page \">\n        <ion-list>     \n            <ion-searchbar class='search-bar' color=\"light\" animated (ionInput)=\"getItems($event)\"></ion-searchbar>\n            <ion-item *ngFor=\"let maestro of maestros\" lines=\"inset\" detail-push >\n    \n              <ion-label>\n                  <ion-button fill=\"clear\" href='/tabs/(tango-maestros:maestro-details/{{maestro.slug}})'>{{maestro.surname}} {{maestro.nickname}} {{maestro.name}}</ion-button>\n              </ion-label>\n              \n              <ion-badge slot=\"end\" *ngIf=\"maestro.newvideos > 0\">+{{maestro.newvideos}}</ion-badge>\n              <ion-button *ngIf=\"role == 'admin'\" slot=\"end\" (click)=\"actionMaestro(maestro)\"><ion-icon name='cog' ></ion-icon> admin</ion-button>\n    \n              <div *ngIf=\"role != 'visitor'\">\n                <ion-col slot=\"end\" *ngIf=\"maestro.isFavorite == true\">\n                  <ion-button fill=\"clear\" (click)=\"toggleFavoriteMaetro(maestro)\"><ion-icon name=\"star\" ></ion-icon></ion-button>\n                </ion-col>\n                <ion-col slot=\"end\" *ngIf=\"maestro.isFavorite == false\">\n                  <ion-button fill=\"clear\" (click)=\"toggleFavoriteMaetro(maestro)\"><ion-icon name=\"star-outline\" ></ion-icon></ion-button>\n                </ion-col>\n              </div>\n            </ion-item>\n         </ion-list>\n    </ion-card-content>\n   </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/maestro-list/maestro-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/maestro-list/maestro-list.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-background-page .half-class {\n  background: black; }\n\n.card-background-page ion-card {\n  position: relative;\n  text-align: center; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 1.2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n  text-shadow: 0 1px 0 black;\n  height: 3em; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/maestro-list/maestro-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/maestro-list/maestro-list.page.ts ***!
  \***************************************************/
/*! exports provided: MaestroListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaestroListPage", function() { return MaestroListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/maestro/maestro */ "./src/app/services/maestro/maestro.ts");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _modal_maestro_modal_maestro_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-maestro/modal-maestro.component */ "./src/app/modal-maestro/modal-maestro.component.ts");
/* harmony import */ var _services_general_general__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/general/general */ "./src/app/services/general/general.ts");
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








var MaestroListPage = /** @class */ (function () {
    function MaestroListPage(router, actionSheetCtrl, toastCtrl, loadingCtrl, modalCtrl, titleService, metaService, maestroService, generalService, profileService) {
        var _this = this;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.titleService = titleService;
        this.metaService = metaService;
        this.maestroService = maestroService;
        this.generalService = generalService;
        this.profileService = profileService;
        this.maestros = new Array();
        this.favoritesMaestros = new Array();
        this.roleUser = "visitor";
        this.role = "visitor";
        this.titleService.setTitle("All tango maestros");
        this.metaService.addTag({ name: 'description', content: 'Pick a tango maestro in the list and see all his latest videos' });
        this.profileService.getUserRole().then(function (role) {
            _this.roleUser = role;
            _this.role = role;
        });
        //this.initPage();
        this.loadInfos();
    }
    MaestroListPage.prototype.loadInfos = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.generalService.initPage()];
                    case 1:
                        _a.sent();
                        this.role = this.profileService.returnRole();
                        this.favoritesMaestros = this.maestroService.getFavoritesMaestros();
                        this.maestros = this.maestroService.getMaestros();
                        return [2 /*return*/];
                }
            });
        });
    };
    /*
    async initPage(){
       
      //------------------------- Chargement des maestros ----------------------------
      var storage = firebase.storage();
      let loading = await this.loadingCtrl.create({
        message: 'Loading maestros',
      });
      await loading.present();
  
  
  
      this.initMaestros();
  
      this.profileService.getUserRole().then(role=>{
            this.role=role;
            //------------------------- Chargement des favoris ----------------------------
            if(this.role!="visitor"){
              this.profileService.getLastConnexion().then((lastConnexion)=>{
                this.initFavorites(lastConnexion);
              });
            }
            //------------------------- Fin de Chargement des favoris ----------------------------
          }
      );
  
      await loading.dismiss();
    }
  
  
    initFavorites(lastConnexion){
      //Chargement des favoris
      this.maestroService.LoadListFavorites(lastConnexion).then(data=>{
        this.favoritesMaestros=data;
      });
    }
    */
    MaestroListPage.prototype.initMaestros = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            message: 'Loading maestros',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (!(this.maestroService.getMaestros().length > 0)) return [3 /*break*/, 4];
                        this.maestros = this.maestroService.getMaestros();
                        return [4 /*yield*/, loading.dismiss()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.maestroService.loadMaestros(new Date()).then(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.maestros = data;
                                        return [4 /*yield*/, loading.dismiss()];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a.label = 5;
                    case 5:
                        this.favoritesMaestros = this.maestroService.getFavoritesMaestros();
                        return [2 /*return*/];
                }
            });
        });
    };
    MaestroListPage.prototype.resetMaestros = function () {
        this.maestros = this.maestroService.getMaestros();
    };
    MaestroListPage.prototype.goToDetail = function (maestro) {
        this.router.navigateByUrl("/tabs/(tango-maestros:maestro-details/" + maestro.slug + ")");
        //this.router.navigateByUrl(`/maestro/${maestro.slug}`);
        //this.navCtrl.push(PersonPage, maestro);
    };
    //searchbar
    MaestroListPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.resetMaestros();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.maestros = this.maestros.filter(function (item) {
                var lachaine = item.surname + " " + " " + item.nickname + " " + item.name;
                return (lachaine.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MaestroListPage.prototype.goToAbout = function () {
        this.router.navigateByUrl("about");
    };
    MaestroListPage.prototype.toggleFavoriteMaetro = function (maestro) {
        return __awaiter(this, void 0, void 0, function () {
            var toast, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(maestro.isFavorite == true)) return [3 /*break*/, 2];
                        this.maestroService.removeListFavorites(maestro);
                        maestro.isFavorite = false;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: maestro.surname + " " + maestro.name + ' removed from favorites',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [3 /*break*/, 4];
                    case 2:
                        this.maestroService.addListFavorites(maestro);
                        maestro.isFavorite = true;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: maestro.surname + " " + maestro.name + ' added to favorites',
                                duration: 2000
                            })];
                    case 3:
                        toast = _a.sent();
                        toast.present();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MaestroListPage.prototype.removeMaestro = function (maestro) {
        var result = confirm("Do you really want to delete this maestro ? ");
        if (result) {
            this.maestroService.removeMaestro(maestro);
            var index = this.maestros.indexOf(maestro);
            if (index > -1) {
                this.maestros.splice(index, 1);
            }
        }
    };
    MaestroListPage.prototype.addMaestro = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_maestro_modal_maestro_component__WEBPACK_IMPORTED_MODULE_6__["ModalMaestroComponent"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MaestroListPage.prototype.actionMaestro = function (maestro) {
        return __awaiter(this, void 0, void 0, function () {
            var myButtons, actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.roleUser == "admin")) return [3 /*break*/, 3];
                        myButtons = [
                            {
                                text: 'Modify maestro',
                                icon: "settings",
                                handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                    var modal;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.modalCtrl.create({
                                                    component: _modal_maestro_modal_maestro_component__WEBPACK_IMPORTED_MODULE_6__["ModalMaestroComponent"],
                                                    componentProps: { maestro: maestro }
                                                })];
                                            case 1:
                                                modal = _a.sent();
                                                return [4 /*yield*/, modal.present()];
                                            case 2:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }
                            }, {
                                text: 'Delete maestro',
                                icon: "remove",
                                handler: function () {
                                    _this.removeMaestro(maestro);
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
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MaestroListPage.prototype.ngOnInit = function () {
        // Try to remove META-Tags
        try {
            document.querySelector("meta[name='description']").remove();
        }
        catch (e) {
        }
        // Add the new META-Tags
        var description = document.createElement('meta');
        description.name = "description";
        description.content = "Pick one of the best tango maestros in the world";
        document.getElementsByTagName('head')[0].appendChild(description);
    };
    MaestroListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maestro-list',
            template: __webpack_require__(/*! ./maestro-list.page.html */ "./src/app/maestro-list/maestro-list.page.html"),
            styles: [__webpack_require__(/*! ./maestro-list.page.scss */ "./src/app/maestro-list/maestro-list.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"],
            _services_maestro_maestro__WEBPACK_IMPORTED_MODULE_4__["MaestroProvider"],
            _services_general_general__WEBPACK_IMPORTED_MODULE_7__["GeneralProvider"],
            _services_profile_profile__WEBPACK_IMPORTED_MODULE_5__["ProfileProvider"]])
    ], MaestroListPage);
    return MaestroListPage;
}());



/***/ })

}]);
//# sourceMappingURL=maestro-list-maestro-list-module~tabs-tabs-module.js.map