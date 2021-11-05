"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddAgentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var rxjs_1 = require("rxjs");
var app_1 = require("firebase/app");
var environment_1 = require("src/environments/environment");
var app = app_1.initializeApp(environment_1.environment.firebaseConfig);
var AddAgentComponent = /** @class */ (function () {
    function AddAgentComponent(formBuilder, crud, router, auth, httpClient) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.crud = crud;
        this.router = router;
        this.auth = auth;
        this.httpClient = httpClient;
        this.submitted = false;
        this.persons = [];
        this.personsUpdated = new rxjs_1.Subject();
        this.typePerson = [
            { id: 1, type: 'agent' },
            { id: 2, type: 'contact' },
            { id: 3, type: 'target' },
        ];
        this.addPersonForm = new forms_1.FormGroup({
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
            return _this.addPersonForm.controls[controlName].hasError(errorName);
        };
    }
    AddAgentComponent.prototype.ngOnInit = function () {
        var addPersonForm = this.formBuilder.group({
            type: ['', [forms_1.Validators.required]],
            name: ['', [forms_1.Validators.required]],
            firstname: ['', [forms_1.Validators.required]],
            callsign: ['', [forms_1.Validators.required]],
            birthday: ['', [forms_1.Validators.required]],
            nationalityId: ['', [forms_1.Validators.required]],
            specialityId: ['', [forms_1.Validators.required]]
        });
    };
    AddAgentComponent.prototype.addNewPerson = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        var type = (_a = this.addPersonForm.get('type')) === null || _a === void 0 ? void 0 : _a.value;
        var name = (_b = this.addPersonForm.get('name')) === null || _b === void 0 ? void 0 : _b.value;
        var firstname = (_c = this.addPersonForm.get('firstname')) === null || _c === void 0 ? void 0 : _c.value;
        var callsign = (_d = this.addPersonForm.get('callsign')) === null || _d === void 0 ? void 0 : _d.value;
        var birthday = (_e = this.addPersonForm.get('birthday')) === null || _e === void 0 ? void 0 : _e.value;
        var nationalityId = (_f = this.addPersonForm.get('nationalityId')) === null || _f === void 0 ? void 0 : _f.value;
        var specialityId = (_g = this.addPersonForm.get('specialityId')) === null || _g === void 0 ? void 0 : _g.value;
        this.crud.addAgent(type, name, firstname, callsign, birthday, nationalityId, specialityId);
        this.addPersonForm.reset();
        this.router.navigate(['/admin']);
    };
    AddAgentComponent = __decorate([
        core_1.Component({
            selector: 'app-add-agent',
            templateUrl: './add-agent.component.html',
            styleUrls: ['./add-agent.component.css']
        })
    ], AddAgentComponent);
    return AddAgentComponent;
}());
exports.AddAgentComponent = AddAgentComponent;
