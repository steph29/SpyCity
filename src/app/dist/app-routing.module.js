"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var add_agent_component_1 = require("./component/add-agent/add-agent.component");
var admin_component_1 = require("./component/admin/admin.component");
var contact_component_1 = require("./component/contact/contact.component");
var error_component_1 = require("./component/error/error.component");
var home_component_1 = require("./component/home/home.component");
var login_component_1 = require("./component/login/login.component");
var logout_component_1 = require("./component/logout/logout.component");
var register_component_1 = require("./component/register/register.component");
var routes_guard_guard_1 = require("./routes-guard.guard");
var routes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'addAgent',
        component: add_agent_component_1.AddAgentComponent
    },
    {
        path: 'admin',
        component: admin_component_1.AdminComponent,
        canActivate: [routes_guard_guard_1.RoutesGuardGuard]
    },
    {
        path: '404',
        component: error_component_1.ErrorComponent
    },
    {
        path: '',
        pathMatch: 'full',
        component: home_component_1.HomeComponent
    },
    {
        path: '**',
        redirectTo: '404'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
