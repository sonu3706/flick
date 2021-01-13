import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Subject } from "rxjs";

@Injectable()
export class TokenService {

    public userLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public numberCalled: ReplaySubject<number> = new ReplaySubject<number>(0);

    public readTokenFromSessionStorage(): void {
       let accessToken = window.sessionStorage.getItem('access_token');
        if(accessToken) {
            this.userLoggedIn.next(true);
        }
    }

    public stopBackNavigation(data: number): void {
       this.numberCalled.next(data);
    }

}