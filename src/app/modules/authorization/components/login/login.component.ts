import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { userLoginRequest } from 'src/app/modules/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;

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

  loginAction(): void {
    const loginData: userLoginRequest = this.loginForm.getRawValue();

    console.log(loginData);
  }
}
