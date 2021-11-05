"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./component/header/header.component");
var footer_component_1 = require("./component/footer/footer.component");
var home_component_1 = require("./component/home/home.component");
var login_component_1 = require("./component/login/login.component");
var register_component_1 = require("./component/register/register.component");
var contact_component_1 = require("./component/contact/contact.component");
var admin_component_1 = require("./component/admin/admin.component");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var auth_guard_service_1 = require("./services/auth-guard.service");
var auth_service_1 = require("./services/auth.service");
var error_component_1 = require("./component/error/error.component");
var routes_guard_guard_1 = require("./routes-guard.guard");
var logout_component_1 = require("./component/logout/logout.component");
var add_agent_component_1 = require("./component/add-agent/add-agent.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                contact_component_1.ContactComponent,
                admin_component_1.AdminComponent,
                error_component_1.ErrorComponent,
                logout_component_1.LogoutComponent,
                add_agent_component_1.AddAgentComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
            ],
            providers: [auth_service_1.AuthService, auth_guard_service_1.AuthGuardService, routes_guard_guard_1.RoutesGuardGuard],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
