import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PulpitComponent } from './components/pulpit/pulpit.component';
import { SharedModule } from '../shared/shared.module';
import { AddSessionDialogComponent } from './components/add-session-dialog/add-session-dialog.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';
import { ModifySessionComponent } from './components/modify-session/modify-session.component';
import { ModifyWordDialogComponent } from './components/modify-word-dialog/modify-word-dialog.component';
import { SharedpulpitComponent } from './components/sharedpulpit/sharedpulpit.component';
import { PretestComponent } from './components/pretest/pretest.component';

@NgModule({
  declarations: [PulpitComponent, AddSessionDialogComponent, SessionDetailsComponent, ModifySessionComponent, ModifyWordDialogComponent, SharedpulpitComponent, PretestComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [PulpitComponent],
})
export class HomeModule {}
