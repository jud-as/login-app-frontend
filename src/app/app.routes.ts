import { Routes } from '@angular/router';
import {LoginComponent} from './components/layout/login/login.component';
import {SignUpComponent} from './components/layout/signup/signup.component';

export const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
];
