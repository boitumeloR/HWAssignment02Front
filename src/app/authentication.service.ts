import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }
  server = 'https://localhost:44378/';
  GetPlayers() {
    const path = 'api/League/GetPlayers';
    return this.http.get(this.server + path );
  }
}
