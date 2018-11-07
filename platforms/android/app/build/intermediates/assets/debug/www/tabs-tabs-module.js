(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _maestro_list_maestro_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../maestro-list/maestro-list.module */ "./src/app/maestro-list/maestro-list.module.ts");
/* harmony import */ var _maestro_maestro_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../maestro/maestro.module */ "./src/app/maestro/maestro.module.ts");
/* harmony import */ var _lastvideos_lastvideos_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lastvideos/lastvideos.module */ "./src/app/lastvideos/lastvideos.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _playlist_list_playlist_list_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../playlist-list/playlist-list.module */ "./src/app/playlist-list/playlist-list.module.ts");
/* harmony import */ var _playlist_playlist_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../playlist/playlist.module */ "./src/app/playlist/playlist.module.ts");
/* harmony import */ var _allselections_allselections_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../allselections/allselections.module */ "./src/app/allselections/allselections.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_4__["TabsPageRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomePageModule"],
                _maestro_list_maestro_list_module__WEBPACK_IMPORTED_MODULE_6__["MaestroListPageModule"],
                _lastvideos_lastvideos_module__WEBPACK_IMPORTED_MODULE_8__["LastvideosPageModule"],
                _playlist_list_playlist_list_module__WEBPACK_IMPORTED_MODULE_10__["PlaylistListPageModule"],
                _maestro_maestro_module__WEBPACK_IMPORTED_MODULE_7__["MaestroPageModule"],
                _playlist_playlist_module__WEBPACK_IMPORTED_MODULE_11__["PlaylistPageModule"],
                _allselections_allselections_module__WEBPACK_IMPORTED_MODULE_12__["AllselectionsPageModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"],
            ],
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.html":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<ion-show-when size=\"md, lg, xl\">\n    <ion-toolbar class='center toolbar-tf'  color=\"dark\">\n        <img (click)=\"goToAbout()\" class='logo-tf clickable' alt='logo Tango Fury' src=\"assets/img/logo-tangofury.png\"  >       \n    </ion-toolbar>\n</ion-show-when>\n\n  <ion-fab *ngIf=\"role == 'visitor' && loginDisplay == true\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)='goToLogin()'>\n      <ion-icon name=\"person\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-tabs class='tabbar-tangofury' color=\"dark\" tabbar-highlight=true [tabbarPlacement]=tabPlacement [tabbarLayout]=tabLayout>\n     <ion-tab label=\"Home\" icon=\"home\" href=\"/tabs/(home:home)\">\n      <ion-router-outlet name=\"home\"></ion-router-outlet>\n    </ion-tab>\n    <ion-tab label=\"Latest videos\" icon=\"film\" href=\"/tabs/(latest:latest)\">\n      <ion-router-outlet name=\"latest\"></ion-router-outlet>\n    </ion-tab>\n    <ion-tab label=\"Maestros\" icon=\"star\" href=\"/tabs/(tango-maestros:tango-maestros)\">\n      <ion-router-outlet name=\"tango-maestros\"></ion-router-outlet>\n    </ion-tab>\n    <ion-tab label=\"Playlists\" icon=\"albums\" href=\"/tabs/(playlist-list:playlist-list)\">\n      <ion-router-outlet name=\"playlist-list\"></ion-router-outlet>\n    </ion-tab>\n  </ion-tabs>\n\n\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-tabbar a {\n  color: white !important; }\n\na.tab-btn-selected {\n  color: white !important; }\n\n@media screen and (min-width: 790px) {\n  .tabbar-tangofury {\n    padding-top: 60px; } }\n\n@media screen and (min-width: 790px) {\n  .toolbar-tf .logo-tf {\n    height: 3.5em; } }\n"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile/profile */ "./src/app/services/profile/profile.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_general_general__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/general/general */ "./src/app/services/general/general.ts");
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth/auth */ "./src/app/services/auth/auth.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ThrowStmt } from '@angular/compiler';

