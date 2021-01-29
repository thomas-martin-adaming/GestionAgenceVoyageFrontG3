import { Component, OnInit } from '@angular/core';
import { Role } from '../model/role';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {


  role:Role = new Role();
  roles:Role[] = new Array();
  logadm:boolean;

  constructor(private rService: RoleService) { }

  ngOnInit(): void {
    this.rService.findAll().subscribe(data => {this.roles=data})
    if(sessionStorage.getItem('Role')=="admin") {
      this.logadm = true;};
  }

  save():void {
    this.rService.save(this.role).subscribe(arg=> {
      console.log(arg,"save Ok", arg.status);
      this.role=new Role();
      this.findAll();
    });
  }
 findAll():void {
    this.rService.findAll().subscribe((data: Role[])=>{
      this.roles=data;
      console.log(this.role);
    })
  }
  delete(id):void {
    this.rService.delete(id).subscribe(data=>{
      this.findAll();
    })
  }
  selectOne(item):void {
    this.role=item;
    console.log(this.role)
  }
  deleted(id):void{
    this.rService.deleted(id,this.role).subscribe(data=>{
      this.findAll();
    })

  }
}
