import { TestBed } from '@angular/core/testing';

import { LoggedInGuardGuard } from './logged-in-guard.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {ANGULAR_TOKEN_OPTIONS, AngularTokenService} from 'angular-token';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoggedInGuardGuard', () => {
  let guard: LoggedInGuardGuard;
  const mockedAngularToken = jasmine.createSpyObj(['userSignedIn']);

  describe('When user is logged in', () => {
    beforeEach(() => {
      mockedAngularToken.userSignedIn.and.returnValue(true);

      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          RouterTestingModule
        ],
        providers: [
          { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
          { provide: AngularTokenService, useValue: mockedAngularToken }
        ]
      });
      guard = TestBed.inject(LoggedInGuardGuard);
    });

    it('should be created', () => {
      expect(guard.canActivate()).toBeTrue();
    });
  });
});
