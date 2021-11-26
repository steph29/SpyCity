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
var http_1 = require("@angular/common/http");
var app_1 = require("firebase/app");
var environment_1 = require("src/environments/environment");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var CrudService = /** @class */ (function () {
    function CrudService(httpClient) {
        this.httpClient = httpClient;
        this.personsSubject = new rxjs_1.Subject();
        this.missionsSubject = new rxjs_1.Subject();
        this.persons = [];
        this.missions = [];
        this.apiurl = 'https://spyfield-b2064-default-rtdb.europe-west1.firebasedatabase.app';
        this.httpOptions = {
            header: new http_1.HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Access-Control-Allow-Methods': 'GET, POST, PUT,DELETE, OPTIONS'
            })
        };
    }
    // **************** AGENT *******************
    // READ
    CrudService.prototype.getAgent = function () {
        var _this = this;
        this.httpClient
            .get(this.apiurl + '/agent.json')
            .pipe(operators_1.map(function (agentData) {
            return Object.keys(agentData).map(function (agent) {
                return {
                    id: agent,
                    type: agentData[agent].type,
                    lname: agentData[agent].lname,
                    fname: agentData[agent].fname,
                    callsign: agentData[agent].callsign,
                    birthday: agentData[agent].birthday,
                    nationalityId: agentData[agent].nationalityId,
                    specialities: agentData[agent].specialities
                };
            });
        }))
            .subscribe(function (transformAgent) {
            _this.persons = transformAgent;
            _this.personsSubject.next(__spreadArrays(_this.persons));
        });
    };
    // CREATE
    CrudService.prototype.addAgent = function (type, lname, fname, callsign, birthday, nationalityId, specialities) {
        var _this = this;
        var person = {
            id: null,
            type: type,
            lname: lname,
            fname: fname,
            callsign: callsign,
            birthday: birthday,
            nationalityId: nationalityId,
            specialities: specialities
        };
        this.httpClient
            .post(this.apiurl + '/' + type + '.json', person)
            .subscribe(function (data) {
            var id = data.id;
            person.id = id;
            _this.persons.push(person);
            _this.personsSubject.next(__spreadArrays(_this.persons));
        });
    };
    // UPDATE
    CrudService.prototype.getUpdateAgent = function () {
        return this.personsSubject.asObservable();
    };
    CrudService.prototype.updateAgent = function (id, type, lname, fname, callsign, birthday, nationalityId, specialities) {
        var _this = this;
        var person = {
            id: null,
            type: type,
            lname: lname,
            fname: fname,
            callsign: callsign,
            birthday: birthday,
            nationalityId: nationalityId,
            specialities: specialities
        };
        this.httpClient
            .patch(this.apiurl + '/agent/' + id + '.json', person)
            .subscribe(function () {
            _this.getUpdateAgent();
            console.log(_this.persons);
            return _this.personsSubject.next(__spreadArrays(_this.persons));
        });
    };
    // DELETE
    CrudService.prototype.deleteAgent = function (id) {
        var _this = this;
        this.httpClient["delete"](this.apiurl + '/agent/' + id + '.json/')
            .subscribe(function () {
            var updateAgent = _this.persons.filter(function (agent) { return agent.id !== id; });
            _this.persons = updateAgent;
            _this.personsSubject.next(__spreadArrays(_this.persons));
        });
    };
    // **************** Missions *******************
    // Create
    CrudService.prototype.addMission = function (agent, codeName, contact, country, desc, endDate, hideouts, mission, specialities, startDate, status, target, type) {
        var _this = this;
        var missionOne = {
            id: null,
            agent: agent,
            codeName: codeName,
            contact: contact,
            country: country,
            desc: desc,
            endDate: endDate,
            hideouts: hideouts,
            mission: mission,
            specialities: specialities,
            startDate: startDate,
            status: status,
            target: target,
            type: type
        };
        return this.httpClient
            .post(this.apiurl + '/missions.json', missionOne)
            .subscribe(function (data) {
            var id = data.id;
            missionOne.id = id;
            _this.missions.push(missionOne);
            _this.missionsSubject.next(__spreadArrays(_this.missions));
        });
    };
    // Read
    CrudService.prototype.getMission = function () {
        var _this = this;
        return this.httpClient
            .get(this.apiurl + '/missions.json')
            .pipe(operators_1.map(function (missionData) {
            return Object.keys(missionData).map(function (missionOne) {
                return {
                    id: missionOne,
                    agent: missionData[missionOne].agent,
                    codeName: missionData[missionOne].codeName,
                    contact: missionData[missionOne].contact,
                    country: missionData[missionOne].number,
                    desc: missionData[missionOne].desc,
                    endDate: missionData[missionOne].endDate,
                    hideouts: missionData[missionOne].hideouts,
                    mission: missionData[missionOne].mission,
                    specialities: missionData[missionOne].specialities,
                    startDate: missionData[missionOne].startDate,
                    status: missionData[missionOne].status,
                    target: missionData[missionOne].target,
                    type: missionData[missionOne].type
                };
            });
        }))
            .subscribe(function (transformMission) {
            _this.missions = transformMission;
            _this.missionsSubject.next(__spreadArrays(_this.missions));
        });
    };
    CrudService.prototype.getUpdateMission = function () {
        return this.missionsSubject.asObservable();
    };
    // Update
    CrudService.prototype.updateMission = function (id, agent, codeName, contact, country, desc, endDate, hideouts, mission, specialities, startDate, status, target, type) {
        var _this = this;
        var missionOne = {
            id: null,
            agent: agent,
            codeName: codeName,
            contact: contact,
            country: country,
            desc: desc,
            endDate: endDate,
            hideouts: hideouts,
            mission: mission,
            specialities: specialities,
            startDate: startDate,
            status: status,
            target: target,
            type: type
        };
        return this.httpClient
            .patch(this.apiurl + '/missions/' + id + '.json', missionOne)
            .subscribe(function () {
            _this.getUpdateMission();
            return _this.missionsSubject.next(__spreadArrays(_this.missions));
        });
    };
    // Delete
    CrudService.prototype.deleteMission = function (id) {
        var _this = this;
        this.httpClient["delete"](this.apiurl + '/missions/' + id + '.json/')
            .subscribe(function () {
            var updateMission = _this.missions.filter(function (mission) { return mission.id !== id; });
            _this.missions = updateMission;
            _this.missionsSubject.next(__spreadArrays(_this.missions));
        });
    };
    // **************** Get Data *******************
    CrudService.prototype.getDocument = function (document) {
        return this.httpClient.get(this.apiurl + '/' + document + '.json');
    };
    CrudService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CrudService);
    return CrudService;
}());
exports.CrudService = CrudService;
