import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Session } from 'src/app/modules/core/models/session.model';
import { SessionService } from 'src/app/modules/core/services/session.service';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.scss'],
})
export class SessionDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private sessionService: SessionService
  ) {}

  currentSession: Session = {
    id: 0,
    title: '',
    isshared: false,
    username: '',
    viewnumber: 0,
    createdate: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id: number = Number(params.get('id'));
      this.sessionService.getSessionById(id).subscribe({
        next: (value) => {
          this.currentSession = value;
          console.log(this.currentSession);
        },
        error: (error) => {},
      });
    });
  }
}
