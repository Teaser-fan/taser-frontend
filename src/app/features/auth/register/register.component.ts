import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SOMETHING_WENT_WRONG } from 'src/app/shared/constants/general.constants';
import { REGISTRATION_SUCCESS } from 'src/app/shared/constants/user.constants';
import { User } from 'src/app/shared/interfaces/user';
import { SpinnerService } from 'src/app/shared/services/spinner/spinner.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message/toast-message.service';
import { UsersService } from 'src/app/shared/services/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private spinnerService: SpinnerService,
    private toasterService: ToastMessageService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: [, [Validators.required]],
      email: [, [Validators.required]],
      password: [, [Validators.required]],
      address: [, [Validators.required]],
      phoneNumber: [],
      city: [],
      country: [],
      postalCode: [],
    });
  }

  ngOnInit(): void {
  }

  async onRegister(): Promise<void> {
    try {
      if (this.registerForm.invalid) {
        return;
      }

      const newUser: User = {
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value,
        phoneNumber: this.registerForm.get('phoneNumber')?.value,
        location: {
          address: this.registerForm.get('address')?.value,
          city: this.registerForm.get('country')?.value,
          postalCode: this.registerForm.get('postalCode')?.value,
        },
      };

      this.spinnerService.show();
      await this.userService.registerUser(newUser);
      this.spinnerService.hide();
      this.toasterService.showSuccess(REGISTRATION_SUCCESS);
      this.registerForm.reset();
      this.router.navigateByUrl('/auth/login')
    } catch (err) {
      console.log(err)
      this.spinnerService.hide();
      this.toasterService.showError(SOMETHING_WENT_WRONG);
    }
  }
}
