"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import {VehicleData} from '../model/VehicleData';
var router_1 = require("@angular/router");
var CustomerData_1 = require("../model/CustomerData");
var RegisterComponent = (function () {
    function RegisterComponent(router) {
        this.router = router;
        // pageTitle: string = 'Customers List';
        //   products: any[];
        this.fn = '';
        this.ln = '';
        this.vn = '';
        this.mn = null;
        this.add = '';
        this.pd = null;
        this.rd = null;
        //  regList = new Array<VehicleData>();
        // regList :  Array<VehicleData> = [];
        this.custList = new Array();
    }
    ;
    RegisterComponent.prototype.onSubmit = function () {
        console.log("on sub " + this.fn + " " + this.ln + " " + this.vn + " " + this.add + " " + this.pd + " " + this.rd + " " + this.mn);
        // let arr = new Array<VehicleData>();
        //   this.data = new VehicleData(
        //       this.fn
        //   ,this.ln
        //   , this.vn
        //   , this.mn
        //   ,this.add
        //   , this.pd
        //   , this.rd
        //   );
        // if(!localStorage.getItem("ishita")){
        this.custs = new CustomerData_1.CustomerData(this.fn, this.ln, this.vn, this.mn, this.add, this.pd, this.rd);
        // }
        // else this.custs = localStorage.getItem("ishita");
        // console.log("--->"+this.custList);
        if (localStorage.getItem("ishita")) {
            if (JSON.parse(localStorage.getItem("ishita")) != "") {
                this.custList = JSON.parse(localStorage.getItem("ishita"));
                var J = -1;
                for (var i = 0; i < this.custList.length; i++) {
                    if (this.custList[i].vn == this.vn) {
                        J = i;
                        break;
                    }
                }
                if (J > -1) {
                    alert("Vehicle number mustbe unique");
                }
            }
        }
        // else {
        this.custList.push(this.custs);
        console.log(this.custList);
        localStorage["ishita"] = JSON.stringify(this.custList);
        this.router.navigate(['/home']);
        localStorage["undo"] = JSON.stringify("add");
        // }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/vehicles/register.component.html'
        // ,    styleUrls: ['app/products/vehicle-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map