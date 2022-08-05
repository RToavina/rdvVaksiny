import { Component, OnInit } from '@angular/core';
import {Utilisateur} from '../shared/model/utilisateur';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: Utilisateur;

  constructor(private auuthService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.auuthService.getUserConnected();
  }

}
