import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { LoginForm } from 'src/app/models/login-form.model';
import { TokenService } from 'src/app/services/utilities/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginFormGroup: FormGroup;
  public loginForm: LoginForm;
  public numberOfCalled: number = 0;

  constructor(
    private formBuilder: RxFormBuilder,
    private locationStrategy: LocationStrategy,
    private tokenService: TokenService
  ) {
    this.loginForm = new LoginForm();
    this.loginFormGroup = this.formBuilder.formGroup(this.loginForm);
  }

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    console.log('getData');
    
    this.tokenService.numberCalled.subscribe((data) => {
      console.log(data);
    });
  }

  public onSubmit(): void {
    console.log(this.loginFormGroup.valid);
  }

  public preventBackButton(): void {
    history.pushState(null, '', location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, '', location.href);
    });
  }
}
