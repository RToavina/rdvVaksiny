import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      matchingControl.setErrors({ mustMatch: true });
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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      vaccin : [null,Validators.required],
      nom : ['',Validators.required],
      dateDeNaissance : ['',Validators.required],
      sexe : [0,Validators.required],
      email : ['',[Validators.required, Validators.email]],
      telephone : ['',[Validators.required]],
      adresse : ['',[Validators.required]],
      password : ['',[Validators.required, Validators.minLength(8)]],
      passwordConfirm : ['',Validators.required]
    },{validator: ComparePassword('password','passwordConfirm')});
  }

  inscription(){
    console.log(this.form);
  }

}
