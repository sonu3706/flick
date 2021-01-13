import { email, maxLength, minLength, required } from '@rxweb/reactive-form-validators';

export class LoginForm {
  @required()
  @email()
  public userName: string | undefined;
  @required()
  @maxLength({value:8})
  @minLength({value:8})
  public password: string | undefined;
}
