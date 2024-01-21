import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/modules/core/services/session.service';
import { WordService } from 'src/app/modules/core/services/word.service';
import { OnInit } from '@angular/core';
import { wordDto } from 'src/app/modules/core/models/word.model';

@Component({
  selector: 'app-pretest',
  templateUrl: './pretest.component.html',
  styleUrls: ['./pretest.component.scss'],
})
export class PretestComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService,
    private wordService: WordService,
    private router: Router
  ) {}

  wordList: wordDto[] = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id: number = Number(params.get('id'));
      this.wordService.getSessionWords(id).subscribe({
        next: (value) => {
          this.wordList = value;
          console.log(this.wordList);

          this.sessionService.incrementNumberOfViews(id).subscribe({});
        },
        error: (error) => {},
      });
    });
  }

  goBack(): void {
    this.router.navigate(['/shared']);
  }
}
