"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CrudService = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var app_1 = require("firebase/app");
var environment_1 = require("src/environments/environment");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var CrudService = /** @class */ (function () {
    function CrudService(httpClient) {
        this.httpClient = httpClient;
        this.user = [];
        this.error = '';
    }
    // Create
    // HttpClient API post() => create Agent
    CrudService.prototype.createAgent = function () {
        return this.httpClient
            .post(app.options.databaseURL + '/agent.json', JSON.stringify(this.user))
            .pipe(operators_1.retry(1));
    };
    CrudService.prototype.addAgent = function (type, name, firstname, callsign, birthday, nationality, speciality) {
        var person = {
            type: type,
            name: name,
            firstname: firstname,
            callsign: callsign,
            birthday: birthday,
            nationality: nationality,
            speciality: speciality
        };
        this.httpClient
            .post(app.options.databaseURL + '/agent.json', person)
            .subscribe(function (responseDate) {
            console.log(responseDate.message);
        });
    };
    CrudService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CrudService);
    return CrudService;
}());
exports.CrudService = CrudService;
