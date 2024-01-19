import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  uploadFile(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    return this.http.post<any>('http://localhost:8080/words/upload', formData, {
      headers: headers,
    });
  }

  getSessionWords(sessionId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('sessionId', sessionId.toString());

    return this.http.get<any>('http://localhost:8080/words/getBySessionId', {
      headers: headers,
      params: params,
    });
  }

  getSessionWords2(sessionId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('sessionId', sessionId.toString());

    return this.http.get<any>('http://localhost:8080/words/getBySessionId2', {
      headers: headers,
      params: params,
    });
  }

  deleteWord(id: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    });

    const params = new HttpParams().set('wordId', id.toString());

    return this.http.delete<any>('http://localhost:8080/words/delete', {
      headers: headers,
      params: params,
    });
  }
}
