import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-league',
  templateUrl: './add-league.component.html',
  styleUrls: ['./add-league.component.scss']
})
export class AddLeagueComponent implements OnInit {

  addError: any;
  constructor(private serv: AdminService, private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  AddLeague(e) {
    const target = e.target;
    const LeagueID =  null;
    const LeagueName = target.querySelector('.name').value;
    const LeagueLevel  = target.querySelector('.average').value;

    const league = {
      LeagueID,
      LeagueName,
      LeagueLevel,
    };

    this.serv.AddLeague(league).subscribe(data => {
      this.cookie.set('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['viewleague']);
      } else {
        this.addError = data.Error;
      }
    });
  }

}
