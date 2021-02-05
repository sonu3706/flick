import { Interface } from 'readline';

export interface RestApi {
  getData(): void;
  postData(): void;
  putData(): void;
  deleteData(): void;
}
