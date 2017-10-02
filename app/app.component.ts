import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
    <h1> {{pageHeading}}</h1>   
    <br>
             <router-outlet></router-outlet>
    `
})
export class AppComponent {
    pageHeading: string = 'Vehicle Service Management';
 }
