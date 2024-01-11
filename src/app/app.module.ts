import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './modules/core/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { HomeModule } from './modules/home/home.module';
import { Router } from '@angular/router';
import { TokenService } from './modules/core/services/token.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthorizationModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private tokenService: TokenService, private router: Router) {
    if (!tokenService.isTokenExists()) {
      router.navigate(['/logowanie']);
    } else {
      router.navigate(['/pulpit']);
    }
  }
}
