import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public userLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  public readTokenFromSessionStorage(): void {
    const accessToken = window.sessionStorage.getItem('access_token');
    if (accessToken) {
      this.userLoggedIn.next(true);
    }
  }

  public saveTokenToSessionStorage(token: string, userId: string): void {
    window.sessionStorage.setItem('access_token', token);
    window.sessionStorage.setItem('userId', userId);
  }

  /**
   * removeTokenFromSessionStorage
   */
  public removeTokenFromSessionStorage(): void {
    const accessToken = window.sessionStorage.getItem('access_token');
    if (accessToken) {
      window.sessionStorage.removeItem('access_token');
    }
  }
}
