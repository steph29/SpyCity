"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthService = void 0;
var core_1 = require("@angular/core");
var app_1 = require("firebase/app");
var auth_1 = require("firebase/auth");
var environment_1 = require("src/environments/environment");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var auth = auth_1.getAuth(app);
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.email = '';
        this.password = '';
    }
    AuthService.prototype.createNewUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            auth_1.createUserWithEmailAndPassword(auth, email, password)
                .then(function () {
                // signIn
                resolve(auth);
            })["catch"](function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                reject(error);
                // ...
            });
        });
    };
    AuthService.prototype.signInUser = function (email, password) {
        return new Promise(function (resolve, reject) {
            auth_1.signInWithEmailAndPassword(auth, email, password)
                .then(function () {
                var _a;
                // User is connected
                resolve(auth);
                sessionStorage.setItem('auth', JSON.stringify((_a = auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid));
                sessionStorage.getItem('auth');
            })["catch"](function (error) {
                // User isn't connected
                var errorCode = error.code;
                var errorMessage = error.message;
                reject(error);
            });
        });
    };
    AuthService.prototype.onChangeUserState = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            auth_1.onAuthStateChanged(auth, function (user) {
                if (user) {
                    var uid = user.uid;
                    _this.userData = user;
                    sessionStorage.setItem('auth', JSON.stringify(uid));
                    sessionStorage.getItem('auth');
                    // L'utilisateur est connecté -> accès à l'espace admin , changement de la navbar
                    // ...
                }
                else {
                    sessionStorage.setItem('auth', 'null');
                    sessionStorage.getItem('auth');
                    // User is signed out
                    // deconnection -> Retour de la navbar de base, redirection vers la page login
                    // ...
                }
            });
        });
    };
    AuthService.prototype.signOut = function () {
        return new Promise(function (resolve, reject) {
            auth_1.signOut(auth)
                .then(function () {
                // Sign-out successful.
                sessionStorage.removeItem('auth');
                resolve(auth);
            })["catch"](function (error) {
                // An error happened.
                reject(error);
            });
        });
    };
    AuthService.prototype.loggedIn = function () {
        return !!auth.currentUser;
    };
    AuthService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
