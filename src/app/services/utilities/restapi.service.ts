import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { RestApi } from '../interfaces/rest-api';

@Injectable()
export class RestSApiService<T> {
  getData(): Observable<any> {
    return EMPTY;
  }
  postData(): void {
    throw new Error('Method not implemented.');
  }
  putData(): void {
    throw new Error('Method not implemented.');
  }
  deleteData(): void {
    throw new Error('Method not implemented.');
  }
}
