import { TestBed } from '@angular/core/testing';

import { UtilsService } from './utils.service';
import { Router } from '@angular/router';

describe('UtilsService', () => {
  let service: UtilsService;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    });
    service = TestBed.inject(UtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('redirectToSignInPage', () => {
    it('should redirect to signin page', () => {
      service.redirectToSignInPage();
      expect(routerSpy.navigate).toHaveBeenCalledWith(['']);
    });
  });

  describe('logError', () => {
    it('should log the error', () => {
      console.log = jasmine.createSpy('log');

      service.logError('BadError', 'My Message');
      expect(console.log).toHaveBeenCalledWith('My Message', 'BadError');
    });
  });
});
