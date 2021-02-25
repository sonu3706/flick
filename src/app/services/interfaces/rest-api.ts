import { Interface } from 'readline';
import { Observable } from 'rxjs';

export interface RestApi {
  getData(): Observable<any>;
  postData(): void;
  putData(): void;
  deleteData(): void;
}
