import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtileService } from '../service/utile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  telephone: string;
  mdp: string;

  constructor(
    private utileService: UtileService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {}

  setDataLogin(isMdp: boolean, value: string) {
    if (isMdp) {
      this.mdp = value;
    } else {
      this.telephone = value;
    }
  }

  connexionPatient() {
    if (
      this.utileService.getVerifString(this.telephone) &&
      this.utileService.getVerifString(this.mdp)
    ) {
      let data = {
        telephone: this.telephone,
        mot_de_passe: this.mdp,
        status: 100,
      };

      let url = this.utileService.getUrlServeur() + '/utilisateur/login-utilisateur';

      let headers = {
        'Content-Type': 'application/json',
        'Accept' : 'application/json',
        'Access-Control-Allow-Origin': ''+ url,
      };

      this.httpClient
        .post(
          url,
          data,
          { headers: headers }
        )
        .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            console.log('Error' + error);
          }
        );
    } else {
      alert('Il y a un champs vide.');
    }
  }
}
