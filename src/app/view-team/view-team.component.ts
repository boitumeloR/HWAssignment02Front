import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ADDRGETNETWORKPARAMS } from 'dns';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.scss']
})
export class ViewTeamComponent implements OnInit {

  tableData: any;
  displayedColumns: string[] = ['No', 'name', 'average', 'edit/delete'];
  constructor(private serv: AdminService , private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.serv.GetTeams().subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data.Session));
      this.tableData = data.Teams;
    });
  }

  AddTeam() {
    this.router.navigateByUrl('addteam');
  }

  UpdateTeam(element) {
    localStorage.setItem('UpdateTeam', JSON.stringify(element));
    this.router.navigate(['updateteam']);
  }

  DeleteTeam(element) {
    this.serv.DeleteTeam(element).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      location.reload();
    });
  }
}
