import { AngularTokenService } from 'angular-token';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private tokenService: AngularTokenService) { }

  ngOnInit(): void { }

  googleLogin(): void {
    this.tokenService.signInOAuth('google_oauth2');
  }
}
