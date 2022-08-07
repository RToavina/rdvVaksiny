import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Vaccin} from '../shared/model/vaccin';
import {VaccinService} from '../shared/services/vaccin.service';
import {VaccinCentre} from '../shared/model/vaccinCentre';
import {VaccinodromeService} from '../shared/services/vaccinodrome.service';
import {InfoVaccinUser, Utilisateur} from '../shared/model/utilisateur';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

export function ComparePassword(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent implements OnInit {

  form: FormGroup;
  vaccins: Vaccin[];
  vaccinCentre: VaccinCentre[];

  constructor(private fb: FormBuilder, private vaccinService: VaccinService, private vaccinodromeService: VaccinodromeService,
              private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      vaccin: [null, Validators.required],
      vaccinCentre: [null],
      nom: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
      sexe: [1, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirm: ['', Validators.required]
    }, {validator: ComparePassword('password', 'passwordConfirm')});

    this.vaccinService.getAll().subscribe(res => this.vaccins = res.docs);
    this.form.controls['vaccin']?.valueChanges.subscribe((value: Vaccin) => {
      this.vaccinCentre = [];
        this.vaccinodromeService.getAllVaccinodrome(value?.idVaccin, 10, 0).subscribe(res => {
          res.docs.map(x => new VaccinCentre(x))?.forEach(v => this.vaccinCentre.push(v));
        });
    });
  }

  getUser() {
    return new Utilisateur({
      nom: this.form.get('nom').value,
      naissance: this.form.get('dateDeNaissance').value,
      sexe: this.form.get('sexe').value,
      telephone: this.form.get('telephone').value,
      email: this.form.get('email').value,
      mot_de_passe: this.form.get('password').value,
      urlPhoto:'assets/img/profile-pic.png',
    });
  }

  getInfoVaccin() {
    const vaccinCentreForm = this.form.get('vaccinCentre');
    return new InfoVaccinUser({
      idVaccin: this.form.get('vaccin').value?.idVaccin,
      idVaccinCentre: vaccinCentreForm?.value?.idVaccinCentre,
      idVaccinodrome: vaccinCentreForm?.value?.idVaccinodrome,
    });
  }

  inscription() {
    if (this.form.valid) {
      this.userService.inscriptionPatient(this.getUser(),this.getInfoVaccin()).subscribe(res => {
        console.log(res);
        if (res?.status === 200) {
          this.router.navigateByUrl('/login');
        }
      });
    }
  }

}
