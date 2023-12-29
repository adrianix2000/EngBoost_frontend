import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  passwordStrengthLevel: number = 0;
  currentProgresBarColor = 'warn';
  isFormDirty = false;

  registrationForm = new FormGroup({
    firstname: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ],
      nonNullable: true,
    }),
    lastname: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(50),
      ],
      nonNullable: true,
    }),
    username: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  ngOnInit(): void {
    this.registrationForm.controls.password.valueChanges.subscribe({
      next: (currentPassword) => {
        console.log(currentPassword);
        this.changePasswordStrenght(currentPassword);
      },
    });
  }

  changePasswordStrenght(currentPassword: string): void {
    this.passwordStrengthLevel =
      (currentPassword.length > 7 ? 20 : 0) +
      (/[a-z]/.test(currentPassword) ? 20 : 0) +
      (/[A-Z]/.test(currentPassword) ? 20 : 0) +
      (/[1-9]/.test(currentPassword) ? 20 : 0) +
      (/[^a-zA-Z0-9]/.test(currentPassword) ? 20 : 0);

    if (this.passwordStrengthLevel <= 33) {
      this.currentProgresBarColor = 'warn';
    } else if (
      this.passwordStrengthLevel > 33 &&
      this.passwordStrengthLevel <= 66
    ) {
      this.currentProgresBarColor = 'accent';
    } else {
      this.currentProgresBarColor = 'primary';
    }
  }

  RegisterAction(): void {
    const userdata = this.registrationForm.getRawValue();
    console.log(userdata.email);
  }

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'To pole nie może być puste!';
    }

    if (control.hasError('minlength')) {
      return 'To pole musi zawierać więcej znaków!';
    }

    if (control.hasError('maxlength')) {
      return 'Przekazałeś za dużo znaków w kontrolce';
    }

    if (control.hasError('email')) {
      return 'To nie jest adres e-mail';
    }

    return '';
  }

  clearForm(): void {}
}
