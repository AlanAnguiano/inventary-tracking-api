import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleOauthConfigModule } from './google-oauth-config/google-oauth-config.module';
import { HttpClientModule } from '@angular/common/http';
import { OauthCallbackComponentComponent } from './oauth-callback-component/oauth-callback-component.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    OauthCallbackComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleOauthConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
