import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatError } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { DialogCloseComponent } from 'src/app/modules/core/components/dialog-close/dialog-close.component';
import { userRegisterEntity } from 'src/app/modules/core/models/user.model';
import { RegistrationService } from 'src/app/modules/core/services/registration.service';

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
    firstName: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40),
      ],
      nonNullable: true,
    }),
    lastName: new FormControl('', {
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
    userName: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    password: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  openDialog(title: string, inforrmation: string) {
    this.dialog.open(DialogCloseComponent, {
      data: {
        title: title,
        information: inforrmation,
      },
    });
  }

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

  requestProcessing: boolean = false;

  RegisterAction(): void {
    const userdata: userRegisterEntity = this.registrationForm.getRawValue();

    this.requestProcessing = true;
    this.registrationService.register(userdata).subscribe({
      next: (value) => {
        console.log(value);
        //this.router.navigate(['/logowanie']);
        // console.log('Wszytsko git');
        this.openDialog(
          'Operacja zakończona skucesem',
          'Utworzono nowego użytkownika'
        );
      },
      error: (err) => {
        let errorStatus: number = err.status;

        if (errorStatus == 400) {
          this.openDialog(
            'Błąd',
            'Operacja nie powiodła się. Istnieje już użytkownik z podaną nazwą użytkownika'
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
