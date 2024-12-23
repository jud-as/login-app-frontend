import { Component } from '@angular/core';
import {DefaultLoginLayoutComponent} from '../../default-login-layout/default-login-layout.component';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {PrimaryInputComponent} from '../../primary-input/primary-input.component';
import {Router} from '@angular/router';
import {LoginService} from '../../../services/login.service';
import {ToastrService} from 'ngx-toastr';

interface loginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    LoginService,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm!: FormGroup<loginForm>

  constructor(
    private router: Router,
    private loginService: LoginService,
    private ToastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit(){
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.ToastService.success("Login feito com sucesso!"),
      error: () => this.ToastService.error("Login falhou. Tente novamente mais tarde.")
    })
  }
  navigate(){
    this.router.navigate(["signup"])
  }
}

