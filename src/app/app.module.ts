import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ RouterModule , Routes } from '@angular/router' 
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { ChatappComponent } from './chatapp/chatapp.component';
import { HttpModule } from '@angular/http'
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login";
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component'

const routs:Routes =[
  {
    path :'' , component:SigninComponent , //canActivate:[AuthService]
  },
  {
    path:'chatapp' , component: ChatappComponent 
    , canActivate:[ApiService]

  },
  {
    
    path:'**' , component:NotfoundComponent
}
]





//Reference -https://www.npmjs.com/package/angular-6-social-login#install-via-npm




export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("99591231599-fueje47g9hv2lad74m8ti2rkpv40b2o7.apps.googleusercontent.com")
        },
          
      ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ChatappComponent,
    NotfoundComponent 
  ],
  imports: [
    BrowserModule, SocialLoginModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routs),
    FormsModule
  ],
  providers: [ApiService,AuthService,
    {  provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
