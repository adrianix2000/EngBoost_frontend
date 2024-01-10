import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  public mySubject = new Subject<boolean>();
  constructor() {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.mySubject.next(this.isTokenExists());
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
