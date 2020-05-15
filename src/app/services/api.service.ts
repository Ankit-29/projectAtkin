import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpParams, HttpClient } from '@angular/common/http';
import { CONSTANT } from '../constants/constants';
import { catchError, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = CONSTANT.APIURL;
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, { params });
  }

  put(path: string, body: any = {}): Observable<any> {
    return this.http.put(
      `${this.apiUrl}${path}`,
      body
    );
  }

  post(path: string, body: object = {}): Observable<any> {
    return this.http.post(
      `${this.apiUrl}${path}`,
      body
    );
  }

  delete(path): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}${path}`
    );
  }

  errorHandler(error) {
    return error.error;
  }
}
