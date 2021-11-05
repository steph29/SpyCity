"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.CrudService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var app_1 = require("firebase/app");
var environment_1 = require("src/environments/environment");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var CrudService = /** @class */ (function () {
    function CrudService(httpClient) {
        this.httpClient = httpClient;
        this.persons = [];
        this.personsUpdated = new rxjs_1.Subject();
        this.error = '';
    }
    // Create
    // HttpClient API post() => create Agent
    CrudService.prototype.addAgent = function (type, name, firstname, callsign, birthday, nationalityId, specialityId) {
        var _this = this;
        var person = {
            type: type,
            name: name,
            firstname: firstname,
            callsign: callsign,
            birthday: birthday,
            nationalityId: nationalityId,
            specialityId: specialityId
        };
        this.httpClient
            .post(app.options.databaseURL + '/agent.json', person)
            .subscribe(function (responseDate) {
            console.log(responseDate.message);
            _this.persons.push(person);
            _this.personsUpdated.next(__spreadArrays(_this.persons));
        });
    };
    // Read
    CrudService.prototype.getMission = function () {
        this.httpClient
            .get(app.options.databaseURL + '/agent.json')
            .subscribe(function (data) { });
    };
    CrudService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CrudService);
    return CrudService;
}());
exports.CrudService = CrudService;
