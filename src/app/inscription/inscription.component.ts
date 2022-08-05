import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Vaccin} from '../shared/model/vaccin';
import {VaccinService} from '../shared/services/vaccin.service';
import {VaccinCentre} from '../shared/model/vaccinCentre';
import {VaccinodromeService} from '../shared/services/vaccinodrome.service';

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

  constructor(private fb: FormBuilder, private vaccinService: VaccinService, private vaccinodromeService: VaccinodromeService) {
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
      adresse: ['', [Validators.required]],
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

  inscription() {
    console.log(this.form);
  }

}
