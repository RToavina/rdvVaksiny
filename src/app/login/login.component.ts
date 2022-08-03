import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  readonly STATUS = 100;
  form: FormGroup;

  telephone: string;
  mdp: string;

  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getFormtoModel() {
    return {
      telephone: this.form.get('login').value,
      mot_de_passe: this.form.get('password').value,
      status: this.STATUS
    };
  }

  connect() {
    if (this.form.valid) {
      this.authService.login(this.getFormtoModel()).subscribe( res => {
        if (res.status === 200) {
          console.log("User is logged in");
          this.router.navigateByUrl('/home');
        }
      });
    }
  }

}
