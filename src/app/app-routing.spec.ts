import {Location} from '@angular/common';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Router} from '@angular/router';
import {
  RouterTestingModule,
  SpyNgModuleFactoryLoader,
} from '@angular/router/testing';
import {routes} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from './modules/auth/auth.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {SharedModule} from './modules/shared/shared.module';

describe('AppRouting', () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        SharedModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
      declarations: [AppComponent],
      providers: [SpyNgModuleFactoryLoader],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('fakeAsync works', fakeAsync(() => {
    let promise = new Promise((resolve) => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('Navigate to "" redirect you to /home', fakeAsync(() => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe('/home');
    });
    flush();
  }));

  /* Test case to load HomeComponent if url is /home */
  it('Should navigate to /home', fakeAsync(() => {
    router.navigateByUrl('/home').then(() => {
      expect(location.path()).toBe('/home');
    });
    flush();
  }));

  /* Testing loading of /auth/login */
  it('Should navigate to /auth/login', fakeAsync(() => {
    const loader = TestBed.inject(SpyNgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: AuthModule};
    router.resetConfig([
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((auth) => auth.AuthModule),
      },
    ]);
    router.navigateByUrl('/auth/login');
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/auth/login');
    flush();
  }));

  /* Test case for loading /auth/register */
  it('Should navigate to /auth/register url ', fakeAsync(() => {
    const loader = TestBed.inject(SpyNgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: AuthModule};
    router.resetConfig([
      {
        path: 'auth',
        loadChildren: () =>
          import('./modules/auth/auth.module').then((auth) => auth.AuthModule),
      },
    ]);
    router.navigateByUrl('/auth/register').then(() => {
      expect(location.path()).toBe('/auth/register');
      flush();
    });
  }));

  /* Test case for loading dashboard */
  it('Should navigate to /dashboard url ', fakeAsync(() => {
    const loader = TestBed.inject(SpyNgModuleFactoryLoader);
    loader.stubbedModules = {lazyModule: DashboardModule};
    router.resetConfig([
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (dashboard) => dashboard.DashboardModule
          ),
      },
    ]);
    router.navigateByUrl('/dashboard').then(() => {
      expect(location.path()).toBe('/dashboard');
      flush();
    });
  }));
});
