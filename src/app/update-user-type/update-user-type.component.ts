import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-update-user-type',
  templateUrl: './update-user-type.component.html',
  styleUrls: ['./update-user-type.component.scss']
})
export class UpdateUserTypeComponent implements OnInit {

  currentUserType: any;
  updateError: string;
  constructor(private serv: AdminService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.currentUserType = JSON.parse(localStorage.getItem('UpdateUserType'));
    console.log(this.currentUserType);
  }

  UpdateUserType(e) {
    const target = e.target;
    const UserTypeID =  this.currentUserType.UserTypeID;
    const UserTypeDescription = target.querySelector('.name').value;

    const league = {
      UserTypeID,
      UserTypeDescription
    };

    this.serv.UpdateUserType(league).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['viewusertype']);
      } else {
        this.updateError = data.Error;
      }
    });
  }

}
