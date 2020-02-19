import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

export interface UserType {
  Session: Session;
  UserTypes: any;
}
export interface Session {
  UserID: string;
  SessionID: string;
  Type: number;
  Error: string;
}

export interface Leagues {
  Session: any;
  Leagues: any;
}
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
    const path = 'api/League/DeleteTeam';
    const bod = {
      Team: team,
      Session: sess
    };
    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

   AddTeam(team) {
    const sess = JSON.parse(this.cookie.get('session'));
    const path = 'api/League/AddTeam';

    const bod = {
      Team: team,
      Session: sess
    };
    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  GetSecureLeagues() {
    const path = 'api/League/GetSecureLeague';
    const session  = this.cookie.get('session');

    return this.http.post<Leagues>(this.server + path, session, this.httpOptions);
  }

  UpdateTeam(team) {
    const path = 'api/League/UpdateTeam';
    const session = JSON.parse(this.cookie.get('session'));

    const bod = {
      team,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  AddLeague(league) {
    const session = JSON.parse(this.cookie.get('session'));
    const path = 'api/League/AddLeague';

    const bod = {
      league,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  UpdateLeague(league) {
    const path = 'api/League/UpdateLeague';
    const session = JSON.parse(this.cookie.get('session'));

    const bod = {
      league,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  GetUserTypes() {
    const path = 'api/League/GetUserTypes';
    const session  = this.cookie.get('session');

    return this.http.post<UserType>(this.server + path, session, this.httpOptions);
  }

  AddUserType(usertype) {
    const session = JSON.parse(this.cookie.get('session'));
    const path = 'api/League/AddUserType';

    const bod = {
      usertype,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  UpdateUserType(usertype) {
    const path = 'api/League/UpdateUserType';
    const session = JSON.parse(this.cookie.get('session'));

    const bod = {
      usertype,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  DeleteUserType(usertype) {
    const sess = JSON.parse(this.cookie.get('session'));
    const path = 'api/League/DeleteUserType';
    const bod = {
      Team: usertype,
      Session: sess
    };
    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }


}
