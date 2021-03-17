import {CommonModule} from '@angular/common';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {SharedModule} from 'src/app/modules/shared/shared.module';
import {RestApiService} from 'src/app/services/utilities/restapi.service';
import {TokenService} from 'src/app/services/utilities/token.service';
import {AuthRoutingModule} from '../../auth-routing.module';

import {LoginComponent} from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [SharedModule, AuthRoutingModule, CommonModule],
      providers: [TokenService, RestApiService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
