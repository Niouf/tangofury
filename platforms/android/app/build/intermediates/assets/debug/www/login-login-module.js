(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar color=\"dark\">\n    <div class='center'>\n      <ion-buttons slot=\"start\">\n          <ion-back-button id=\"backButton\" defaultHref=\"/\"></ion-back-button> \n      </ion-buttons>\n    \n    \n        <img slot='secondary' (click)=\"goToAbout()\" class='logo-tf clickable' alt='logo Tango Fury' src=\"assets/img/logo-tangofury.png\"  >\n    </div>\n    \n</ion-toolbar>\n\n<ion-content class='fg-content' padding>\n  <div class='center header'>\n      <h1>Welcome to Tango Fury</h1>\n      <p>Please connect and discover new tango videos everyday</p>\n  </div>\n\n  <ion-card>\n    <ion-card-header class='card-menu'>\n      <ion-icon name=\"person\"></ion-icon> Connexion\n    </ion-card-header>\n    <ion-card-content>\n        <form [formGroup]=\"loginForm\" (submit)=\"loginUser()\" novalidate>\n            <ion-item>\n              <ion-label stacked>Email</ion-label>\n              <ion-input formControlName=\"email\" type=\"email\" placeholder=\"Your email address\" [class.invalid]=\"!loginForm.controls.email.valid\"> </ion-input>\n            </ion-item>\n          \n            <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls.email.valid && loginForm.controls.email.touched\">\n              <p>Please enter a valid email address.</p>\n            </ion-item>\n          \n            <ion-item>\n              <ion-label stacked>Password</ion-label>\n              <ion-input formControlName=\"password\" type=\"password\" placeholder=\"Your password\" [class.invalid]=\"!loginForm.controls.password.valid\"> </ion-input>\n            </ion-item>\n          \n            <ion-item class=\"error-message\" *ngIf=\"!loginForm.controls.password.valid && loginForm.controls.password.touched\">\n              <p>Your password needs more than 6 characters.</p>\n            </ion-item>\n          \n            <div class='center'>\n                <ion-button  type=\"submit\" [disabled]=\"!loginForm.valid\"> Log In </ion-button>\n                <ion-button  color=\"medium\" (click)=\"goToResetPassword()\"> I forgot my password :( </ion-button>\n            </div>\n            \n          </form>\n\n    </ion-card-content>\n    \n  </ion-card>\n    \n  <div class='center'>\n      <div class='or'>or</div>\n      <p>If you are not already a member please<br/>\n      <ion-button   block clear (click)=\"goToSignup()\"> Create a new account </ion-button>\n      </p>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  margin-bottom: 32px; }\n  form button {\n    margin-top: 20px !important; }\n  p {\n  font-size: 0.8em;\n  color: #d2d2d2; }\n  ion-label {\n  margin-left: 5px; }\n  ion-input {\n  padding: 5px; }\n  .invalid {\n  border-bottom: 1px solid #ff6153; }\n  .error-message {\n  min-height: 2.2rem; }\n  .error-message p {\n    font-size: 60%; }\n  .error-message ion-label {\n    margin: 2px 0; }\n  .error-message .item-inner {\n    border-bottom: 0 !important; }\n  .or {\n  font-size: 2em;\n  color: white;\n  margin: 1em; }\n  .header {\n  color: white; }\n  .header h1 {\n    font-size: 2.5em; }\n  .header p {\n    font-size: 1.4em; }\n"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/email */ "./src/app/validators/email.ts");
/* harmony import */ var _services_auth_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth/auth */ "./src/app/services/auth/auth.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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







var LoginPage = /** @class */ (function () {
    function LoginPage(authProvider, router, loadingCtrl, alertCtrl, formBuilder, platform) {
        this.authProvider = authProvider;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.loginForm = this.formBuilder.group({
            email: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _validators_email__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"].isValid])
            ],
            password: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])
            ]
        });
    }
    LoginPage.prototype.goToSignup = function () {
        this.router.navigateByUrl("SignUp");
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.router.navigateByUrl("ResetPassword");
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.goToAbout = function () {
        this.router.navigateByUrl("about");
    };
    LoginPage.prototype.loginUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var email, password, loading_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.loginForm.valid) return [3 /*break*/, 1];
                        console.log("Form is not valid yet, current value: " + this.loginForm.value);
                        return [3 /*break*/, 3];
                    case 1:
                        email = this.loginForm.value.email;
                        password = this.loginForm.value.password;
                        this.authProvider.loginUser(email, password).then(function (authData) {
                            loading_1.dismiss().then(function () {
                                window.location.replace('');
                            });
                        }, function (error) {
                            loading_1.dismiss().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                var alert;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertCtrl.create({ message: error.message, buttons: [{ text: 'Ok', role: 'cancel' }] })];
                                        case 1:
                                            alert = _a.sent();
                                            alert.present();
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        return [4 /*yield*/, this.loadingCtrl.create({
                                message: 'Loading',
                            })];
                    case 2:
                        loading_1 = _a.sent();
                        loading_1.present();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
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
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")],
        }),
        __metadata("design:paramtypes", [_services_auth_auth__WEBPACK_IMPORTED_MODULE_4__["AuthProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map