import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GoogleOauthConfigModule } from './google-oauth-config/google-oauth-config.module';
import { HttpClientModule } from '@angular/common/http';
import { OauthCallbackComponentComponent } from './oauth-callback-component/oauth-callback-component.component';
import { SigninComponent } from './signin/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    OauthCallbackComponentComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GoogleOauthConfigModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
