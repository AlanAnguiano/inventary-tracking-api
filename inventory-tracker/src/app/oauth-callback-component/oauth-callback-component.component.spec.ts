import { ActivatedRoute } from '@angular/router';
import { ANGULAR_TOKEN_OPTIONS } from 'angular-token';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

import { OauthCallbackComponentComponent } from './oauth-callback-component.component';

describe('OauthCallbackComponentComponent', () => {
  let component: OauthCallbackComponentComponent;
  let fixture: ComponentFixture<OauthCallbackComponentComponent>;
  let mockActiveRoute;

  beforeEach(async(() => {
    mockActiveRoute = {
      queryParams: of({
        token: 'USER_TOKEN',
        client_id: 'CLIENT_ID',
        expiry: 'EXPIRY',
        uid: 'UID'
      })
    };

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ OauthCallbackComponentComponent ],
      providers: [
        { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
        { provide: ActivatedRoute, useValue: mockActiveRoute }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OauthCallbackComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
