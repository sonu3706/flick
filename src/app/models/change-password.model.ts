export class ChangePasswordModel{
  public userEmail: string | null;
  public currentPassword: string;
  public newPassword: string;
  public confirmPassword: string;
}
