import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {
  LeagueList: any;
  selectedLeague: number;
  addError: string;
  constructor(private serv: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.serv.GetSecureLeagues().subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data.Session));
      this.LeagueList = data.Leagues;
    });
  }

  AddTeam(e) {
    const target = e.target;
    const TeamID =  null;
    const TeamName = target.querySelector('.name').value;
    const TeamAverage  = target.querySelector('.average').value;
    const LeagueID = this.selectedLeague;

    const team = {
      TeamID,
      TeamName,
      TeamAverage,
      LeagueID
    };

    this.serv.AddTeam(team).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['viewteam']);
      } else {
        this.addError = data.Error;
      }
    });
  }
}
