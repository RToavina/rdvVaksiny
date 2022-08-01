import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isConnected = false;

  urlBack = environment.apiJava;
  urlLogin = this.urlBack +  '/utilisateur/login-utilisateur';

  constructor(private http: HttpClient) {
  }

  login(login: Login) {
    return this.http.post(this.urlLogin, login).pipe(tap(res => {
      /*this.isConnected = true;*/
      console.log(res);
    }));
  }
}
