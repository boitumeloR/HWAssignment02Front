import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {

  constructor(private serv: AuthenticationService, private cookie: CookieService, private router: Router) { }
  currentPlayer: any;
  selectedTeam: number;
  TeamList: any;
  updateError: string;
  ngOnInit(): void {
    this.currentPlayer = JSON.parse(localStorage.getItem('UpdatePlayer'));
    this.serv.GetTeams().subscribe(data => {
      this.TeamList = data;
    });
  }
  UpdatePlayer(e) {
    const target = e.target;
    const PlayerID =  this.currentPlayer.PlayerID;
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

    this.serv.UpdatePlayer(player).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      if (data.Error === null) {
        this.router.navigate(['home']);
      } else {
        this.updateError = data.Error;
      }
    });
  }
}
