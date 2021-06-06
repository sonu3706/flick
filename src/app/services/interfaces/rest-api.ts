import { Observable } from 'rxjs';

export interface RestApi {
  getData(baseUrl: string, actionUrl: string): Observable<any>;

  postData(baseUrl: string, actionUrl: string, body: any): void;

  putData(baseUrl: string, actionUrl: string): void;

  deleteData(baseUrl: string, actionUrl: string): void;
}
