import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import {
  SessionCreateRequest,
  SessionUpdateRequest,
} from '../models/session.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getUsersSessions(): Observable<any> {
    const userName = this.tokenService.getUserName();

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('username', userName);

    return this.http.get<any>('http://localhost:8080/sessions/getByUserName', {
      headers: headers,
      params: params,
    });
  }

  createSession(session: SessionCreateRequest): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    return this.http.post<any>('http://localhost:8080/sessions/add', session, {
      headers: headers,
    });
  }

  getSessionById(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('id', id.toString());

    return this.http.get<any>('http://localhost:8080/sessions/getById', {
      headers: headers,
      params: params,
    });
  }

  deleteSession(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('sessionId', id.toString());

    return this.http.delete<any>('http://localhost:8080/sessions/delete', {
      headers: headers,
      params: params,
    });
  }

  updateSession(session: SessionUpdateRequest, id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('sessionId', id.toString());

    return this.http.patch<any>(
      'http://localhost:8080/sessions/modify',
      session,
      {
        headers: headers,
        params: params,
      }
    );
  }

  getSharedSessions(): Observable<any> {
    return this.http.get<any>(
      'http://localhost:8080/sessions/getPublicSessions'
    );
  }

  incrementNumberOfViews(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('sessionId', id.toString());

    return this.http.patch<any>(
      'http://localhost:8080/sessions/increment',
      {},
      {
        headers: headers,
        params: params,
      }
    );
  }
}
