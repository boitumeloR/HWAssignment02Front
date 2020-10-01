import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  currentUser: any;
  updateError: string;
  constructor(private serv: AdminService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.serv.GetUser().subscribe(data => {
      this.currentUser = data.User;
      sessionStorage.setItem('session', JSON.stringify(data.Session));
    });
  }

  UpdateUser(e) {
    const target = e.target;

    const Username = target.querySelector('.username').value;
    const CurrentPassword = target.querySelector('.current').value;
    const Password = target.querySelector('.password').value;
    const Confirm = target.querySelector('.confirm').value;

    if (Password === Confirm) {
      const userdetails = {
        UserAuthID: this.currentUser.UserAuthID,
        Username,
        Password,
        CurrentPassword
      };

      this.serv.UpdateUser(userdetails).subscribe(data => {
        if (data.Error === null) {
          sessionStorage.setItem('session', JSON.stringify(data));
          this.router.navigate(['logout']);
        } else {
          this.updateError = data.Error;
        }
      });
    } else {
      this.updateError = 'Make sure that the passwords match';
    }

  }

}
