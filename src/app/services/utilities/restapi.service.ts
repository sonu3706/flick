import { Injectable } from '@angular/core';
import { RestApi } from '../interfaces/rest-api';

@Injectable()
export class RestSApiService<T> implements RestApi {
  getData(): void {
    throw new Error('Method not implemented.');
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
