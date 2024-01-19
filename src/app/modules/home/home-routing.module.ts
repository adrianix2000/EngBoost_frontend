import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PulpitComponent } from './components/pulpit/pulpit.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';
import { ModifySessionComponent } from './components/modify-session/modify-session.component';

const routes: Routes = [
  { path: 'pulpit', component: PulpitComponent },
  { path: 'sessions/:id', component: SessionDetailsComponent },
  { path: 'modify-session/:id', component: ModifySessionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
