import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private baseUrl = 'http://localhost:8080/api/leads';

  constructor( private http: HttpClient ) { }

  addLeads(lead: any) :Observable<any> {
    return this.http.post(this.baseUrl, lead,{responseType: 'json'});
  }
}
