import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {
  private baseUrl = 'https://leads-ui-git-backup-before-host2-sea6580gmailcoms-projects.vercel.app/api/leads';

  constructor(private http: HttpClient) {}

  addLeads(lead: any): Observable<any> {
    return this.http.post(this.baseUrl, lead, { responseType: 'json' });
  }

  getLeads(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
