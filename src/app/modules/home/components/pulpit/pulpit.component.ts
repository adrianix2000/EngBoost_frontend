import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/modules/core/services/session.service';
import { TokenService } from 'src/app/modules/core/services/token.service';
import { UserService } from 'src/app/modules/core/services/user.service';

@Component({
  selector: 'app-pulpit',
  templateUrl: './pulpit.component.html',
  styleUrls: ['./pulpit.component.scss'],
})
export class PulpitComponent implements OnInit {
  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.tokenService.isTokenExists()) {
      this.router.navigate(['/logowanie']);
    } else {
      this.sessionService.getUsersSessions().subscribe({
        next: (value) => {
          console.log(value);
        },
      });
    }
  }
}
