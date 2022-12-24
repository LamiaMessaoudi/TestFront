import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {
 
  public API_AGENT = environment.BASE_ADDRESS+`api/v1`;
  
  constructor(private http: HttpClient) { }


  getTotalAgent(): Observable<any> {
    return this.http.get(this.API_AGENT+"/count-agents");
  }

  getTotalAgentByStatus(): Observable<any> {
    return this.http.get(this.API_AGENT+"/count-agents-by-status");
  }
}
