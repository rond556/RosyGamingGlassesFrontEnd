(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light\">\n  <a class=\"navbar-brand\" routerLink=\"/home\">\n    <img class=\"rosygaminglasseslogo\"\n      src=\"https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/RosyGamingLogo.png?raw=true\">\n  </a>\n  \n  <a class=\"user-link\" routerLink=\"/login\">\n    <img class=\"userlink\"\n      src=\"https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/Lucca%20-%20Status.png?raw=true\">\n  </a>\n</nav>\n\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game-display/game-display.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game-display/game-display.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-light bg-light\">\n    <button class=\"agebuttons\" (click)=\"changeAge(this.birthyear + 10)\">When You Were Ten</button>\n    <button class=\"agebuttons\" (click)=\"changeAge(this.birthyear + 11)\">When You Were Eleven</button>\n    <button class=\"agebuttons\" (click)=\"changeAge(this.birthyear + 12)\">When You Were Twelve</button>\n    <button class=\"agebuttons\" (click)=\"changeAge(this.birthyear + 13)\">When You Were Thirteen</button>\n    <button class=\"agebuttons\" (click)=\"changeAge(this.birthyear + 14)\">When You Were Fourteen</button>\n</nav>\n\n<div id=\"cardgrid\" class=\"container\">\n    <div class=\"grid-row\">\n      <div *ngFor=\"let game of games\">\n        \n        <div class=\"gamecard\">\n          <mat-card class=\"game-card\">\n            <mat-card-header>\n              <mat-card-title>{{game.name}}</mat-card-title>\n              <mat-card-subtitle></mat-card-subtitle>\n            </mat-card-header>\n            <button class=\"btn btn-link\" (click)=\"open(game.id)\">\n            <img mat-card-image src={{game.background_image}} alt=\"header image\">\n          </button>\n            <mat-card-content>\n              <div class=\"releasedate\">\n                <div class=\"leftcolumn\">\n                  Release date:\n                </div>\n                <div class=\"rightcolumn\">\n                  {{game.released}}\n                </div>\n              </div>\n            </mat-card-content>\n          </mat-card>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/gamemodal/gamemodal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/gamemodal/gamemodal.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gameModal\">\n<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{game.name}}</h4>\n      <span aria-hidden=\"true\">&times;</span>\n  </div>\n  <div class=\"modal-body\">\n    <img id=\"headerImage\" src={{game.background_image}} alt=\"header image\">\n    <p>Release date: {{game.released}}</p>\n    <p>Metacritic score: {{game.metacritic}}</p>\n    <div innerHTML=\"{{game.description}}\"></div>\n    <h4>Similar Games</h4>\n    <div *ngFor=\"let similarGame of similarGames\">\n      <h5>{{similarGame.name}}</h5>\n      <button class=\"btn btn-link\" (click)=\"close();open(similarGame.id)\">\n      <img id=\"similarGameImage\" src={{similarGame.background_image}} alt=\"similar game image\"></button>\n  </div>\n  </div>\n  <div class=\"modal-footer\">\n    Powered by \n    <a href=\"https://rawg.io/\" target=\"_blank\">RAWG Video Game Database</a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" id=\"homebox\" >\n\n  <h2>Please enter your birthyear</h2>\n    <input type=\"number\" placeholder=\"Birthyear\" [(ngModel)]=\"this.birthyear\" size=10 max=\"2020\" min=\"1900\">\n  <p>\n  <a routerLink=\"/game-display\" (click)=\"storeBirthyear(this.birthyear)\" >\n    <img class=\"gamedisplay button\"\n      src=\"http://www.videogamesprites.net/FinalFantasy6/Party/Mog/Mog%20-%20Victory%20(Front).gif\"> Click me, kupo!\n  </a>\n</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n  <div class=\"login\" [ngStyle]=\"{'background-image': 'url(' + currentBackground + ')'}\" >\n    <h2 class=\"login-header\">Login</h2>\n    <div class= \"boxbackground\" >\n    <form [formGroup]=\"loginForm\" class=\"login-container\" id=\"loginbox\" (ngSubmit)=\"login()\"  >\n  \n      <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.email.errors }\">\n        <input class=\"textbox\" type=\"email\" placeholder=\"Email\" formControlName=\"email\">\n      </p>\n  \n      <div *ngIf=\"isSubmitted && formControls.email.errors\" class=\"help-block\">\n        <div *ngIf=\"formControls.email.errors.required\">Email is required</div>\n      </div>\n  \n      <p [ngClass]=\"{ 'has-error': isSubmitted && formControls.password.errors }\">\n        <input class=\"textbox\" type=\"password\" placeholder=\"Password\" formControlName=\"password\">\n      </p>\n  \n      <div *ngIf=\"isSubmitted && formControls.password.errors\" class=\"help-block\">\n        <div *ngIf=\"formControls.password.errors.required\">Password is required</div>\n      </div>\n  \n      <p>\n        <input type=\"submit\" value=\"Log in\">\n      </p>\n      \n    </form>\n    <a routerLink=\"/register\" class=\"registerbutton\">Register</a>\n\n  </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/userpage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/userpage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p><img src=\"http://www.videogamesprites.net/FinalFantasy6/Party/Terra/Terra%20-%20Finger.gif\">\n    userpage works!\n    <img src=\"http://www.videogamesprites.net/FinalFantasy6/Party/Terra/Terra%20-%20Finger.gif\">\n</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _game_display_game_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game-display/game-display.component */ "./src/app/game-display/game-display.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");








const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'game-display', component: _game_display_game_display_component__WEBPACK_IMPORTED_MODULE_4__["GameDisplayComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'user', component: _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_7__["UserpageComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar{\n    background-color: pink;\n}\n\n.navbar-brand{\n    background-color: white; \n    border-radius: 25px;\n    padding: 20px;\n    border-color: plum;\n    border-style: solid;\n}\n\n.user-link{\n    background-color: white;\n    border-radius: 25px;\n    padding: 10px;\n    border-color: plum;\n    border-style: solid;\n}\n\n.gamecard{\n    background-color: pink;\n    border-radius: 25px;\n    border-color: palevioletred;\n    border-style: solid;\n    width: 350px;\n    height: 400px;\n    box-shadow: 10px 10px grey;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    opacity: 0.5;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.gamecard:hover {\n    width: 375px;\n    height:450px;\n    box-shadow: 0px 0px 60px 30px palevioletred;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    opacity: 1.0;\n}\n\n.mat-card-image{\n    height: 200px;\n}\n\n.mat-card-title{\n    white-space: nowrap;\n}\n\n.leftcolumn{\n    float: left;\n}\n\n.rightcolumn{\n    float: right;\n}\n\n.container {\n    max-width: 1980px;\n}\n\n.grid-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLDBCQUEwQjtJQUcxQixvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWix5QkFBOEI7WUFBOUIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLDJDQUEyQztJQUczQyxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDRTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUFtQjtJQUFuQiw2QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDhCQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbn1cblxuLm5hdmJhci1icmFuZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1jb2xvcjogcGx1bTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4udXNlci1saW5re1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItY29sb3I6IHBsdW07XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuICAuZ2FtZWNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJvcmRlci1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCBncmV5O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZ2FtZWNhcmQ6aG92ZXIge1xuICAgIHdpZHRoOiAzNzVweDtcbiAgICBoZWlnaHQ6NDUwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2MHB4IDMwcHggcGFsZXZpb2xldHJlZDtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAxLjA7XG59XG5cbi5tYXQtY2FyZC1pbWFnZXtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWF0LWNhcmQtdGl0bGV7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmxlZnRjb2x1bW57XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yaWdodGNvbHVtbntcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTk4MHB4O1xufVxuICAuZ3JpZC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./userpage/userpage.component */ "./src/app/userpage/userpage.component.ts");
/* harmony import */ var _game_display_game_display_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./game-display/game-display.component */ "./src/app/game-display/game-display.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _gamemodal_gamemodal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gamemodal/gamemodal.component */ "./src/app/gamemodal/gamemodal.component.ts");
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _userpage_userpage_component__WEBPACK_IMPORTED_MODULE_12__["UserpageComponent"],
            _game_display_game_display_component__WEBPACK_IMPORTED_MODULE_13__["GameDisplayComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _gamemodal_gamemodal_component__WEBPACK_IMPORTED_MODULE_15__["GamemodalComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"].withComponents([]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]
        ],
        providers: [],
        entryComponents: [_gamemodal_gamemodal_component__WEBPACK_IMPORTED_MODULE_15__["GamemodalComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AuthGuard = class AuthGuard {
    constructor(authService) {
        this.authService = authService;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/game-display/game-display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/game-display/game-display.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".agebuttons {\n    padding: 5px 10px;\n    font-size: x-large;\n    font-weight: bolder;\n    color: plum;\n    text-decoration: none;\n    display: inline-block;\n    background-image: #eee;\n    border-radius: 8px;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    border: 0;\n    background: none;\n    box-shadow: none;\n  }\n\n.agebuttons:visited, a:link {\n    color: #334953;\n  }\n\n.agebuttons:hover {\n  background-image: url(\"https://github.com/rond556/RosyGamingGlassesFrontEnd/blob/dev/src/assets/Hearts%20falling.gif?raw=true\");\n  color: palevioletred;\n  text-shadow:10px 10px 30px plum;\n  box-shadow: 0px 0px 60px 30px palevioletred;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n  }\n\n.gamecard{\n    background-color: pink;\n    border-radius: 25px;\n    border-color: palevioletred;\n    border-style: solid;\n    width: 350px;\n    height: 400px;\n    box-shadow: 10px 10px grey;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    opacity: 0.5;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    margin-top: 5px;\n    margin-left: 5px;\n}\n\n.gamecard:hover {\n    width:355px;\n    box-shadow: 0px 0px 60px 30px palevioletred;\n    -webkit-transition: all 0.2s ease-in;\n    transition: all 0.2s ease-in;\n    opacity: 1.0;\n}\n\n.mat-card-image{\n    height: 200px;\n}\n\n.mat-card-title{\n    -webkit-box-pack: left;\n            justify-content: left;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n.container {\n    max-width: 1980px;\n}\n\n.grid-row {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row wrap;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS1kaXNwbGF5L2dhbWUtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUdsQixvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksY0FBYztFQUNoQjs7QUFFRjtFQUNFLCtIQUErSDtFQUMvSCxvQkFBb0I7RUFDcEIsK0JBQStCO0VBQy9CLDJDQUEyQztFQUczQyxvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCOztBQUVGO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsMEJBQTBCO0lBRzFCLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHlCQUE4QjtZQUE5Qiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCwyQ0FBMkM7SUFHM0Msb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHNCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsc0VBQXNFO0FBQzFFOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUNFO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsOEJBQTZCO1lBQTdCLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2dhbWUtZGlzcGxheS9nYW1lLWRpc3BsYXkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZ2VidXR0b25zIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBjb2xvcjogcGx1bTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIGJvcmRlcjogMDtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuLmFnZWJ1dHRvbnM6dmlzaXRlZCwgYTpsaW5rIHtcbiAgICBjb2xvcjogIzMzNDk1MztcbiAgfVxuXG4uYWdlYnV0dG9uczpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vZ2l0aHViLmNvbS9yb25kNTU2L1Jvc3lHYW1pbmdHbGFzc2VzRnJvbnRFbmQvYmxvYi9kZXYvc3JjL2Fzc2V0cy9IZWFydHMlMjBmYWxsaW5nLmdpZj9yYXc9dHJ1ZVwiKTtcbiAgY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gIHRleHQtc2hhZG93OjEwcHggMTBweCAzMHB4IHBsdW07XG4gIGJveC1zaGFkb3c6IDBweCAwcHggNjBweCAzMHB4IHBhbGV2aW9sZXRyZWQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICB9XG5cbi5nYW1lY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IGdyZXk7XG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmdhbWVjYXJkOmhvdmVyIHtcbiAgICB3aWR0aDozNTVweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDYwcHggMzBweCBwYWxldmlvbGV0cmVkO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDEuMDtcbn1cblxuLm1hdC1jYXJkLWltYWdle1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAxOTgwcHg7XG59XG4gIC5ncmlkLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/game-display/game-display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/game-display/game-display.component.ts ***!
  \********************************************************/
/*! exports provided: GameDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDisplayComponent", function() { return GameDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _gamemodal_gamemodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gamemodal/gamemodal.component */ "./src/app/gamemodal/gamemodal.component.ts");
/* harmony import */ var _services_gamemodal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gamemodal.service */ "./src/app/services/gamemodal.service.ts");
/* harmony import */ var _services_apicall_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apicall.service */ "./src/app/services/apicall.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");








let GameDisplayComponent = class GameDisplayComponent {
    constructor(http, apicall, authService, modalService, gameModalService) {
        this.http = http;
        this.apicall = apicall;
        this.authService = authService;
        this.modalService = modalService;
        this.gameModalService = gameModalService;
        this.apicall.getGames(this.authService.getBirthyear()).subscribe(games => this.games = games['results']);
    }
    ngOnInit() {
        this.birthyear = this.authService.getBirthyear();
    }
    changeAge(year) {
        this.apicall.getGames(year).subscribe(games => this.games = games['results']);
    }
    open(gameId) {
        this.gameModalService.setGameId(gameId);
        this.modalService.open(_gamemodal_gamemodal_component__WEBPACK_IMPORTED_MODULE_4__["GamemodalComponent"]);
    }
};
GameDisplayComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_apicall_service__WEBPACK_IMPORTED_MODULE_6__["ApicallService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: _services_gamemodal_service__WEBPACK_IMPORTED_MODULE_5__["GamemodalService"] }
];
GameDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game-display/game-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-display.component.css */ "./src/app/game-display/game-display.component.css")).default]
    })
], GameDisplayComponent);



