import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {Login} from '../model/login';
import {tap} from 'rxjs/operators';
import {Response} from '../model/response';
import {User} from '../model/user';
import {JwtDecodeService} from '../utils/jwt-decode.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isConnected = false;
  userConnected: User;

  urlBack = environment.apiJava;
  urlLogin = this.urlBack + '/utilisateur/login-utilisateur';

  constructor(private http: HttpClient, private jwtDecode: JwtDecodeService) {
  }

  login(login: Login) {
    return this.http.post<Response>(this.urlLogin, login).pipe(tap(res => {
      this.setSession(res);
      this.getUser();
    }));
  }

  private setSession(response: Response) {
    localStorage.setItem('token', response.token);
  }

  logout() {
    localStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  getUser() {
    const token = this.getToken();
    this.userConnected = this.jwtDecode.getDecodedAccessToken(token);
    console.log(this.userConnected);
  }

}
