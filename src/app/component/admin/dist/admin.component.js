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
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var AdminComponent = /** @class */ (function () {
    function AdminComponent(crud, router) {
        this.crud = crud;
        this.router = router;
        this.missions = [];
        this.agents = [];
        this.visited = new Date();
        this.agentSub = rxjs_1.Subscription;
        this.countriesList = [];
        this.targetList = [];
        this.agentList = [];
        this.specialitiesList = [];
        this.contactList = [];
        this.statusList = [];
        this.hideoutsList = [];
        this.typeList = [];
        this.addMissionForm = new forms_1.FormGroup({
            agent: new forms_1.FormControl(''),
            codeName: new forms_1.FormControl(''),
            contact: new forms_1.FormControl(''),
            country: new forms_1.FormControl(''),
            desc: new forms_1.FormControl(''),
            endDate: new forms_1.FormControl(''),
            hideouts: new forms_1.FormControl(''),
            mission: new forms_1.FormControl(''),
            specialities: new forms_1.FormControl(''),
            startDate: new forms_1.FormControl(''),
            status: new forms_1.FormControl(''),
            target: new forms_1.FormControl(''),
            type: new forms_1.FormControl('')
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crud.getAgent();
        this.crud.getUpdateAgent().subscribe(function (agent) {
            _this.agents = agent;
        });
        this.crud.getMission();
        this.crud.getUpdateMission().subscribe(function (mission) {
            _this.missions = mission;
        });
        this.getData('target', 'callsign', this.targetList);
        this.getData('countries', 'name', this.countriesList);
        this.getData('contact', 'callsign', this.contactList);
        this.getData('specialities', 'name', this.specialitiesList);
        this.getData('status', 'state', this.statusList);
        this.getData('agent', 'callsign', this.agentList);
        this.getData('countries', 'capital', this.hideoutsList);
        this.getData('types', 'name', this.typeList);
    };
    AdminComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
    };
    AdminComponent.prototype.initAgent = function (data) {
        var dataDisplay = [];
        Object.keys(data).map(function (e) {
            var agents = { id: e, agent: data[e]['callsign'] };
            dataDisplay.push(agents);
        });
        this.agents = dataDisplay;
    };
    AdminComponent.prototype.initMission = function (data) {
        var dataDisplay = [];
        Object.keys(data).map(function (e) {
            var missions = { id: e, mission: data[e]['codeName'] };
            dataDisplay.push(missions);
        });
        this.missions = dataDisplay;
    };
    AdminComponent.prototype.addNewMission = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var agent = (_a = this.addMissionForm.get('agent')) === null || _a === void 0 ? void 0 : _a.value;
        var codeName = (_b = this.addMissionForm.get('codeName')) === null || _b === void 0 ? void 0 : _b.value;
        var contact = (_c = this.addMissionForm.get('contact')) === null || _c === void 0 ? void 0 : _c.value;
        var country = (_d = this.addMissionForm.get('country')) === null || _d === void 0 ? void 0 : _d.value;
        var desc = (_e = this.addMissionForm.get('desc')) === null || _e === void 0 ? void 0 : _e.value;
        var endDate = (_f = this.addMissionForm.get('endDate')) === null || _f === void 0 ? void 0 : _f.value;
        var hideouts = (_g = this.addMissionForm.get('hideouts')) === null || _g === void 0 ? void 0 : _g.value;
        var mission = (_h = this.addMissionForm.get('mission')) === null || _h === void 0 ? void 0 : _h.value;
        var specialities = (_j = this.addMissionForm.get('specialities')) === null || _j === void 0 ? void 0 : _j.value;
        var startDate = (_k = this.addMissionForm.get('startDate')) === null || _k === void 0 ? void 0 : _k.value;
        var status = (_l = this.addMissionForm.get('status')) === null || _l === void 0 ? void 0 : _l.value;
        var target = (_m = this.addMissionForm.get('target')) === null || _m === void 0 ? void 0 : _m.value;
        var type = (_o = this.addMissionForm.get('type')) === null || _o === void 0 ? void 0 : _o.value;
        this.crud.addMission(agent, codeName, contact, country, desc, endDate, hideouts, mission, specialities, startDate, status, target, type);
        this.addMissionForm.reset();
        this.router.navigate(['/admin']);
    };
    AdminComponent.prototype.getData = function (document, params, list) {
        return this.crud.getDocument(document).subscribe(function (data) {
            Object.keys(data).map(function (e) {
                var subArray = {
                    id: e,
                    item: data[e][params]
                };
                list.push(subArray);
            });
        });
    };
    AdminComponent.prototype["delete"] = function (id) {
        this.crud.deleteAgent(id);
    };
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
