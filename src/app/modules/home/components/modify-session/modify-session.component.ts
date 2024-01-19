import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DeleteworddialogComponent } from 'src/app/modules/core/components/deleteworddialog/deleteworddialog.component';
import {
  Session,
  SessionUpdateRequest,
} from 'src/app/modules/core/models/session.model';
import { wordDto, wordDto2 } from 'src/app/modules/core/models/word.model';
import { SessionService } from 'src/app/modules/core/services/session.service';
import { WordService } from 'src/app/modules/core/services/word.service';

@Component({
  selector: 'app-modify-session',
  templateUrl: './modify-session.component.html',
  styleUrls: ['./modify-session.component.scss'],
})
export class ModifySessionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private wordService: WordService,
    public dialog: MatDialog
  ) {}

  modifySessionForm = new FormGroup({
    title: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ],
      nonNullable: true,
    }),
    isshared: new FormControl(false),
  });

  currentSession: Session = {
    id: 0,
    title: '',
    isshared: false,
    username: '',
    viewnumber: 0,
    createdate: '',
  };

  wordList: wordDto2[] = [];
  displayedColumns: string[] = ['englishmean', 'polishmean'];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id: number = Number(params.get('id'));
      this.sessionService.getSessionById(id).subscribe({
        next: (value) => {
          this.currentSession = value;
          console.log(this.currentSession);

          this.wordService.getSessionWords2(this.currentSession.id).subscribe({
            next: (value) => {
              this.wordList = value;
              console.log(this.wordList);

              this.modifySessionForm.controls.title.setValue(
                this.currentSession.title
              );

              this.modifySessionForm.controls.isshared.setValue(
                this.currentSession.isshared
              );
            },
            error: (error) => {},
          });
        },
        error: (error) => {},
      });
    });
  }

  modifySession(): void {
    const data = this.modifySessionForm.getRawValue();
    let request: SessionUpdateRequest = {
      title: data.title,
      isshared: data.isshared == null ? false : data.isshared,
    };

    this.sessionService
      .updateSession(request, this.currentSession.id)
      .subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  openDeleteDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    wordId: number
  ): void {
    const dialogRef = this.dialog.open(DeleteworddialogComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'delete') {
        this.wordService.deleteWord(wordId).subscribe({
          next: (value) => {
            console.log(value);
          },
          error: (error) => {
            if (error.status == 200) {
              //this.ngOnInit();

              this.wordList = this.wordList.filter((word) => word.id != wordId);
            }
          },
        });
      }
    });
  }
}
