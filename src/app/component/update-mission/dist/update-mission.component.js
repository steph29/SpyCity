"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateMissionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UpdateMissionComponent = /** @class */ (function () {
    function UpdateMissionComponent(activatedRoute, crud, router) {
        this.activatedRoute = activatedRoute;
        this.crud = crud;
        this.router = router;
        this.id = '';
        this.setOfMission = [[]];
        this.mission = [];
        this.countriesList = [];
        this.targetList = [];
        this.agentList = [];
        this.specialitiesList = [];
        this.contactList = [];
        this.statusList = [];
        this.hideoutsList = [];
        this.typeList = [];
        this.updateMissionForm = new forms_1.FormGroup({
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
    UpdateMissionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crud.getMission();
        this.crud.getUpdateMission().subscribe(function (mission) {
            _this.mission = mission;
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
    UpdateMissionComponent.prototype.getMission = function (data) {
        var _this = this;
        var dataDisplay = [];
        // On recupère l'ID passé en URL
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        var dataArray = [];
        for (var i = 0; i < Object.keys(data).length; i++) {
            if (Object.keys(data)[i] === this.id) {
                var dataMission = Object.values(data)[i];
                dataArray.push(dataMission);
            }
            this.mission = dataArray;
        }
        this.setOfMission = dataArray;
    };
    UpdateMissionComponent.prototype.updateMission = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
        var agent = ((_a = this.updateMissionForm.get('agent')) === null || _a === void 0 ? void 0 : _a.value) === ''
            ? this.mission[0].agent
            : (_b = this.updateMissionForm.get('agent')) === null || _b === void 0 ? void 0 : _b.value;
        var codeName = ((_c = this.updateMissionForm.get('codeName')) === null || _c === void 0 ? void 0 : _c.value) === ''
            ? this.mission[0].codeName
            : (_d = this.updateMissionForm.get('codeName')) === null || _d === void 0 ? void 0 : _d.value;
        var contact = ((_e = this.updateMissionForm.get('contact')) === null || _e === void 0 ? void 0 : _e.value) === ''
            ? this.mission[0].contact
            : (_f = this.updateMissionForm.get('contact')) === null || _f === void 0 ? void 0 : _f.value;
        var country = ((_g = this.updateMissionForm.get('country')) === null || _g === void 0 ? void 0 : _g.value) === ''
            ? this.mission[0].country
            : (_h = this.updateMissionForm.get('country')) === null || _h === void 0 ? void 0 : _h.value;
        var desc = ((_j = this.updateMissionForm.get('desc')) === null || _j === void 0 ? void 0 : _j.value) === ''
            ? this.mission[0].desc
            : (_k = this.updateMissionForm.get('desc')) === null || _k === void 0 ? void 0 : _k.value;
        var endDate = ((_l = this.updateMissionForm.get('endDate')) === null || _l === void 0 ? void 0 : _l.value) === ''
            ? this.mission[0].endDate
            : (_m = this.updateMissionForm.get('endDate')) === null || _m === void 0 ? void 0 : _m.value;
        var hideouts = ((_o = this.updateMissionForm.get('hideouts')) === null || _o === void 0 ? void 0 : _o.value) === ''
            ? this.mission[0].hideouts
            : (_p = this.updateMissionForm.get('hideouts')) === null || _p === void 0 ? void 0 : _p.value;
        var mission = ((_q = this.updateMissionForm.get('mission')) === null || _q === void 0 ? void 0 : _q.value) === ''
            ? this.mission[0].mission
            : (_r = this.updateMissionForm.get('mission')) === null || _r === void 0 ? void 0 : _r.value;
        var specialities = ((_s = this.updateMissionForm.get('specialities')) === null || _s === void 0 ? void 0 : _s.value) === ''
            ? this.mission[0].specialities
            : (_t = this.updateMissionForm.get('specialities')) === null || _t === void 0 ? void 0 : _t.value;
        var startDate = ((_u = this.updateMissionForm.get('startDate')) === null || _u === void 0 ? void 0 : _u.value) === ''
            ? this.mission[0].startDate
            : (_v = this.updateMissionForm.get('startDate')) === null || _v === void 0 ? void 0 : _v.value;
        var status = ((_w = this.updateMissionForm.get('status')) === null || _w === void 0 ? void 0 : _w.value) === ''
            ? this.mission[0].status
            : (_x = this.updateMissionForm.get('status')) === null || _x === void 0 ? void 0 : _x.value;
        var target = ((_y = this.updateMissionForm.get('target')) === null || _y === void 0 ? void 0 : _y.value) === ''
            ? this.mission[0].target
            : (_z = this.updateMissionForm.get('target')) === null || _z === void 0 ? void 0 : _z.value;
        var type = ((_0 = this.updateMissionForm.get('type')) === null || _0 === void 0 ? void 0 : _0.value) === ''
            ? this.mission[0].type
            : (_1 = this.updateMissionForm.get('type')) === null || _1 === void 0 ? void 0 : _1.value;
        this.crud.updateMission(this.id, agent, codeName, contact, country, desc, endDate, hideouts, mission, specialities, startDate, status, target, type);
        this.router.navigate(['/admin']);
    };
    UpdateMissionComponent.prototype.getData = function (document, params, list) {
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
    UpdateMissionComponent = __decorate([
        core_1.Component({
            selector: 'app-update-mission',
            templateUrl: './update-mission.component.html',
            styleUrls: ['./update-mission.component.css']
        })
    ], UpdateMissionComponent);
    return UpdateMissionComponent;
}());
exports.UpdateMissionComponent = UpdateMissionComponent;
