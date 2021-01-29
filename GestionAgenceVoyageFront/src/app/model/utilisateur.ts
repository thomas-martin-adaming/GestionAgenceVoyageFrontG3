import { Role } from "./role";

export class Utilisateur {
    idUtilisateur:number;
	nomUtilisateur:string;
	prenomUtilisateur:string;
	username:string;
	password:string;
	enabled:boolean;
	roles:Role[];
}


