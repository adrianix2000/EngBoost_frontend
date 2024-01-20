import { Component } from '@angular/core';
import { Session } from 'src/app/modules/core/models/session.model';
import { SessionService } from 'src/app/modules/core/services/session.service';
import { WordService } from 'src/app/modules/core/services/word.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sharedpulpit',
  templateUrl: './sharedpulpit.component.html',
  styleUrls: ['./sharedpulpit.component.scss'],
})
export class SharedpulpitComponent implements OnInit {
  constructor(
    private sessionService: SessionService,
    private wordService: WordService,
    private router: Router
  ) {}

  sessionList: Session[] = [];
  ngOnInit(): void {
    this.sessionService.getSharedSessions().subscribe({
      next: (value) => {
        this.sessionList = value;
        console.log(this.sessionList);
      },
      error: (error) => {},
    });
  }

  makeTest(id: number): void {
    this.router.navigate(['/pretest/' + id]);
  }
}
