import { Component, OnInit } from '@angular/core';
import { AdminService, UserType } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-user-type',
  templateUrl: './view-user-type.component.html',
  styleUrls: ['./view-user-type.component.scss']
})
export class ViewUserTypeComponent implements OnInit {

  tableData: any;
  displayedColumns: string[] = ['No', 'name', 'edit/delete'];
  userTypes$: Observable<UserType>;
  constructor(private serv: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.userTypes$ = this.serv.GetUserTypes();
    this.userTypes$.subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data.Session));
      this.tableData = data.UserTypes;
      console.log(this.tableData);
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
