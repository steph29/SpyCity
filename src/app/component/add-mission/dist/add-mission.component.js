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
exports.AddMissionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var app_1 = require("firebase/app");
var environment_1 = require("src/environments/environment");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var AddMissionComponent = /** @class */ (function () {
    function AddMissionComponent(formBuilder, crud, router, auth, httpClient) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.crud = crud;
        this.router = router;
        this.auth = auth;
        this.httpClient = httpClient;
        this.submitted = false;
        this.persons = [];
        this.personsUpdated = new rxjs_1.Subject();
        this.document = '';
        this.typePerson = [
            { id: 1, type: 'agent' },
            { id: 2, type: 'contact' },
            { id: 3, type: 'target' },
        ];
        this.addMissionForm = new forms_1.FormGroup({
            type: new forms_1.FormControl(''),
            name: new forms_1.FormControl(''),
            firstname: new forms_1.FormControl(''),
            callsign: new forms_1.FormControl(''),
            birthday: new forms_1.FormControl(''),
            nationalityId: new forms_1.FormControl(''),
            specialityId: new forms_1.FormControl('')
        });
        // Select Dropdown error handling
        this.handleError = function (controlName, errorName) {
            return _this.addMissionForm.controls[controlName].hasError(errorName);
        };
    }
    AddMissionComponent.prototype.ngOnInit = function () {
        var addMissionForm = this.formBuilder.group({
            type: ['', [forms_1.Validators.required]],
            name: ['', [forms_1.Validators.required]],
            firstname: ['', [forms_1.Validators.required]],
            callsign: ['', [forms_1.Validators.required]],
            birthday: ['', [forms_1.Validators.required]],
            nationalityId: ['', [forms_1.Validators.required]],
            specialityId: ['', [forms_1.Validators.required]]
        });
    };
    AddMissionComponent.prototype.addNewMission = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var type = (_a = this.addMissionForm.get('type')) === null || _a === void 0 ? void 0 : _a.value;
        var name = (_b = this.addMissionForm.get('name')) === null || _b === void 0 ? void 0 : _b.value;
        var firstname = (_c = this.addMissionForm.get('firstname')) === null || _c === void 0 ? void 0 : _c.value;
        var callsign = (_d = this.addMissionForm.get('callsign')) === null || _d === void 0 ? void 0 : _d.value;
        var birthday = (_e = this.addMissionForm.get('birthday')) === null || _e === void 0 ? void 0 : _e.value;
        var nationalityId = (_f = this.addMissionForm.get('nationalityId')) === null || _f === void 0 ? void 0 : _f.value;
        var specialityId = (_g = this.addMissionForm.get('specialityId')) === null || _g === void 0 ? void 0 : _g.value;
        this.addAgent(type, name, firstname, callsign, birthday, nationalityId, specialityId);
        this.addMissionForm.reset();
        this.router.navigate(['/admin']);
    };
    // HttpClient API post() => create Agent
    AddMissionComponent.prototype.addAgent = function (type, name, firstname, callsign, birthday, nationalityId, specialityId) {
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
            .post(app.options.databaseURL + '/' + type + '.json', person)
            .subscribe(function () {
            _this.persons.push(person);
            _this.personsUpdated.next(__spreadArrays(_this.persons));
        });
    };
    AddMissionComponent = __decorate([
        core_1.Component({
            selector: 'app-add-mission',
            templateUrl: './add-mission.component.html',
            styleUrls: ['./add-mission.component.css']
        })
    ], AddMissionComponent);
    return AddMissionComponent;
}());
exports.AddMissionComponent = AddMissionComponent;
