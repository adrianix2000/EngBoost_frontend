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
import { WordService } from 'src/app/modules/core/services/word.service';
import { DialogCloseComponent } from 'src/app/modules/core/components/dialog-close/dialog-close.component';
import { Subject } from 'rxjs';

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
    public dialog: MatDialog,
    private wordService: WordService
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

  openDialog2(title: string, inforrmation: string): void {
    this.dialog.open(DialogCloseComponent, {
      data: {
        title: title,
        information: inforrmation,
      },
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddSessionDialogComponent, {
      data: {
        title: '',
        isshared: false,
        uploadFilePath: null,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');

      if (result != undefined) {
        let sessionCreateRequest: SessionCreateRequest = {
          username: this.tokenService.getUserName(),
          title: result.title,
          isshared: result.isshared,
        };

        // console.log(result.uploadFilePath);
        // console.log(sessionCreateRequest);

        let isError = false;
        this.sessionService.createSession(sessionCreateRequest).subscribe({
          next: (value) => {
            const formData = new FormData();

            let file = result.uploadFilePath;
            let sessionIdTemp = value.id;

            // console.log('id = ' + sessionIdTemp);
            formData.append('file', file);
            formData.append('sessionId', sessionIdTemp.toString());

            this.wordService.uploadFile(formData).subscribe({
              next: (value) => {
                console.log(value);
              },
              error: (err) => {
                console.log(err);

                if (err.status == 200) {
                  this.openDialog2(
                    'Sukces',
                    'Utworzono nową sesję oraz dodano słówka do bazy'
                  );
                }
              },
            });

            this.ngOnInit();
          },
          error: (err) => {
            console.log(err);
            isError = true;
          },
        });
      }
    });
  }
}
