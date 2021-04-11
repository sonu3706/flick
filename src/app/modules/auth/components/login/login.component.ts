import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {LoginForm} from 'src/app/models/login-form.model';
import { LoginResponse } from 'src/app/models/login-response.model';
import {User} from 'src/app/models/user.model';
import {RestApiService} from 'src/app/services/utilities/restapi.service';
import { TokenService } from 'src/app/services/utilities/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public loginForm: LoginForm;

  constructor(
    private formBuilder: RxFormBuilder,
    private loginService: RestApiService<LoginResponse>,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.loginForm = new LoginForm();
    this.loginFormGroup = this.formBuilder.formGroup(this.loginForm);
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if (this.loginFormGroup.valid) {
      const baseUrl = 'http://localhost:8081/api/v1/users';
      const restUrl = '/login';
      const user: User = new User();
      user.userEmail = this.loginFormGroup.controls.userName.value;
      user.password = this.loginFormGroup.controls.password.value;
      this.loginService.postData(baseUrl, restUrl, user).subscribe(
        (data: LoginResponse) => {
          this.tokenService.saveTokenToSessionStorage(data.access_token, data.userId);
          this.tokenService.userLoggedIn.next(true);
          this.router.navigate(['/dashboard/trending']).then(r => {
            console.log(r);
          });
        },
        (error: HttpErrorResponse) => {
          console.error('Error occurred  while login', error);
        }
      );
    }
  }
}
