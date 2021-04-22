import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommonHttpService {
  constructor(private http: HttpClient) {}

  public get<T>(
    absolutePath: string,
    params: HttpParams = new HttpParams()
  ): Observable<T> {
    return this.http.get<T>(`${absolutePath}`, {
      responseType: 'json',
      params,
    });
  }

  public getFile(
    absolutePath: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http.get(`${absolutePath}`, { responseType: 'blob', params });
  }

  public put<T>(absolutePath: string, body: object = {}): Observable<T> {
    return this.http.put<T>(`${absolutePath}`, JSON.stringify(body));
  }

  public patch<T>(absolutePath: string, body: Partial<T>): Observable<T> {
    return this.http.patch<T>(`${absolutePath}`, body);
  }

  public post<T>(
    absolutePath: string,
    body: object = {},
    options: object = {}
  ): Observable<T> {
    return this.http.post<T>(`${absolutePath}`, JSON.stringify(body), options);
  }

  public delete<T>(absolutePath: string): Observable<T> {
    return this.http.delete<T>(`${absolutePath}`);
  }
}
