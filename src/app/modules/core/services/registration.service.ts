import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userRegisterEntity } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(user: userRegisterEntity): Observable<any> {
    return this.http.post<any>('http://localhost:8080/auth/register', user);
  }
}
