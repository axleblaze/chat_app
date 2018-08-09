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
import { FormsModule } from '@angular/forms'

const routs:Routes =[
  {
    path :'' , component:SigninComponent
  },
  {
    path:'chatapp' , component: ChatappComponent

  }
]





//Reference -https://www.npmjs.com/package/angular-6-social-login#install-via-npm




export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("99591231599-47tk7f06fiinoo4bfk397ffeaflv8mvk.apps.googleusercontent.com")
        },
          
      ]
  );
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ChatappComponent 
  ],
  imports: [
    BrowserModule, SocialLoginModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(routs),
    FormsModule
  ],
  providers: [ApiService,
    {  provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs}],
  bootstrap: [AppComponent]
})
export class AppModule { }
