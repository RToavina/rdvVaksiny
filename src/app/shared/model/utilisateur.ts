export class Utilisateur {
  idutilisateur: number;
  idtypeutilisateur: number;
  nom: string;
  sexe: number;
  naissance: Date;
  email: string;
  telephone: string;
  mot_de_passe: string;
  urlPhoto: string;
  date_ajout: Date;
  status: number;
  public constructor(init?: Partial<Utilisateur>) {
    Object.assign(this, init);
  }
}


export class InfoVaccinUser {
  idInfoVaccinUser: number;
  idUtilisateur: number;
  idVaccinCentre: number;
  idVaccinodrome: number;
  idVaccin: number;
  status: number;
  public constructor(init?: Partial<InfoVaccinUser>) {
    Object.assign(this, init);
  }
}
