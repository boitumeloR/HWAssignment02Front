import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user-type',
  templateUrl: './add-user-type.component.html',
  styleUrls: ['./add-user-type.component.scss']
})
export class AddUserTypeComponent implements OnInit {

  addError: string;
  constructor(private serv: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  AddUserType(e) {
    const target = e.target;
    const UserTypeID =  null;
    const UserTypeDescription = target.querySelector('.name').value;

    const usertype = {
      UserTypeID,
      UserTypeDescription
    };

    console.log(usertype);

    this.serv.AddUserType(usertype).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['viewusertype']);
      } else {
        this.addError = data.Error;
      }
    });
  }

}
