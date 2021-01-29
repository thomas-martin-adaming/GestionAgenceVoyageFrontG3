import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = 'http://localhost:9004/login'
  constructor(private httpClient: HttpClient, private router:Router) { }

  Autentification(login, password): any {
    return this.httpClient.get(this.baseURL+"Authentification?login="+login+"&password="+ password);
  }
}