var TabsPage = /** @class */ (function () {
    function TabsPage(profileService, generalService, authService, platform, router) {
        var _this = this;
        this.profileService = profileService;
        this.generalService = generalService;
        this.authService = authService;
        this.platform = platform;
        this.router = router;
        this.tabPlacement = "top";
        this.tabLayout = "icon-top";
        this.tabMode = "mobile";
        this.loginDisplay = true;
        this.profileService.getUserRole().then(function (role) {
            _this.role = role;
            //console.log("chargement du role de l'utilisateur",this.role);
        });
        if (this.platform.is("cordova")) {
            this.loginDisplay = false;
            this.authService.lockAuth(this.role);
        }
        if (this.platform.isPortrait()) {
            console.log("bottom");
            this.tabPlacement = "bottom";
            this.tabLayout = "icon-top";
            this.tabMode = "mobile";
        }
        else {
            console.log("top");
            this.tabPlacement = "top";
            this.tabLayout = "icon-start";
            this.tabMode = "desktop";
        }
    }
    TabsPage.prototype.goToLogin = function () {
        this.router.navigateByUrl("login");
    };
    TabsPage.prototype.goToAbout = function () {
        this.router.navigateByUrl("about");
    };
    TabsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_profile_profile__WEBPACK_IMPORTED_MODULE_1__["ProfileProvider"],
            _services_general_general__WEBPACK_IMPORTED_MODULE_4__["GeneralProvider"],
            _services_auth_auth__WEBPACK_IMPORTED_MODULE_5__["AuthProvider"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _home_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _lastvideos_lastvideos_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lastvideos/lastvideos.page */ "./src/app/lastvideos/lastvideos.page.ts");
/* harmony import */ var _maestro_list_maestro_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../maestro-list/maestro-list.page */ "./src/app/maestro-list/maestro-list.page.ts");
/* harmony import */ var _playlist_list_playlist_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../playlist-list/playlist-list.page */ "./src/app/playlist-list/playlist-list.page.ts");
/* harmony import */ var _playlist_playlist_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../playlist/playlist.page */ "./src/app/playlist/playlist.page.ts");
/* harmony import */ var _maestro_maestro_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../maestro/maestro.page */ "./src/app/maestro/maestro.page.ts");
/* harmony import */ var _allselections_allselections_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../allselections/allselections.page */ "./src/app/allselections/allselections.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: '/tabs/(home:home)',
                pathMatch: 'full',
            },
            {
                path: 'home',
                outlet: 'home',
                component: _home_home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
            },
            {
                path: 'tango-maestros',
                outlet: 'tango-maestros',
                component: _maestro_list_maestro_list_page__WEBPACK_IMPORTED_MODULE_5__["MaestroListPage"]
            },
            {
                path: 'maestro-details/:slug',
                outlet: 'tango-maestros',
                component: _maestro_maestro_page__WEBPACK_IMPORTED_MODULE_8__["MaestroPage"]
            },
            {
                path: 'latest',
                outlet: 'latest',
                component: _lastvideos_lastvideos_page__WEBPACK_IMPORTED_MODULE_4__["LastvideosPage"]
            },
            {
                path: 'playlist-list',
                outlet: 'playlist-list',
                component: _playlist_list_playlist_list_page__WEBPACK_IMPORTED_MODULE_6__["PlaylistListPage"]
            },
            {
                path: 'tango-selections-all',
                outlet: 'home',
                component: _allselections_allselections_page__WEBPACK_IMPORTED_MODULE_9__["AllselectionsPage"]
            },
            {
                path: 'selection/:userkey/:key',
                outlet: 'home',
                component: _playlist_playlist_page__WEBPACK_IMPORTED_MODULE_7__["PlaylistPage"]
            },
            {
                path: 'playlist-user/:userkey/:key',
                outlet: 'playlist-list',
                component: _playlist_playlist_page__WEBPACK_IMPORTED_MODULE_7__["PlaylistPage"]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/(home:home)',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map