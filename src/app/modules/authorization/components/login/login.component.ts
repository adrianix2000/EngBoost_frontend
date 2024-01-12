import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogCloseComponent } from 'src/app/modules/core/components/dialog-close/dialog-close.component';
import { userLoginRequest } from 'src/app/modules/core/models/user.model';
import { RegistrationService } from 'src/app/modules/core/services/registration.service';
import { TokenService } from 'src/app/modules/core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

  constructor(
    private authService: RegistrationService,
    public dialog: MatDialog,
    private tokenService: TokenService,
    private router: Router
  ) {}

  loginForm = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  openDialog(title: string, inforrmation: string) {
    this.dialog.open(DialogCloseComponent, {
      data: {
        title: title,
        information: inforrmation,
      },
    });
  }

  requestProcessing: boolean = false;

  loginAction(): void {
    const loginData: userLoginRequest = this.loginForm.getRawValue();

    this.requestProcessing = true;
    this.authService.login(loginData).subscribe({
      next: (value) => {
        let token: string = value.token;
        console.log(token);
        this.tokenService.setToken(token);
        this.router.navigate(['/pulpit']);
      },
      error: (err) => {
        let errorStatus: number = err.status;

        if (errorStatus == 404) {
          this.openDialog(
            'Błąd',
            'Operacja nie powiodła się. Nie istnieje użytkownik o podanych danych'
          );
        } else {
          this.openDialog(
            'Błąd',
            'Wystąpił niezidentyfikowany błąd. Spróbuj ponowanie'
          );
        }
        this.requestProcessing = false;
      },
      complete: () => {
        this.requestProcessing = false;
      },
    });
  }
}