/***/ }),

/***/ "./src/app/gamemodal/gamemodal.component.css":
/*!***************************************************!*\
  !*** ./src/app/gamemodal/gamemodal.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gameModal{\n    background-color: pink;\n    border-radius: 25px;\n    border-style: solid;\n    border-color: palevioletred;\n}\n\n.modal-footer{\n    font-size: x-small;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    text-align: right;\n}\n\n#headerImage{\n    width: 80%;\n}\n\n#similarGameImage{\n    width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZW1vZGFsL2dhbWVtb2RhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNFQUFzRTtJQUN0RSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9nYW1lbW9kYWwvZ2FtZW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FtZU1vZGFse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogcGFsZXZpb2xldHJlZDtcbn1cblxuLm1vZGFsLWZvb3RlcntcbiAgICBmb250LXNpemU6IHgtc21hbGw7XG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI2hlYWRlckltYWdle1xuICAgIHdpZHRoOiA4MCU7XG59XG5cbiNzaW1pbGFyR2FtZUltYWdle1xuICAgIHdpZHRoOiA4MCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/gamemodal/gamemodal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/gamemodal/gamemodal.component.ts ***!
  \**************************************************/
/*! exports provided: GamemodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamemodalComponent", function() { return GamemodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _services_gamemodal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/gamemodal.service */ "./src/app/services/gamemodal.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var GamemodalComponent_1;





