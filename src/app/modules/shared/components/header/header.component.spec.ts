import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {
  RouterTestingModule,
  SpyNgModuleFactoryLoader,
} from '@angular/router/testing';
import {
  ComponentFixture,
  inject,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../../../../app-routing.module';

describe('HeaderComponent', () => {
  let location: Location;
  let router: Router;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        MatMenuModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        RxReactiveFormsModule,
        MatSidenavModule,
        MatListModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
      // providers: [{ provide: Router, useValue: mockRouter}]
    }).compileComponents();
  });

  beforeEach(() => {
    location = TestBed.inject(Location);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Login Button] - It should route to login page', () => {
    const loginButtonElement = fixture.debugElement.query(
      By.css('.login-button')
    );
    loginButtonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['auth/login']);
    // const loader = TestBed.inject(SpyNgModuleFactoryLoader);
    // expect(location.path()).toBe('auth/login');
  });

  it(
    'Should navigate to /auth/login',
    waitForAsync(
      inject(
        [Router, Location],
        (routerValue: Router, locationValue: Location) => {
          component.navigateToLogin();
          fixture.detectChanges();
          fixture.whenStable().then(() => {
            expect(locationValue.path()).toEqual('auth/login');
          });
        }
      )
    )
  );
});
