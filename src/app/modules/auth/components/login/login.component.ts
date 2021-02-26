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

  constructor(private formBuilder: RxFormBuilder) {
    this.loginForm = new LoginForm();
    this.loginFormGroup = this.formBuilder.formGroup(this.loginForm);
  }

  ngOnInit(): void {}


  public onSubmit(): void {
    if(this.loginFormGroup.valid) {
    
    }
  }
}
