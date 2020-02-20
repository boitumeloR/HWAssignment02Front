import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  tableData: any;
  displayedColumns: string[] = ['No', 'name', 'edit/delete'];
  constructor(private serv: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.serv.GetUser().subscribe(data => {
      this.cookie.set('session', JSON.stringify(data.Session));
      console.log(data);
      this.tableData = data.User;
    });
  }

  UpdateUser(element) {
    localStorage.setItem('UpdateUser', JSON.stringify(element));
    this.router.navigate(['updateuser']);
  }
}
