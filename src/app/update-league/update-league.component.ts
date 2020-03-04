import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-update-league',
  templateUrl: './update-league.component.html',
  styleUrls: ['./update-league.component.scss']
})
export class UpdateLeagueComponent implements OnInit {

  currentLeague: any;
  updateError: any;
  constructor(private serv: AdminService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.currentLeague = JSON.parse(localStorage.getItem('UpdateLeague'));
    console.log(this.currentLeague);
  }

  UpdateLeague(e) {
    const target = e.target;
    const LeagueID =  this.currentLeague.LeagueID;
    const LeagueName = target.querySelector('.name').value;
    const LeagueLevel  = target.querySelector('.average').value;

    const league = {
      LeagueID,
      LeagueName,
      LeagueLevel
    };

    this.serv.UpdateLeague(league).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['viewleague']);
      } else {
        this.updateError = data.Error;
      }
    });
  }

}
