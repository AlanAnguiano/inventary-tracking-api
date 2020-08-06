import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import {UtilsService} from './utils/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inventory-tracker';
  user = {
    image: '',
    name: '',
  };

  constructor(public tokenService: AngularTokenService, private utilsService: UtilsService) { }

  ngOnInit(): void {
    if (!this.tokenService.userSignedIn()) { return; }

    this.tokenService.validateToken().subscribe(
      userData => this.setUserData(userData),
      error => this.utilsService.logError(error, 'This error has occurred when fetching user data'),
    );
  }

  onRouterOutletActivate(event: any): void {
    this.title = event.title;
  }

  setUserData = (userData) => {
    this.user = userData.data;
  }
}
