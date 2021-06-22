import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_SUCCESS } from 'src/app/shared/constants/auth.constants';
import { SOMETHING_WENT_WRONG } from 'src/app/shared/constants/general.constants';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message/toast-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastService: ToastMessageService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [, [Validators.required]],
      password: [, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  async onLogin() {
    try {
      if (this.loginForm.invalid) {
        return;
      }
      const email: string = this.loginForm.get('email')?.value;
      const password: string = this.loginForm.get('password')?.value;
      //await this.authService.login(email, password);
      this.toastService.showSuccess(LOGIN_SUCCESS);
      this.router.navigateByUrl('');
    } catch (err) {
      console.log(err);
      this.toastService.showError(SOMETHING_WENT_WRONG);
    }
  }
}
