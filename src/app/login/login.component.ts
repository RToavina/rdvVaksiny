import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtileService } from '../shared/services/utile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  telephone: string;
  mdp: string;

  constructor(
    private utileService: UtileService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  getFormtoModel() {
    return {
      telephone: this.form.get('login').value,
      mot_de_passe: this.form.get('login').value,
      status: 100
    }
  }

  connect() {
    if (this.form.valid) {
      this.utileService.login(this.getFormtoModel()).subscribe(res => {
        console.log(res);
      });
    }
  }

}
