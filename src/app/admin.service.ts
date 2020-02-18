import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Session } from 'inspector';

export interface Teams {
  Session: Session ;
  Teams: any;
}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  server = 'https://localhost:44378/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient, private cookie: CookieService) { }

  GetTeams() {
    const path = 'api/League/GetSecureTeams';
    const session = JSON.parse(this.cookie.get('session'));
    return this.http.post<Teams>(this.server + path, session, this.httpOptions);
  }

  DeleteTeam(team) {
    const sess = JSON.parse(this.cookie.get('session'));
    const path = 'api/League/DeleteTeam'
    const bod = {
      Team: team,
      Session: sess
    };
    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }
}
