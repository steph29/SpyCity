"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var app_1 = require("firebase/app");
var environment_1 = require("src/environments/environment");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var AdminComponent = /** @class */ (function () {
    function AdminComponent(httpClient, crud) {
        this.httpClient = httpClient;
        this.crud = crud;
        this.person = {
            type: 'Agent',
            name: 'Pan',
            firstname: 'Peter',
            callsign: 'Hey Peeeteer',
            birthday: '27 / 08 / 1987',
            nationality: 14,
            speciality: 5
        };
        this.missions = [
            { id: 1, mission: 'mission1' },
            { id: 2, mission: 'mission2' },
            { id: 3, mission: 'mission3' },
        ];
        this.agents = [
            { id: 1, agent: 'agent1' },
            { id: 2, agent: 'agent2' },
            { id: 3, agent: 'agent3' },
        ];
    }
    AdminComponent.prototype.ngOnInit = function () { };
    // Sert à lire un agent pour le test
    AdminComponent.prototype.onWrite = function () {
        // Cette fonction doit pouvoir mettre à jour les données sur la mission
        // -> Ouvre une page vers updateMission -> recupere les nouvelles données -> Mettre à jour dans Firebase -> refermer cette fenetre -> mettre à jour
        // l'affichage
    };
    AdminComponent.prototype.onTestClick = function () { };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
