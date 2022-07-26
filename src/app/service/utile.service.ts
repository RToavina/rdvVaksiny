import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  urlServeur = "http://localhost:8087/rdvvaksiny/";

  constructor() { }

  getVerifString(libelle:string){
    if(libelle !== null && libelle!== undefined && libelle !== "" && libelle !== " "){
      return true;
    }
    return false;
  }

  getUrlServeur(){
    return this.urlServeur;
  }


}
