import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginBody: object;
  constructor() { }

  ngOnInit(): void {
  }

    Logon(el) {
      const target = el.target;
      const username = target.querySelector('.email').value;
      const password = target.querySelector('.password').value;

      this.loginBody = {
        username,
        password
      };
    }

}
