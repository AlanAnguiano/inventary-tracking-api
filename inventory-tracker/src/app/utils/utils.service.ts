import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UtilsService {
  constructor(private router: Router) { }

  redirectToSignInPage = () => {
    this.router.navigate(['']);
  }

  logError = (error, message= '') => {
    console.log(message, error);
  }
}
