import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public mySubject = new Subject<boolean>();
  private helper = new JwtHelperService();
  decodedToken!: any;

  constructor() {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.decodedToken = this.helper.decodeToken(token);
    console.log(this.decodedToken);
    this.mySubject.next(this.isTokenExists());
    console.log(this.getUserName());
  }

  getUserName(): string {
    let token = localStorage.getItem('token');
    if (token != null) {
      this.decodedToken = this.helper.decodeToken(token);
    }
    return this.decodedToken.sub;
  }

  getToken(): string | null {
    let token = localStorage.getItem('token');
    return token;
  }

  isTokenExists(): boolean {
    const token = localStorage.getItem('token');
    return token != null;
  }

  destroyToken(): void {
    localStorage.removeItem('token');

    console.log('wywoluje sie');

    this.mySubject.next(this.isTokenExists());
  }
}
