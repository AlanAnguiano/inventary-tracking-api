import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ANGULAR_TOKEN_OPTIONS, AngularTokenService} from 'angular-token';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'inventory-tracker'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('inventory-tracker');
  });

  describe('When user signed out', () => {
    beforeEach(async(() => {
      const mockedTokenService = jasmine.createSpyObj(['userSignedIn']);
      mockedTokenService.userSignedIn.and.returnValue(false);

      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          AppComponent
        ],
        providers: [
          { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
          { provide: AngularTokenService, useValue: mockedTokenService }
        ]
      }).compileComponents();
    }));

    it('should not render user data', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      expect(compiled.querySelector('div.user-data-container col-sm-5')).toBeNull();
    });
  });

  describe('When user signed in', () => {
    beforeEach(async(() => {
      const mockedTokenService = jasmine.createSpyObj(['validateToken', 'userSignedIn']);
      mockedTokenService.userSignedIn.and.returnValue(true);
      mockedTokenService.validateToken.and.returnValue(of({
        data: {
          image: 'https://localhost/user/image',
          name: 'Darth Vader',
        }
      }));

      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientTestingModule
        ],
        declarations: [
          AppComponent
        ],
        providers: [
          { provide: ANGULAR_TOKEN_OPTIONS, useValue: {} },
          { provide: AngularTokenService, useValue: mockedTokenService }
        ]
      }).compileComponents();
    }));

    it('should render user name', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('div.user-actions-container > p').textContent).toContain('Darth Vader');
    });

    it('should render user image', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;
      expect(compiled.querySelector('img.user-image').src).toContain('https://localhost/user/image');
    });
  });
});
