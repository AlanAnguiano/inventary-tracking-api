import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ANGULAR_TOKEN_OPTIONS } from 'angular-token';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        SigninComponent
      ],
      providers: [
        { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render login button', () => {
    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('button.login-button')).toBeTruthy();
  });
});
