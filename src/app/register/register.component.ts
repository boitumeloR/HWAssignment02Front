import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  usertypes: any;
  selected: number;
  constructor(private authserv: AuthenticationService) { }

  ngOnInit(): void {
    this.authserv.GetUserTypes().subscribe(data => {
      this.usertypes = data;
    });
  }

  RegisterUser(e) {
    const target = e.target;

    const username = target.querySelector('.email').value;
    const password = target.querySelector('.password').value;
    const userTypeID = target.querySelector('#usertype');

    const authBody = {
      username,
      password,
      userTypeID
    };
    console.log(this.selected);
  }

}