let GamemodalComponent = GamemodalComponent_1 = class GamemodalComponent {
    constructor(gameModal, gameModalService, http, modalService) {
        this.gameModal = gameModal;
        this.gameModalService = gameModalService;
        this.http = http;
        this.modalService = modalService;
        this.gameModalService.getGame(gameModalService.getGameId()).subscribe(game => this.game = game);
        this.gameModalService.getSimilarGames(gameModalService.getGameId()).subscribe(games => this.similarGames = games['results']);
    }
    ngOnInit() {
    }
    open(gameId) {
        this.gameModalService.setGameId(gameId);
        this.modalService.open(GamemodalComponent_1);
    }
    close() {
        this.modalService.dismissAll();
    }
};
GamemodalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_gamemodal_service__WEBPACK_IMPORTED_MODULE_3__["GamemodalService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
];
GamemodalComponent = GamemodalComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gamemodal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gamemodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/gamemodal/gamemodal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gamemodal.component.css */ "./src/app/gamemodal/gamemodal.component.css")).default]
    })
], GamemodalComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#homebox{\n    width: 500px;\n    margin-top: 10%;\n    border-style: solid;\n    border-color: palevioletred;\n    background-color: pink;\n    border-radius: 25px;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\nh2{\n    color: white;\n    font-weight: bolder;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lYm94e1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMCU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmgye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let HomeComponent = class HomeComponent {
    constructor(authService, forms, router) {
        this.authService = authService;
        this.forms = forms;
        this.router = router;
    }
    ngOnInit() {
    }
    logout() {
        this.authService.logout();
        this.router.navigateByUrl('/login');
    }
    storeBirthyear(year) {
        this.authService.setBirthyear(year);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);\n\n\n.login {\n  width: 400px;\n  margin: 150px auto;\n  font-size: 16px;\n  border-radius: 10px;\n  background-position: center;\n  background-size: cover;\n  padding: 12px;\n  opacity: .5;\n}\n\n\n.login-header,\n.login p {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n\n.login-triangle {\n  width: 0;\n  margin-right: auto;\n  margin-left: auto;\n  border: 12px solid transparent;\n  border-bottom-color: rgb(15, 66, 107);\n}\n\n\n.login-header {\n  border-radius: 10px;\n  background:pink;\n  padding: 20px;\n  font-size: 1.4em;\n  font-weight: normal;\n  text-align: center;\n  text-transform: uppercase;\n  color: #fff;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n\n.login p {\n  padding: 12px;\n}\n\n\n.login input {\n  box-sizing: border-box;\n  display: block;\n  width: 100%;\n  border-width: 1px;\n  border-style: solid;\n  padding: 16px;\n  outline: 0;\n  font-family: inherit;\n  font-size: 0.95em;\n}\n\n\n.login input[type=\"email\"],\n.login input[type=\"password\"] {\n  background: #fff;\n  border-color: #bbb;\n  color: #555;\n}\n\n\n.login input[type=\"email\"]:focus,\n.login input[type=\"password\"]:focus {\n  border-color: #888;\n}\n\n\n.login input[type=\"submit\"] {\n  background: rgb(1, 29, 51);\n  border-color: transparent;\n  color: #fff;\n  cursor: pointer;\n  opacity: .5;\n}\n\n\n.login input[type=\"submit\"]:hover {\n  background: #17c;\n  opacity: 1.0;\n}\n\n\n.login input[type=\"submit\"]:focus {\n  border-color: #05a;\n}\n\n\n.has-error input[type=\"email\"],\n.has-error input[type=\"password\"] {\n    border-color: rgb(216, 12, 12);\n    color: rgb(230, 14, 14);\n}\n\n\n.textbox{\n  opacity: .5;\n}\n\n\n.textbox:hover{\n  opacity:1.0;\n}\n\n\n.registerbutton{\n  text-align: center;\n  padding: 5px;\n  background: rgb(1, 29, 51);\n  border-color: transparent;\n  color: whitesmoke;\n  cursor: pointer;\n  opacity: 50%;\n}\n\n\n.registerbutton:hover{\n  background: #17c;\n  opacity: 1.0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzRUFBc0U7OztBQUd0RTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixXQUFXO0FBQ2I7OztBQUVBOztFQUVFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLHFDQUFxQztBQUN2Qzs7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7OztBQUlBO0VBQ0UsYUFBYTtBQUNmOzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COzs7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7OztBQUVBOztJQUVJLDhCQUE4QjtJQUM5Qix1QkFBdUI7QUFDM0I7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDApO1xuXG5cbi5sb2dpbiB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luOiAxNTBweCBhdXRvO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogMTJweDtcbiAgb3BhY2l0eTogLjU7XG59XG5cbi5sb2dpbi1oZWFkZXIsXG4ubG9naW4gcCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sb2dpbi10cmlhbmdsZSB7XG4gIHdpZHRoOiAwO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBib3JkZXI6IDEycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigxNSwgNjYsIDEwNyk7XG59XG5cbi5sb2dpbi1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOnBpbms7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cblxuLmxvZ2luIHAge1xuICBwYWRkaW5nOiAxMnB4O1xufVxuXG4ubG9naW4gaW5wdXQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdXRsaW5lOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjk1ZW07XG59XG5cbi5sb2dpbiBpbnB1dFt0eXBlPVwiZW1haWxcIl0sXG4ubG9naW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xuICBjb2xvcjogIzU1NTtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9XCJlbWFpbFwiXTpmb2N1cyxcbi5sb2dpbiBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM4ODg7XG59XG5cbi5sb2dpbiBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgYmFja2dyb3VuZDogcmdiKDEsIDI5LCA1MSk7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IC41O1xufVxuXG4ubG9naW4gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxN2M7XG4gIG9wYWNpdHk6IDEuMDtcbn1cblxuLmxvZ2luIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMwNWE7XG59XG5cbi5oYXMtZXJyb3IgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxuLmhhcy1lcnJvciBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0ge1xuICAgIGJvcmRlci1jb2xvcjogcmdiKDIxNiwgMTIsIDEyKTtcbiAgICBjb2xvcjogcmdiKDIzMCwgMTQsIDE0KTtcbn1cblxuLnRleHRib3h7XG4gIG9wYWNpdHk6IC41O1xufVxuLnRleHRib3g6aG92ZXJ7XG4gIG9wYWNpdHk6MS4wO1xufVxuXG4ucmVnaXN0ZXJidXR0b257XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2IoMSwgMjksIDUxKTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogNTAlO1xufVxuXG4ucmVnaXN0ZXJidXR0b246aG92ZXJ7XG4gIGJhY2tncm91bmQ6ICMxN2M7XG4gIG9wYWNpdHk6IDEuMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, router, formBuilder) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.isSubmitted = false;
        this.images = ['https://media.giphy.com/media/AuIu79zI80VVe/giphy.gif',
            'https://media.giphy.com/media/BrV5mGUrn5Li/giphy.gif',
            'https://media.giphy.com/media/kCug4YeBhzxrq/giphy.gif',
            'https://media.giphy.com/media/10H2lNJsW1lOHC/giphy.gif',
            'https://media.giphy.com/media/yiQFNwgSBg7As/giphy.gif',
            'https://media.giphy.com/media/TSKCDXGSBDJks/giphy.gif',
            'https://media.giphy.com/media/RRef9mlH6YiKQ/giphy.gif',
            'https://media.giphy.com/media/BS5dtZMwxWRTq/giphy.gif',
            'https://media.giphy.com/media/AO5qaphTxRnyw/giphy.gif',
            'https://media.giphy.com/media/1ZuJaGQR7sGc9zL8Hh/giphy.gif',
            'https://media.giphy.com/media/zF9gqOiTb95bW/giphy.gif',
            'https://media.giphy.com/media/xRNpHfgk9OeUU/giphy.gif',
            'https://media.giphy.com/media/qzDJ06BW5OQCY/giphy.gif',
            'https://media.giphy.com/media/jFYBRC7NzGrNS/giphy.gif',
            'https://media.giphy.com/media/eRfpAFGHAfcXu/giphy.gif',
            'https://media.giphy.com/media/REgFJcnd2n21O/giphy.gif',
            'https://media.giphy.com/media/DpXqHdILXRRDi/giphy.gif',
            'https://media.giphy.com/media/i5dDJz6oQHFD2/giphy.gif',
            'https://media.giphy.com/media/h7U5kvQ7Lwzok/giphy.gif',
            'https://media.giphy.com/media/98STDd3SLagaQ/giphy.gif',
            'https://media.giphy.com/media/TtWC9oazPXiOA/giphy.gif',
            'https://media.giphy.com/media/hldSOLuYpBKus/giphy.gif',
            'https://media.giphy.com/media/EHbUWNDChZBw4/giphy.gif',
            'https://media.giphy.com/media/nhl3WoySrHVRK/giphy.gif',
            'https://media.giphy.com/media/a6e24oTqeSjcs/giphy.gif',
            'https://media.giphy.com/media/D1iDxmIGxUnzq/giphy.gif',
            'https://media.giphy.com/media/vmZ11AetEXR6M/giphy.gif',
            'https://media.giphy.com/media/1dTuqX7kVCwdW/giphy.gif',
            'https://media.giphy.com/media/5yUO10BpJ5JLy/giphy.gif',
            'https://media.giphy.com/media/jplF48QI3L3Ec/giphy.gif',
            'https://media.giphy.com/media/xUNd9IjAp7XhuwHRao/giphy.gif',
            'https://media.giphy.com/media/txcIHRNl2vcDm/giphy.gif',
            'https://media.giphy.com/media/asRx7MPFS0SBO/giphy.gif',
            'https://media.giphy.com/media/6UDorPg1oGRQ4/giphy.gif',
            'https://media.giphy.com/media/yiBt9PZKrwg0g/giphy.gif',
            'https://media.giphy.com/media/jneiA7ImMXF6/giphy.gif',
            'https://media.giphy.com/media/3o6EQaAxwqYByiZXIQ/giphy.gif',
            'https://media.giphy.com/media/1vZ6QcjgF2iARTj4BE/giphy.gif',
            'https://media.giphy.com/media/pcKpMur7aAYMCs7WQX/giphy.gif',
            'https://media.giphy.com/media/f4JcszAA6d0c39QeUC/giphy.gif',
            'https://media.giphy.com/media/slvREYowfwgo0/giphy.gif',
            'https://media.giphy.com/media/CYFzxzmE2oDkI/giphy.gif',
            'https://media.giphy.com/media/l11R93B7B4CCA/giphy.gif'];
        this.currentBackground = this.images[Math.floor(Math.random() * this.images.length)];
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        setInterval(() => { this.changeImage(); }, 4000);
    }
    get formControls() { return this.loginForm.controls; }
    login() {
        console.log(this.loginForm.value);
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.authService.login(this.loginForm.value);
        this.router.navigateByUrl('/home');
    }
    changeImage() {
        this.currentBackground = this.images[Math.floor(Math.random() * this.images.length)];
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/apicall.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/apicall.service.ts ***!
  \*********************************************/
/*! exports provided: ApicallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApicallService", function() { return ApicallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApicallService = class ApicallService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.rawg.io/api/games?dates=';
        this.pageSize = '&page_size=40';
    }
    getGames(year) {
        return this.http.get(this.apiUrl + year + '-01-01,' + year + '-12-31' + this.pageSize);
    }
};
ApicallService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApicallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApicallService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthService = class AuthService {
    constructor() { }
    login(userInfo) {
        localStorage.setItem('ACCESS_TOKEN', "access_token");
    }
    isLoggedIn() {
        return localStorage.getItem('ACCESS_TOKEN') !== null;
    }
    logout() {
        localStorage.removeItem('ACCESS_TOKEN');
    }
    getBirthyear() {
        return this.birthyear;
    }
    setBirthyear(birthyear) {
        this.birthyear = birthyear;
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/gamemodal.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/gamemodal.service.ts ***!
  \***********************************************/
/*! exports provided: GamemodalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamemodalService", function() { return GamemodalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GamemodalService = class GamemodalService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.rawg.io/api/games/';
        this.screenshots = '/suggested';
    }
    getGame(gameId) {
        return this.http.get('' + this.apiUrl + gameId);
    }
    getSimilarGames(gameId) {
        return this.http.get('' + this.apiUrl + gameId + this.screenshots);
    }
    getGameId() {
        return this.gameId;
    }
    setGameId(gameId) {
        this.gameId = gameId;
    }
};
GamemodalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GamemodalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GamemodalService);



/***/ }),

/***/ "./src/app/userpage/userpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/userpage/userpage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwYWdlL3VzZXJwYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/userpage/userpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/userpage/userpage.component.ts ***!
  \************************************************/
/*! exports provided: UserpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpageComponent", function() { return UserpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserpageComponent = class UserpageComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/userpage/userpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userpage.component.css */ "./src/app/userpage/userpage.component.css")).default]
    })
], UserpageComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ron/Dev/RosyGamingGlassesFrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map