import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLoginRequest, userRegisterEntity } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(user: userRegisterEntity): Observable<any> {
    return this.http.post<any>('http://localhost:8080/register', user);
  }

  login(userData: userLoginRequest): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: 'Bearer your_access_token', // Dodaj tutaj odpowiedni token dostępu
    // });

    // const options = { headers: headers };

    return this.http.post<any>(
      'http://localhost:8080/login',
      userData
      // options
    );
  }
}
