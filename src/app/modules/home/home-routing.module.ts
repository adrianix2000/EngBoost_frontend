import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PulpitComponent } from './components/pulpit/pulpit.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';

const routes: Routes = [
  { path: 'pulpit', component: PulpitComponent },
  { path: 'sessions/:id', component: SessionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
