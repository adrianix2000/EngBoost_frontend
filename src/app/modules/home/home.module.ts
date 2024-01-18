import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PulpitComponent } from './components/pulpit/pulpit.component';
import { SharedModule } from '../shared/shared.module';
import { AddSessionDialogComponent } from './components/add-session-dialog/add-session-dialog.component';
import { SessionDetailsComponent } from './components/session-details/session-details.component';

@NgModule({
  declarations: [PulpitComponent, AddSessionDialogComponent, SessionDetailsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [PulpitComponent],
})
export class HomeModule {}
