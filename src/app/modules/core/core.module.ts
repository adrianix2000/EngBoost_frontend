import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
