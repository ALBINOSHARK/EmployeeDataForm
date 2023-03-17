 import { HttpClient } from '@angular/common/http';
 import { Component } from '@angular/core';

 @Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css']
 })
 export class HomeComponent {
   users: any [] = [];

   constructor(private _httpclient: HttpClient) {
     this._httpclient.get('')
     .subscribe({
       next: (value: any) =>{
         this.users = value['data'];
       },
     })
  }
 }
