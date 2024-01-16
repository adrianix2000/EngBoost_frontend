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
}
