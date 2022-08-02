export class Utilisateur {
  idutilisateur: number;
  idtypeutilisateur: number;
  nom: string;
  sexe: string;
  naissance: Date;
  email: string;
  telephone: string;
  mot_de_passe: string;
  urlPhoto: string;
  date_ajout: Date;
  status: number;
}


export class InfoVaccinUser {
  idInfoVaccinUser: number;
  idUtilisateur: number;
  idVaccinCentre: number;
  idVaccinodrome: number;
  idVaccin: number;
  status: number;
}
