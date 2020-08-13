import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ANGULAR_TOKEN_OPTIONS, AngularTokenService } from 'angular-token';
import { of } from 'rxjs';

import { SignoutComponent } from './signout.component';
import {UtilsService} from '../utils/utils.service';

describe('SignoutComponent', () => {
  let component: SignoutComponent;
  let fixture: ComponentFixture<SignoutComponent>;

  describe('When the user is signed in', () => {
    const mockedTokenService = jasmine.createSpyObj(['userSignedIn', 'signOut']);
    mockedTokenService.userSignedIn.and.returnValue(true);
    mockedTokenService.signOut.and.returnValue(of(true));
    const mockedUtilsService = jasmine.createSpyObj(['redirectToSignInPage']);

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule, RouterTestingModule ],
        declarations: [ SignoutComponent ],
        providers: [
          { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
          { provide: AngularTokenService, useValue: mockedTokenService },
          { provide: UtilsService, useValue: mockedUtilsService }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(SignoutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should signout and then redirect to sign in page', () => {
      expect(mockedTokenService.signOut).toHaveBeenCalled();
      expect(mockedUtilsService.redirectToSignInPage).toHaveBeenCalled();
    });
  });

  describe('When the user is signed out', () => {
    const mockedTokenService = jasmine.createSpyObj(['userSignedIn', 'signOut']);
    mockedTokenService.userSignedIn.and.returnValue(false);
    const mockedUtilsService = jasmine.createSpyObj(['redirectToSignInPage']);

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientTestingModule, RouterTestingModule ],
        declarations: [ SignoutComponent ],
        providers: [
          { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
          { provide: AngularTokenService, useValue: mockedTokenService },
          { provide: UtilsService, useValue: mockedUtilsService }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(SignoutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    }));

    it('should redirect to sign in page', () => {
      expect(mockedUtilsService.redirectToSignInPage).toHaveBeenCalled();
    });
  });
});
