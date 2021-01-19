import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable()
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
}
