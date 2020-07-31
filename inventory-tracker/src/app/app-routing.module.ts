import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { OauthCallbackComponentComponent } from './oauth-callback-component/oauth-callback-component.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'oauth-callback', component: OauthCallbackComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
