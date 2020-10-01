import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

// Interfaces

export interface Players {
  Session: Session;
  Players: [];
}
export interface Session {
  UserID: string;
  SessionID: string;
  Type: number;
  Error: string;
}

export interface UserType {
  UserTypeID: number;
  UserTypeDescription: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userSession: Session;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) { }

  server = 'https://localhost:44378/';

  GetPlayers() {
    const path = 'api/League/GetPlayers';
    return this.http.post<Players>(this.server + path, JSON.parse(sessionStorage.getItem('session')), this.httpOptions);
  }

  UpdatePlayer(player) {
    const path = 'api/League/UpdatePlayer';
    const session = JSON.parse(sessionStorage.getItem('session'));

    const bod = {
      player,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  AddPlayer(player) {
    const path = 'api/League/AddPlayer';
    const session = JSON.parse(sessionStorage.getItem('session'));

    const bod = {
      player,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  DeletePlayer(player) {
    const path = 'api/League/DeletePlayer';
    const session = JSON.parse(sessionStorage.getItem('session'));
    const bod = {
      player,
      session
    };

    return this.http.post<Session>(this.server + path, bod, this.httpOptions);
  }

  GetUserTypes() {
    const path = 'api/Auth/GetUserTypes';
    return this.http.get<UserType[]>(this.server + path);
  }

  GetTeams() {
    const path = 'api/League/GetTeams';

    return this.http.get(this.server + path);
  }

  RegisterUser(user) {
    const path = 'api/Auth/RegisterUser';

    return this.http.post<Session>(this.server + path, user, this.httpOptions);
  }

  Login(user) {
    const path = 'api/Auth/Login';

    return this.http.post<Session>(this.server + path, user, this.httpOptions);
  }

  Logout() {
    const sess = JSON.parse(sessionStorage.getItem('session'));
    const path = 'api/Auth/Logout';
    return this.http.post(this.server + path, sess, this.httpOptions);
  }
}
