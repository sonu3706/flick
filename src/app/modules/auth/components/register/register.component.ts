import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { RegisterForm } from 'src/app/models/register-form.model';
import { TokenService } from 'src/app/services/utilities/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public registerFormGroup: FormGroup;
  public registerForm: RegisterForm;

  constructor(private formBuilder: RxFormBuilder) {
    this.registerForm = new RegisterForm();
    this.registerFormGroup = this.formBuilder.formGroup(this.registerForm);
  }

  ngOnInit(): void {}

  public onSubmit(): void {}
}
