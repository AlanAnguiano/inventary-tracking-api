import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoogleOauthConfigModule } from './google-oauth-config/google-oauth-config.module';
import { LoggedInGuardGuard } from './guards/logged-in-guard.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OauthCallbackComponentComponent } from './oauth-callback-component/oauth-callback-component.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

function app_init(appService: AppService) {
  return () => appService.initializeApp();
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    OauthCallbackComponentComponent,
    DashboardComponent,
    SignoutComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GoogleOauthConfigModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    AppService,
    { provide: APP_INITIALIZER, useFactory: app_init, deps: [AppService], multi: true },
    LoggedInGuardGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
