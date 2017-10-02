"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
// import {VehicleData} from './model/VehicleData';
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var register_component_1 = require("./vehicles/register.component");
var vehicle_list_component_1 = require("./vehicles/vehicle-list.component");
var app_component_1 = require("./app.component");
var view_component_1 = require("./vehicles/view.component");
var appRoutes = [
    { path: 'home', component: vehicle_list_component_1.VehicleListComponent },
    { path: 'add', component: register_component_1.RegisterComponent },
    { path: 'view/:vn', component: view_component_1.ViewComponent },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes)
        ],
        providers: [vehicle_list_component_1.VehicleListComponent, { provide: common_1.APP_BASE_HREF, useValue: '/' },
        ],
        declarations: [app_component_1.AppComponent, vehicle_list_component_1.VehicleListComponent, register_component_1.RegisterComponent, view_component_1.ViewComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map