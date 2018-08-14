import { Injectable } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { Router } from '../../node_modules/@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule ,private route:Router) { }

 

// canActivate()
//   {
//   
//     }
//   }
  
}

