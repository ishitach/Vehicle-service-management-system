import { Component, Input, OnInit}  from '@angular/core';
// import {VehicleData} from '../model/VehicleData';
import {Router, ActivatedRoute} from '@angular/router';
import {CustomerData} from '../model/CustomerData';
import {VehicleListComponent} from './vehicle-list.component'


@Component({
    templateUrl: 'app/vehicles/view.component.html'
    // ,    styleUrls: ['app/products/vehicle-list.component.css']
})
export class ViewComponent implements OnInit{
   // pageTitle: string = 'Customers List';
//   products: any[];
fn: string = '';
ln: string = '';
vn: string = '';
mn: number = null;
add: string = '';
pd: Date = null
rd: Date = null;

// @Input() customer  : VehicleListComponent;
cust1 : CustomerData ;

// cust2: CustomerData;
constructor(private router: Router, private acroute: ActivatedRoute
// private data:VehicleData,
){
// console.log(this.customer);
// console.log(this.fn);
// console.log("fjesw");
};

customers: any = [];

ngOnInit(){
    
    // debugger;
this.cust1 = this.acroute.snapshot.params['vn'];
// console.log(this.cust1);


this.customers = JSON.parse(localStorage.getItem("ishita"));
let J: number =0;
for(let i=0;i<this.customers.length;i++){
    if(this.customers[i].vn == this.cust1){
        J=i;
        break;
    }
}
console.log(J);

// this.cust2 = this.customers[J];
// console.log(this.cust2);
this.fn=this.customers[J].fn;
this.vn= this.customers[J].vn;
this.ln = this.customers[J].ln;
this.mn = this.customers[J].mn;
this.add = this.customers[J].add;
this.pd= this.customers[J].pd;
this.rd= this.customers[J].rd;

}

 private custs: CustomerData;
//  regList = new Array<VehicleData>();
// regList :  Array<VehicleData> = [];
custList = new Array<CustomerData>();

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
onBack(){
     this.router.navigate(['/home']);
};

   }
