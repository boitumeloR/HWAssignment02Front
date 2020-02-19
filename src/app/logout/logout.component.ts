import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private serv: AuthenticationService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.serv.Logout();
    this.cookie.delete('session');
    this.router.navigate(['']);
  }

}
