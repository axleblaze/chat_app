import { Component, OnInit } from '@angular/core';

import {
  AuthService,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '../../../node_modules/@angular/router';
import { ApiService } from '../api.service';
import { identifierModuleUrl } from '../../../node_modules/@angular/compiler';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private socialAuthService: AuthService, private route: Router, private service: ApiService) { }
  ngOnInit() {
    if(localStorage.getItem('id')!=null){
           this.route.navigate(['/chatapp'])
  }
}
 i;
  //Reference - https://www.npmjs.com/package/angular-6-social-login#install-via-npm

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
   //   var t =this.i =this.service.getData();
    //  t.subscribe(data=>console.log(data))

    }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
         console.log(socialPlatform+" sign in data : " , userData);
        localStorage.setItem("id", userData.id);
        localStorage.setItem("name", userData.name);
        localStorage.setItem("email", userData.email);
        // Now sign-in with userData
        // ...
      //  var res = this.service.getData();
      // res.subscribe(data => console.log(data))

        this.route.navigate(['/chatapp']);
        

      }
     );
  
   
    
    }
 

}
