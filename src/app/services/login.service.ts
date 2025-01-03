import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginResponse} from '../types/login-response.type';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = "http://localhost:8080/auth";

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiURL + "/login", { email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-token", value.name)
      })
    )
  }

  signup(name: string, email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiURL + "/register", { name, email, password }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-token", value.name)
      })
    )
  }
}
