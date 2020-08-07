import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { UtilsService } from '../utils/utils.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {
  constructor(private tokenService: AngularTokenService, private utils: UtilsService) { }

  ngOnInit(): void {
    const { redirectToSignInPage, logError } = this.utils;

    if (!this.tokenService.userSignedIn()) { return redirectToSignInPage(); }

    this.tokenService.signOut().subscribe(
      () => redirectToSignInPage(),
      error => logError(error, 'This error has been caught while signing out'),
    );
  }
}
