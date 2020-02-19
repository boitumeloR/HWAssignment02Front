import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-league',
  templateUrl: './view-league.component.html',
  styleUrls: ['./view-league.component.scss']
})
export class ViewLeagueComponent implements OnInit {

  tableData: any;
  displayedColumns: string[] = ['No', 'name', 'average', 'edit/delete'];
  constructor(private serv: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.serv.GetSecureLeagues().subscribe(data => {
      this.cookie.set('session', JSON.stringify(data.Session));
      this.tableData = data.Leagues;
    });
  }

  AddLeague() {
    this.router.navigateByUrl('addleague');
  }

  UpdateLeague(element) {
    localStorage.setItem('UpdateLeague', JSON.stringify(element));
    this.router.navigate(['updateleague']);
  }

  DeleteLeague(element) {
    this.serv.DeleteTeam(element).subscribe(data => {
      this.cookie.set('session', JSON.stringify(data));
      location.reload();
    });
  }
}
