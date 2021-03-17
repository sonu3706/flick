import { HttpErrorResponse } from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {RegisterForm} from 'src/app/models/register-form.model';
import { RegisterResponse } from 'src/app/models/register-response.model';
import { User } from 'src/app/models/user.model';
import { RestApiService } from 'src/app/services/utilities/restapi.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;
  public registerForm: RegisterForm;

  constructor(private formBuilder: RxFormBuilder, private registerService: RestApiService<RegisterResponse>, private router: Router) {
    this.registerForm = new RegisterForm();
    this.registerFormGroup = this.formBuilder.formGroup(this.registerForm);
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.registerFormGroup.valid) {
      // Save record
      this.registerApi();
    } else {
      // Do something
    }
  }

  public registerApi(): void {
    const baseUrl = 'http://localhost:8081/api/v1/users';
    const restUrl = '/register';
    this.registerService.postData(baseUrl, restUrl, this.prepareUserObject()).subscribe((data: RegisterResponse) => {
      if (data.status) {
        this.router.navigate(['/auth/login']);
      }
    }, (error: HttpErrorResponse) => {
      console.error('Error occurred  while creating account', error);
    });
  }

  public prepareUserObject(): User {
    let user: User = new User();
    user.userEmail = this.registerFormGroup.controls.email.value;
    user.firstName = this.registerFormGroup.controls.name.value.split(" ")[0];
    user.lastName = this.registerFormGroup.controls.name.value.split(" ")[1];
    user.password = this.registerFormGroup.controls.password.value;
    return user;
  }

}
