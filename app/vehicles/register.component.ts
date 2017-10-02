import { Component } from '@angular/core';
// import {VehicleData} from '../model/VehicleData';
import { Router } from '@angular/router';
import { CustomerData } from '../model/CustomerData';

@Component({
    templateUrl: 'app/vehicles/register.component.html'
    // ,    styleUrls: ['app/products/vehicle-list.component.css']
})
export class RegisterComponent {
    // pageTitle: string = 'Customers List';
    //   products: any[];
    fn: string = '';
    ln: string = '';
    vn: string = '';
    mn: number = null;
    add: string = '';
    pd: Date = null
    rd: Date = null;

    constructor(private router: Router,
        // private data:VehicleData,
    ) {

    };
    private custs: CustomerData;
    //  regList = new Array<VehicleData>();
    // regList :  Array<VehicleData> = [];
    custList = new Array<CustomerData>();

    onSubmit() {

        console.log("on sub "+this.fn + " " + this.ln + " " + this.vn + " " + this.add + " " + this.pd + " " + this.rd + " " + this.mn);
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
        this.custs = new CustomerData(this.fn, this.ln
            , this.vn
            , this.mn
            , this.add
            , this.pd
            , this.rd);
        // }
        // else this.custs = localStorage.getItem("ishita");

        // console.log("--->"+this.custList);
if(localStorage.getItem("ishita"))
{


        if (JSON.parse(localStorage.getItem("ishita")) != "") {
            this.custList = JSON.parse(localStorage.getItem("ishita"));

            let J: number = -1;
            for (let i = 0; i < this.custList.length; i++) {
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
        

    }

}
