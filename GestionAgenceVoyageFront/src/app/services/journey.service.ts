import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  private baseURL = "http://localhost:9092";
  constructor(private httpClient : HttpClient) { }

  public findAllFlight(): Observable<any>{
    return this.httpClient.get(this.baseURL+"/flights");
  }
  public findOneFlight(id:number): Observable<any>{
    return this.httpClient.get(this.baseURL+"/flight"+"/"+id);
  }
  public saveFlight(flight:any): Observable<any>{
    return this.httpClient.post(this.baseURL+"/flight",flight);
  }
  public deleteFlight(id:number): Observable<any>{
    return this.httpClient.delete(this.baseURL+"/flight"+"/"+id);
  }
}
