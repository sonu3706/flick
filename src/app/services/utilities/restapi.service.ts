import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { RestApi } from '../interfaces/rest-api';

@Injectable({
  providedIn: 'root',
})
export class RestApiService<T> implements RestApi {
  private TMDB_API_KEY: string = '06203334b59c6a533b36ecd954eb2d14';

  constructor(private http: HttpClient) {}

  public getData(baseUrl: string, actionUrl: string): Observable<T> {
    return this.http.get<T>(baseUrl.concat(actionUrl));
  }

  public postData(
    baseUrl: string,
    actionUrl: string,
    body: any
  ): Observable<T> {
    const params = new HttpParams();
    let headers = new HttpHeaders()
      .append('content-type', 'application/json')
      .set('accept', 'application/json');
    return this.http.post<T>(baseUrl.concat(actionUrl), body, {
      headers: headers,
      params: params,
    });
  }

  public putData(baseUrl: string, actionUrl: string): Observable<any> {
    return EMPTY;
  }

  public deleteData(baseUrl: string, actionUrl: string): Observable<any> {
    return EMPTY;
  }
}
