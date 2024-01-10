import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public tokenService: TokenService) {}

  showLogoutButton!: boolean;

  logout(): void {
    this.tokenService.destroyToken();
    console.log('logout');
  }

  ngOnInit(): void {
    this.tokenService.mySubject.subscribe({
      next: (value) => {
        this.showLogoutButton = value;
        console.log(this.showLogoutButton);
      },
    });
  }
}
