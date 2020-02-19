import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user-type',
  templateUrl: './view-user-type.component.html',
  styleUrls: ['./view-user-type.component.scss']
})
export class ViewUserTypeComponent implements OnInit {

  tableData: any;
  displayedColumns: string[] = ['No', 'name', 'edit/delete'];
  constructor(private serv: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.serv.GetUserTypes().subscribe(data => {
      this.cookie.set('session', JSON.stringify(data.Session));
      console.log(data);
      this.tableData = data.UserTypes;
    });
  }

  AddUserType() {
    this.router.navigateByUrl('addusertype');
  }

  UpdateUserType(element) {
    localStorage.setItem('UpdateUserType', JSON.stringify(element));
    this.router.navigate(['updateusertype']);
  }

}
