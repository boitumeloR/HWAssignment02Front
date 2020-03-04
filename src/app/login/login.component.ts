import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginBody: object;
  error: string;
  constructor(private authserv: AuthenticationService, private router: Router, private cookie: CookieService ) { }

  ngOnInit(): void {
  }

    Logon(el) {
      const target = el.target;
      const username = target.querySelector('.email').value;
      const password = target.querySelector('.password').value;

      this.loginBody = {
        username,
        password,
        UserTypeID: null
      };

      this.authserv.Login(this.loginBody).subscribe(data => {
        if (data.Error !== null) {
          sessionStorage.setItem('session', JSON.stringify(data));
          this.error = data.Error;
        } else if (data.Error === null) {
          this.authserv.userSession = data;
          const now = new Date();
          sessionStorage.setItem('session', JSON.stringify(data));
          console.log(data);
          if (data.Type === 2) {
            this.router.navigate(['home']);
          } else if (data.Type === 1) {
            this.router.navigate(['viewteam']);
          }
        }
      });
    }

}
