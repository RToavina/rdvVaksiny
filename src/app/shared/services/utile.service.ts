import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../model/login';

@Injectable({
  providedIn: 'root'
})
export class UtileService {
  isConnected: false;

  urlBack = environment.apiJava;
  urlLogin = this.urlBack +  '/utilisateur/login-utilisateur';

  constructor(private http: HttpClient) {
  }

  login(login: Login) {
    return this.http.post(this.urlLogin, login);
  }
}