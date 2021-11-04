"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddMissionComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AddMissionComponent = /** @class */ (function () {
    function AddMissionComponent(formBuilder, crud, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.crud = crud;
        this.router = router;
        this.submitted = false;
        this.typePerson = [
            { id: 1, type: 'Agent' },
            { id: 2, type: 'Contact' },
            { id: 3, type: 'Target' },
        ];
        this.addMissionForm = new forms_1.FormGroup({
            type: new forms_1.FormControl(''),
            name: new forms_1.FormControl(''),
            firstname: new forms_1.FormControl(''),
            callsign: new forms_1.FormControl(''),
            birthday: new forms_1.FormControl(''),
            nationality: new forms_1.FormControl(''),
            speciality: new forms_1.FormControl('')
        });
        // Select Dropdown error handling
        this.handleError = function (controlName, errorName) {
            return _this.addMissionForm.controls[controlName].hasError(errorName);
        };
    }
    AddMissionComponent.prototype.ngOnInit = function () {
        var loginForm = this.formBuilder.group({
            type: ['', [forms_1.Validators.required]],
            name: ['', [forms_1.Validators.required]],
            firstname: ['', [forms_1.Validators.required]],
            callsign: ['', [forms_1.Validators.required]],
            birthday: ['', [forms_1.Validators.required]],
            nationality: ['', [forms_1.Validators.required]],
            speciality: ['', [forms_1.Validators.required]]
        });
    };
    AddMissionComponent.prototype.addNewMission = function () {
        var _a, _b, _c, _d, _e, _f, _g;
        this.submitted = true;
        var type = (_a = this.addMissionForm.get('type')) === null || _a === void 0 ? void 0 : _a.value;
        var name = (_b = this.addMissionForm.get('name')) === null || _b === void 0 ? void 0 : _b.value;
        var firstname = (_c = this.addMissionForm.get('firstname')) === null || _c === void 0 ? void 0 : _c.value;
        var callsign = (_d = this.addMissionForm.get('callsign')) === null || _d === void 0 ? void 0 : _d.value;
        var birthday = (_e = this.addMissionForm.get('birthday')) === null || _e === void 0 ? void 0 : _e.value;
        var nationality = (_f = this.addMissionForm.get('nationality')) === null || _f === void 0 ? void 0 : _f.value;
        var speciality = (_g = this.addMissionForm.get('speciality')) === null || _g === void 0 ? void 0 : _g.value;
        this.crud.addAgent(type, name, firstname, callsign, birthday, nationality, speciality);
        this.addMissionForm.reset();
        this.router.navigate(['/admin']);
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