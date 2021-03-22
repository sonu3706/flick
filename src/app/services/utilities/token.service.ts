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
    let accessToken = window.sessionStorage.getItem('access_token');
    if (accessToken) {
      this.userLoggedIn.next(true);
    }
  }

  public saveTokenToSessionStorage(token: string) {
    window.sessionStorage.setItem('access_token', token);
  }

  /**
   * removeTokenFromSessionStorage
   */
  public removeTokenFromSessionStorage() {
    let accessToken = window.sessionStorage.getItem('access_token');
    if (accessToken) {
      window.sessionStorage.removeItem('access_token');
    }
  }
}
