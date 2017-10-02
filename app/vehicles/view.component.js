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
var ViewComponent = (function () {
    // cust2: CustomerData;
    function ViewComponent(router, acroute
        // private data:VehicleData,
    ) {
        this.router = router;
        this.acroute = acroute;
        // pageTitle: string = 'Customers List';
        //   products: any[];
        this.fn = '';
        this.ln = '';
        this.vn = '';
        this.mn = null;
        this.add = '';
        this.pd = null;
        this.rd = null;
        this.customers = [];
        //  regList = new Array<VehicleData>();
        // regList :  Array<VehicleData> = [];
        this.custList = new Array();
        // console.log(this.customer);
        // console.log(this.fn);
        // console.log("fjesw");
    }
    ;
    ViewComponent.prototype.ngOnInit = function () {
        // debugger;
        this.cust1 = this.acroute.snapshot.params['vn'];
        // console.log(this.cust1);
        this.customers = JSON.parse(localStorage.getItem("ishita"));
        var J = 0;
        for (var i = 0; i < this.customers.length; i++) {
            if (this.customers[i].vn == this.cust1) {
                J = i;
                break;
            }
        }
        console.log(J);
        // this.cust2 = this.customers[J];
        // console.log(this.cust2);
        this.fn = this.customers[J].fn;
        this.vn = this.customers[J].vn;
        this.ln = this.customers[J].ln;
        this.mn = this.customers[J].mn;
        this.add = this.customers[J].add;
        this.pd = this.customers[J].pd;
        this.rd = this.customers[J].rd;
    };
    // onSubmit(){
    // console.log(this.fn+" "+this.ln+" "+this.vn+" "+this.add+" "+this.pd+" "+this.rd+" "+this.mn);
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
    // this.custs =new CustomerData(this.fn,this.ln
    // , this.vn
    //       , this.mn
    //       ,this.add
    //       , this.pd
    //       , this.rd);
    // }
    // else this.custs = localStorage.getItem("ishita");
    // console.log("--->"+this.custList);
    // this.custList =JSON.parse(localStorage.getItem("ishita"));
    // console.log("-------"+this.custList);
    // console.log(localStorage.getItem("ishita"));
    //    this.regList.push(this.data);
    // this.custList.push(this.custs);
    // console.log(this.custList);
    //  localStorage["ishita"]=JSON.stringify(this.regList);
    // localStorage["ishita"]=JSON.stringify(this.custList);
    // this.router.navigate(['/home']);
    // };
    ViewComponent.prototype.onBack = function () {
        this.router.navigate(['/home']);
    };
    ;
    return ViewComponent;
}());
ViewComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/vehicles/view.component.html'
        // ,    styleUrls: ['app/products/vehicle-list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute
        // private data:VehicleData,
    ])
], ViewComponent);
exports.ViewComponent = ViewComponent;
//# sourceMappingURL=view.component.js.map