import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
// import {VehicleData} from './model/VehicleData';
import { FormsModule } from '@angular/forms';
import {CustomerData} from './model/CustomerData';
import { RouterModule, Routes } from '@angular/router'; 
 import {RegisterComponent} from './vehicles/register.component';
import { VehicleListComponent } from './vehicles/vehicle-list.component';
import { AppComponent }  from './app.component';
import {ViewComponent} from './vehicles/view.component';

const appRoutes: Routes = [
{ path: 'home', component: VehicleListComponent },

{ path: 'add', component: RegisterComponent },

{ path: 'view/:vn', component: ViewComponent },

{
path: '',
redirectTo: '/home',
pathMatch: 'full'
},
{
path: '**',
redirectTo: '/home',
pathMatch: 'full'
},

]; 

@NgModule({
  imports: [ BrowserModule ,
FormsModule,
  RouterModule.forRoot(appRoutes) 
 ],
 providers:[VehicleListComponent,{provide: APP_BASE_HREF, useValue: '/'},
  // VehicleData,
  // CustomerData
  ],
  declarations: [ AppComponent,VehicleListComponent, RegisterComponent, ViewComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
