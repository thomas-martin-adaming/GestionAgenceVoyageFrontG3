import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role';
import { Utilisateur } from '../model/utilisateur';
import { RoleService } from '../services/role.service';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

    constructor(private uService: UtilisateurService, private rService: RoleService) { }
  
    utilisateur: Utilisateur = new Utilisateur();
    utilisateurs: Utilisateur[];
    roles: Role[];
    logadm:boolean;
    login:string;
  
  
    ngOnInit(): void {
  
      this.findAll();
      this.getRoles();
  
      if(sessionStorage.getItem('Role')=="admin") {
        this.logadm = true;};
  
    }
  
    findAll(): void {
      this.uService.findAll().subscribe((data: Utilisateur[]) => {
        this.utilisateurs = data;
        console.log(this.utilisateurs);
      })
    }
  
    getRoles() {
      this.rService.findAll().subscribe(
        (data: Role[]) => { this.roles = data }
      )
    }
  
    save() {
      this.uService.save(this.utilisateur).subscribe(
        data => {
          this.utilisateur = data;
          this.findAll();
          this.utilisateur = new Utilisateur();
        }
      );
    }
  
    delete(id): void {
      this.uService.delete(id).subscribe(data => {
        this.findAll();
        this.utilisateur = new Utilisateur();
      });
    }
  
    selectOne(item): void {
      this.utilisateur = item;
    }
  }
  
