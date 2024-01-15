import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  Session,
  SessionCreateRequest,
} from 'src/app/modules/core/models/session.model';
import { SessionService } from 'src/app/modules/core/services/session.service';
import { TokenService } from 'src/app/modules/core/services/token.service';
import { UserService } from 'src/app/modules/core/services/user.service';
import { AddSessionDialogComponent } from '../add-session-dialog/add-session-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

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
    private router: Router,
    public dialog: MatDialog
  ) {}

  userSessions!: Session[];

  ngOnInit(): void {
    if (!this.tokenService.isTokenExists()) {
      this.router.navigate(['/logowanie']);
    } else {
      this.sessionService.getUsersSessions().subscribe({
        next: (value) => {
          this.userSessions = value;
          console.log(this.userSessions);
          console.log(this.userSessions[0].title);
        },
      });
    }
  }

  sessionCreateRequest: SessionCreateRequest = {
    title: '',
    username: this.tokenService.getUserName(),
    isshared: false,
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSessionDialogComponent, {
      data: {
        title: '',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      if (result != undefined) {
        this.sessionCreateRequest.title = result.title;

        this.sessionService.createSession(this.sessionCreateRequest).subscribe({
          next: (value) => {
            console.log(value);
            this.ngOnInit();
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
}
