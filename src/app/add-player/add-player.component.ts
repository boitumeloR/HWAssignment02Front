import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  selectedTeam: number;
  TeamList: any;
  addError: string;
  constructor(private serv: AuthenticationService, private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.serv.GetTeams().subscribe(data => {
      this.TeamList = data;
    });
  }

  AddPlayer(e) {
    const target = e.target;
    const PlayerID =  null;
    const PlayerName = target.querySelector('.name').value;
    const PlayerSurname = target.querySelector('.surname').value;
    const PlayerAge = target.querySelector('.age').value;
    const PlayerAverage  = target.querySelector('.average').value;
    const TeamID = this.selectedTeam;

    const player = {
      PlayerID,
      PlayerName,
      PlayerSurname,
      PlayerAge,
      PlayerAverage,
      TeamID
    };

    this.serv.AddPlayer(player).subscribe(data => {
      this.cookie.set('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['home']);
      } else {
        this.addError = data.Error;
      }
    });
  }
}
