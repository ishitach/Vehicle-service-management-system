import { Component}  from '@angular/core';
import {Router} from '@angular/router';
import {CustomerData} from '../model/CustomerData';
@Component({

    templateUrl: 'app/vehicles/vehicle-list.component.html'
    // ,    styleUrls: ['app/products/vehicle-list.component.css']
})

export class VehicleListComponent{
    pageTitle: string = 'Customers List';
customers: any = [];
    constructor(private router: Router){
        
this.customers = JSON.parse(localStorage.getItem("ishita"));
// console.log(this.customers);
// console.log(JSON.parse(localStorage.getItem("ishita")));     
console.log(this.customers);

    };
   
     onAdd(){
        this.router.navigate(['/add']);
    };

onView(customer: CustomerData){
    console.log(customer);
this.router.navigate(['/view/'+customer.vn]);
};

 onDelete(customer: CustomerData){
localStorage["undo"]=JSON.stringify("delete");
this.customers = JSON.parse(localStorage.getItem("ishita"));
let J: number =0;
for(let i=0;i<this.customers.length;i++){
    if(this.customers[i].vn == customer.vn){
        J=i;
        break;
    }
}

localStorage["undo_obj"]=JSON.stringify(this.customers[J]);

this.customers.splice(J,1);
localStorage["ishita"]=JSON.stringify(this.customers);

console.log(J);
 }

undocust : any =[];
object : any =[];
undo_objs : any =[];
onUndo(){
    //to do 

    if(JSON.parse(localStorage.getItem("undo"))!=""){

if(JSON.parse(localStorage.getItem("undo"))=="delete"){
console.log("deelete undo");
this.undocust = JSON.parse(localStorage.getItem("ishita"));
this.object = JSON.parse(localStorage.getItem("undo_obj"));
this.undocust.push(this.object);
localStorage["ishita"]=JSON.stringify(this.undocust);
location.reload();
// this.router.navigate(["/home"]);
}
else{
    
    console.log("add undo");
this.undocust = JSON.parse(localStorage.getItem("ishita"));
// this.undo_objs = JSON.parse(localStorage.getItem("undo_obj"));
// let J: number =0;
// for(let i=0;i<this.undocust.length;i++){
//     if(this.undocust[i] ==this.undo_objs){
//         J=i;
//         break;
//     }
// }

// this.undocust.splice(J,1);

this.undocust.splice(this.undocust.length-1,1);
localStorage["ishita"]=JSON.stringify(this.undocust);
// this.router.navigate(['/home']);
location.reload();
}
localStorage["undo_obj"]=JSON.stringify("");
localStorage["undo"]=JSON.stringify("");

    }
else{
    alert("can't do undo");
}
}


//   products: any[];
//   products : any = [
//     {
//         "productId": 1,
//         "productName": "Leaf Rake",
//         "productCode": "GDN-0011",
//         "releaseDate": "March 19, 2016",
//         "description": "Leaf rake with 48-inch wooden handle.",
//         "price": 19.95,
//         "starRating": 3.2,
//         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
//     },
//     {
//         "productId": 2,
//         "productName": "Garden Cart",
//         "productCode": "GDN-0023",
//         "releaseDate": "March 18, 2016",
//         "description": "15 gallon capacity rolling garden cart",
//         "price": 32.99,
//         "starRating": 4.2,
//         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
//     },
//     {
//         "productId": 5,
//         "productName": "Hammer",
//         "productCode": "TBX-0048",
//         "releaseDate": "May 21, 2016",
//         "description": "Curved claw steel hammer",
//         "price": 8.9,
//         "starRating": 4.8,
//         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
//     },
//     {
//         "productId": 8,
//         "productName": "Saw",
//         "productCode": "TBX-0022",
//         "releaseDate": "May 15, 2016",
//         "description": "15-inch steel blade hand saw",
//         "price": 11.55,
//         "starRating": 3.7,
//         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
//     },
//     {
//         "productId": 10,
//         "productName": "Video Game Controller",
//         "productCode": "GMG-0042",
//         "releaseDate": "October 15, 2015",
//         "description": "Standard two-button video game controller",
//         "price": 35.95,
//         "starRating": 4.6,
//         "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
//     }
// ];

objs : any =[] ;
//if (localStorage.getItem("ishita")) {
        // this.objs ;
        //  console.log(JSON.parse(localStorage.getItem("ishita")));
        // }
   }
