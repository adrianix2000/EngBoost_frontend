import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/modules/core/models/session.model';
import { wordDto } from 'src/app/modules/core/models/word.model';
import { SessionService } from 'src/app/modules/core/services/session.service';
import { WordService } from 'src/app/modules/core/services/word.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private wordService: WordService
  ) {}

  currentSession: Session = {
    id: 0,
    title: '',
    isshared: false,
    username: '',
    viewnumber: 0,
    createdate: '',
  };

  wordList: wordDto[] = [];
  displayedColumns: string[] = ['englishmean', 'polishmean'];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id: number = Number(params.get('id'));
      this.sessionService.getSessionById(id).subscribe({
        next: (value) => {
          this.currentSession = value;
          console.log(this.currentSession);

          this.wordService.getSessionWords(this.currentSession.id).subscribe({
            next: (value) => {
              this.wordList = value;
              console.log(this.wordList);
            },
            error: (error) => {},
          });
        },
        error: (error) => {},
      });
    });
  }
}
