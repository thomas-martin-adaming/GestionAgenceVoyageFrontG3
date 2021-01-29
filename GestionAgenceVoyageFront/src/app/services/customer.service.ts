import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseURL = "http://localhost:9093";
  constructor(private httpClient : HttpClient) { }

  public findAllCustomer(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/customers");
  }
  public findByIdCustomer(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/customer"+"/"+id);
  }
  public saveCustomer(customer:any): Observable<any>{
    return this.httpClient.post(this.baseURL+"/customer",customer);
  }
  public deleteCustomer(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/customer"+"/"+id);
  }
}
