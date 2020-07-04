import { Component, OnInit } from '@angular/core';
import {AngularTokenService} from 'angular-token';

@Component({
  selector: 'app-oauth-callback-component',
  template: '',
  styleUrls: ['./oauth-callback-component.component.scss']
})
export class OauthCallbackComponentComponent implements OnInit {
  constructor(private tokenService: AngularTokenService) { }

  ngOnInit(): void {
    this.tokenService.processOAuthCallback();
  }
}
