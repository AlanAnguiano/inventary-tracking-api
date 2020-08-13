import { AngularTokenService } from 'angular-token';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oauth-callback-component',
  template: '',
  styleUrls: ['./oauth-callback-component.component.scss']
})
export class OauthCallbackComponentComponent implements OnInit {
  constructor(private tokenService: AngularTokenService, private router: Router) { }

  title = 'Oauth callback';

  ngOnInit(): void {
    this.tokenService.processOAuthCallback();
    this.router.navigate(['dashboard']);
  }
}
