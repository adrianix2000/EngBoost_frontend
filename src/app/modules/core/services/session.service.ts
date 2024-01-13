import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';

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
}
