import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './services/registration.service';
import { DialogCloseComponent } from './components/dialog-close/dialog-close.component';

@NgModule({
  declarations: [NavbarComponent, DialogCloseComponent],
  providers: [RegistrationService],
  imports: [SharedModule, RouterModule, HttpClientModule],
  exports: [NavbarComponent],
})
export class CoreModule {}
