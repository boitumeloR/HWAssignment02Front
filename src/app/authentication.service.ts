import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders } from '@angular/common/http';

export interface Session {
  UserID: string;
  SessionID: string;
  Error: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userSession: object;

  constructor(private http: HttpClient) { }

  server = 'https://localhost:44378/';

  GetPlayers() {
    const path = 'api/League/GetPlayers';
    return this.http.get(this.server + path );
  }

  GetUserTypes() {
    const path = 'api/Auth/GetUserTypes';
    return this.http.get(this.server + path);
  }

  RegisterUser(user) {
    const path = 'api/Auth/RegisterUser';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post<Session>(this.server + path, user, httpOptions);
  }
}
