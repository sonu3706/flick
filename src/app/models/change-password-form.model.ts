import {
  compare,
  maxLength,
  minLength,
  required,
} from '@rxweb/reactive-form-validators';

export class ChangePasswordForm {
  @required()
  public currentPassword: string;
  @required()
  @maxLength({ value: 20 })
  @minLength({ value: 8 })
  public newPassword: string;
  @required()
  @compare({ fieldName: 'newPassword' })
  @maxLength({ value: 20 })
  @minLength({ value: 8 })
  public confirmPassword: string;
}
