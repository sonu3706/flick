import {
  ComponentFixture,
  discardPeriodicTasks,
  fakeAsync,
  flush,
  TestBed,
  tick,
} from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RestApiService } from '../../../../services/utilities/restapi.service';
import { RegisterResponse } from '../../../../models/register-response.model';
import { of, throwError } from 'rxjs';
import { User } from '../../../../models/user.model';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let registerServiceSpy: RestApiService<RegisterResponse>;

  beforeEach(async () => {
    const registerSpyObject = jasmine.createSpyObj('RestApiService', [
      'postData',
    ]);
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        SharedModule,
        RouterTestingModule,
        RxReactiveFormsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: RestApiService, useValue: registerSpyObject }],
    }).compileComponents();
    registerServiceSpy = TestBed.inject(RestApiService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /* Test POST API call */
  it('[Should Pass] - Should trigger POST API call', fakeAsync(() => {
    component.registerFormGroup.controls.email.setValue('chandan@abc.com');
    component.registerFormGroup.controls.name.setValue('Chandan Mishra');
    component.registerFormGroup.controls.password.setValue('12345678');

    const registerResponse: RegisterResponse = new RegisterResponse();
    registerResponse.status = true;
    // @ts-ignore
    registerServiceSpy.postData.and.returnValue(of(registerResponse));
    component.registerApi();

    expect(component.status).toBeTruthy();
    expect(registerServiceSpy.postData).toHaveBeenCalled();
    expect(registerServiceSpy.postData).toHaveBeenCalledWith(
      'http://localhost:8081/api/v1/users',
      '/register',
      getUserObject()
    );

    tick();
    flush();
    discardPeriodicTasks();
  }));

  it('[Should Fail] - Post API call should throw error', fakeAsync(() => {
    component.registerFormGroup.controls.email.setValue('chandan@abc.com');
    component.registerFormGroup.controls.name.setValue('Chandan Mishra');
    component.registerFormGroup.controls.password.setValue('12345678');
    // @ts-ignore
    registerServiceSpy.postData.and.returnValue(throwError('Error'));
    component.registerApi();

    expect(registerServiceSpy.postData).toHaveBeenCalled();
    expect(registerServiceSpy.postData).toHaveBeenCalledWith(
      'http://localhost:8081/api/v1/users',
      '/register',
      getUserObject()
    );

    tick();
    flush();
    discardPeriodicTasks();
  }));
});

/* Private method to construct user object */
function getUserObject(): User {
  const user = new User();
  user.userEmail = 'chandan@abc.com';
  user.firstName = 'Chandan';
  user.lastName = 'Mishra';
  user.password = '12345678';
  return user;
}
