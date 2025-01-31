import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserType } from '../authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usertypes: UserType[];
  selected = 0;
  regError: string;
  constructor(private authserv: AuthenticationService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.authserv.GetUserTypes().subscribe(data => {
      this.usertypes = data;
    });
  }

  RegisterUser(e) {

    console.log('im here');
    const target = e.target;

    const username = target.querySelector('.email').value;
    const password = target.querySelector('.password').value;
    const userTypeID = this.selected;
    const authBody = {
      username,
      password,
      userTypeID
    };
    this.authserv.RegisterUser(authBody).subscribe(data => {
      if (data.Error === null) {
        this.authserv.userSession = data;
        this.router.navigateByUrl('');
      } else {
        this.regError = data.Error;
      }
    });
  }

}
