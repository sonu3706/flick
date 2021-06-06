import { Component, OnInit } from '@angular/core';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { FormGroup } from '@angular/forms';
import { ChangePasswordForm } from '../../../../models/change-password-form.model';
import { RestApiService } from '../../../../services/utilities/restapi.service';
import { TokenService } from '../../../../services/utilities/token.service';
import { ChangePasswordModel } from '../../../../models/change-password.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  public changePasswordFormGroup: FormGroup;
  public changePasswordForm: ChangePasswordForm;
  public changePasswordObject: ChangePasswordModel;

  constructor(
    private formBuilder: RxFormBuilder,
    private changePasswordService: RestApiService<any>,
    private tokenService: TokenService,
    private snackBar: MatSnackBar
  ) {
    this.changePasswordForm = new ChangePasswordForm();
    this.changePasswordFormGroup = formBuilder.formGroup(
      this.changePasswordForm
    );
  }

  ngOnInit(): void {}
  public onSubmit(): void {
    this.showSnackBar('Password successfully changed', 'Done');
    if (this.changePasswordFormGroup.valid) {
      const baseUrl = 'http://localhost:8081/api/v1/users';
      const restUrl = '/change-password';
      this.changePasswordObject = new ChangePasswordModel();
      this.changePasswordObject.userEmail =
        window.sessionStorage.getItem('userId');
      this.changePasswordObject.currentPassword =
        this.changePasswordFormGroup.controls.currentPassword.value;
      this.changePasswordObject.newPassword =
        this.changePasswordFormGroup.controls.newPassword.value;
      this.changePasswordObject.confirmPassword =
        this.changePasswordFormGroup.controls.confirmPassword.value;
      this.changePasswordService
        .postData(baseUrl, restUrl, this.changePasswordObject)
        .subscribe((data) => {
          this.showSnackBar('Password has changes', 'Done');
          this.changePasswordFormGroup.controls.currentPassword.setValue('');
          this.changePasswordFormGroup.controls.newPassword.setValue('');
          this.changePasswordFormGroup.controls.confirmPassword.setValue('');
        });
    }
  }

  public showSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
