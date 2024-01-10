import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PulpitComponent } from './components/pulpit/pulpit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PulpitComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  exports: [PulpitComponent],
})
export class HomeModule {}
