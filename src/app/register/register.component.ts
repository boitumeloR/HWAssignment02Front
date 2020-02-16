import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usertypes: any;
  selected = 0;
  regError: string;
  constructor(private authserv: AuthenticationService, private router: Router) { }

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
        this.router.navigateByUrl('home');
      } else {
        this.regError = data.Error;
      }
    });
  }

}
