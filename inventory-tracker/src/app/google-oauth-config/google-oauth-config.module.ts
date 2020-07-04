import { AngularTokenModule, AngularTokenOptions } from 'angular-token';
import { environment } from '../../environments/environment';
import { NgModule } from '@angular/core';

const apiBase: string = environment.apiBase;

const googleOAuthConfig: AngularTokenOptions = {
  apiBase,
  oAuthBase: apiBase,
  oAuthPaths: {
    google_oauth2: '/auth/google_oauth2',
  },
  oAuthCallbackPath: 'oauth-callback',
  oAuthWindowType: 'sameWindow',
};

@NgModule({
  declarations: [],
  imports: [
    AngularTokenModule.forRoot(googleOAuthConfig),
  ],
  exports: [AngularTokenModule]
})
export class GoogleOauthConfigModule { }
