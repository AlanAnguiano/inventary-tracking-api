import { Component, OnInit } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private tokenService: AngularTokenService) { }

  title = 'Dashboard';

  ngOnInit(): void { }

}
