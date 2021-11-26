"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateAgentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_1 = require("firebase/app");
var environment_1 = require("src/environments/environment");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var UpdateAgentComponent = /** @class */ (function () {
    function UpdateAgentComponent(crud, router, activatedRoute) {
        var _this = this;
        this.crud = crud;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.id = '';
        this.submitted = false;
        this.agent = [];
        this.updatePersonForm = new forms_1.FormGroup({
            type: new forms_1.FormControl(''),
            lname: new forms_1.FormControl(''),
            fname: new forms_1.FormControl(''),
            callsign: new forms_1.FormControl(''),
            birthday: new forms_1.FormControl(''),
            nationalityId: new forms_1.FormControl(''),
            specialities: new forms_1.FormControl('')
        });
        // Select Dropdown error handling
        this.handleError = function (controlName, errorName) {
            return _this.updatePersonForm.controls[controlName].hasError(errorName);
        };
    }
    UpdateAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.crud.getAgent();
        this.crud.getUpdateAgent().subscribe(function (agent) {
            _this.getAgents(agent);
            var array = [];
            for (var i = 0; i < Object.values(agent).length; i++) {
                if (_this.id === Object.values(agent)[i].id) {
                    var agentOne = Object.values(agent)[i];
                    array.push(agentOne);
                }
                _this.agent = array;
            }
            var otherArray = [];
            _this.agent.map(function (e) {
                var identity = {
                    id: e.id,
                    callsign: e.callsign
                };
                otherArray.push(identity);
            });
            _this.agent = otherArray;
        });
    };
    // Recuperation de tout les agents en vu de comparer les id
    UpdateAgentComponent.prototype.getAgents = function (data) {
        var _this = this;
        // On recupère l'ID passé en URL
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        var dataDisplay = [];
        for (var i = 0; i < Object.keys(data).length; i++) {
            if (Object.keys(data)[i] === this.id) {
                var dataAgent = Object.values(data)[i];
                dataDisplay.push(dataAgent);
            }
            this.agent = dataDisplay;
        }
    };
    // Update agent en fct des valeurs envoyées
    UpdateAgentComponent.prototype.updatePerson = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var type = this.agent[0].type;
        var lname = ((_a = this.updatePersonForm.get('lname')) === null || _a === void 0 ? void 0 : _a.value) === ''
            ? this.agent[0].lname
            : (_b = this.updatePersonForm.get('lname')) === null || _b === void 0 ? void 0 : _b.value;
        var fname = ((_c = this.updatePersonForm.get('fname')) === null || _c === void 0 ? void 0 : _c.value) === ''
            ? this.agent[0].fname
            : (_d = this.updatePersonForm.get('fname')) === null || _d === void 0 ? void 0 : _d.value;
        var callsign = ((_e = this.updatePersonForm.get('callsign')) === null || _e === void 0 ? void 0 : _e.value) === ''
            ? this.agent[0].callsign
            : (_f = this.updatePersonForm.get('callsign')) === null || _f === void 0 ? void 0 : _f.value;
        var birthday = ((_g = this.updatePersonForm.get('birthday')) === null || _g === void 0 ? void 0 : _g.value) === ''
            ? this.agent[0].birthday
            : (_h = this.updatePersonForm.get('birthday')) === null || _h === void 0 ? void 0 : _h.value;
        var nationalityId = ((_j = this.updatePersonForm.get('nationalityId')) === null || _j === void 0 ? void 0 : _j.value) === ''
            ? this.agent[0].nationalityId
            : (_k = this.updatePersonForm.get('nationalityId')) === null || _k === void 0 ? void 0 : _k.value;
        var specialities = ((_l = this.updatePersonForm.get('specialities')) === null || _l === void 0 ? void 0 : _l.value) === ''
            ? this.agent[0].specialities
            : (_m = this.updatePersonForm.get('specialities')) === null || _m === void 0 ? void 0 : _m.value;
        this.crud.updateAgent(this.id, type, lname, fname, callsign, birthday, nationalityId, specialities);
        this.router.navigate(['/admin']);
    };
    UpdateAgentComponent = __decorate([
        core_1.Component({
            selector: 'app-update-agent',
            templateUrl: './update-agent.component.html',
            styleUrls: ['./update-agent.component.css']
        })
    ], UpdateAgentComponent);
    return UpdateAgentComponent;
}());
exports.UpdateAgentComponent = UpdateAgentComponent;
