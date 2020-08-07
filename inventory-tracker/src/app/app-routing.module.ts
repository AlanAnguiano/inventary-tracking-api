import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OauthCallbackComponentComponent } from './oauth-callback-component/oauth-callback-component.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { LoggedInGuardGuard } from './guards/logged-in-guard.guard';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signout', component: SignoutComponent },
  { path: 'oauth-callback', component: OauthCallbackComponentComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoggedInGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
