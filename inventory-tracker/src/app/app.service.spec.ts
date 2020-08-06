import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ANGULAR_TOKEN_OPTIONS, AngularTokenService} from 'angular-token';
import {Observable} from 'rxjs';

describe('AppService', () => {
  let service: AppService;

  describe('When user not logged in', () => {
    beforeEach(() => {
      const mockedTokenService = jasmine.createSpyObj(['userSignedIn']);
      mockedTokenService.userSignedIn.and.returnValue(false);

      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
          { provide: AngularTokenService, useValue: mockedTokenService }
        ]
      });
      service = TestBed.inject(AppService);
    });

    it('should resolve to false', done => {
      service.initializeApp().then(promiseResult => {
        expect(promiseResult).toBeFalse();
        done();
      });
    });
  });

  describe('When user logged in', () => {
    beforeEach(() => {
      const validTokenObservable = new Observable((observer) => {
        observer.next(true);
      });
      const mockedTokenService = jasmine.createSpyObj(['userSignedIn', 'validateToken']);
      mockedTokenService.userSignedIn.and.returnValue(true);
      mockedTokenService.validateToken.and.returnValue(validTokenObservable);

      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
          { provide: AngularTokenService, useValue: mockedTokenService }
        ]
      });
      service = TestBed.inject(AppService);
    });

    it('should resolve into another promise', () => {
      expect(service.initializeApp()).toBeTruthy();
    });
  });
});
