import { Injectable, Injector } from '@angular/core';
import { AngularTokenService } from 'angular-token';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private injector: Injector) { }

  initializeApp(): Promise<any> {
    if (!this.injector.get(AngularTokenService).userSignedIn()) { return Promise.resolve(false); }

    return new Promise(((resolve, reject) => {
      this.injector.get(AngularTokenService).validateToken()
        .toPromise()
        .then(res => {
          resolve(true);
        })
        .catch(err => {
          reject(err);
        });
    }));
  }
}
