import {
  compare,
  email,
  maxLength,
  minLength,
  required,
} from '@rxweb/reactive-form-validators';

export class RegisterForm {
  @required()
  public name: string | undefined;
  @required()
  @email()
  public email: string | undefined;
  @required()
  @maxLength({ value: 20 })
  @minLength({ value: 8 })
  public password: string | undefined;
  @required()
  @compare({ fieldName: 'password' })
  public confirmPassword: string | undefined;
}
