import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularTokenService } from 'angular-token';
import {UtilsService} from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})

export class LoggedInGuardGuard implements CanActivate {
  constructor(private tokenService: AngularTokenService, private utils: UtilsService) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userSignedIn = this.tokenService.userSignedIn();

    if (!userSignedIn) { this.utils.redirectToSignInPage(); }

    return userSignedIn;
  }
}
