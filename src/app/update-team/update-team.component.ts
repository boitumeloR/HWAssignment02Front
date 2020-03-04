import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.scss']
})
export class UpdateTeamComponent implements OnInit {

  currentTeam: any;
  selectedLeague: number;
  updateError: string;
  LeagueList: any;

  constructor(private serv: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.currentTeam = JSON.parse(localStorage.getItem('UpdateTeam'));
    console.log(this.currentTeam);
    this.serv.GetSecureLeagues().subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data.Session));
      this.LeagueList = data.Leagues;
    });
  }

  UpdateTeam(e) {
    const target = e.target;
    const TeamID =  this.currentTeam.TeamID;
    const TeamName = target.querySelector('.name').value;
    const TeamAverage  = target.querySelector('.average').value;
    const LeagueID = this.selectedLeague;

    const team = {
      TeamID,
      TeamName,
      TeamAverage,
      LeagueID
    };

    this.serv.UpdateTeam(team).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['viewteam']);
      } else {
        this.updateError = data.Error;
      }
    });
  }
}
