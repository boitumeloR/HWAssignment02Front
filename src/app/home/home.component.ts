import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['No', 'name', 'age', 'average', 'edit/delete'] ;
  dataSource = ELEMENT_DATA;
  tableData: any;
  constructor(private serv: AuthenticationService , private router: Router, private cookie: CookieService) { }

  ngOnInit(): void {
    this.serv.GetPlayers().subscribe(data => {
      console.log(data)
      sessionStorage.setItem('session', JSON.stringify(data.Session));
      this.tableData = data.Players;
    });
  }

  AddPlayer() {
    this.router.navigateByUrl('addplayer');
  }

  UpdatePlayer(element) {
    localStorage.setItem('UpdatePlayer', JSON.stringify(element));
    this.router.navigate(['updateplayer']);
  }

  DeletePlayer(element) {
    this.serv.DeletePlayer(element).subscribe(data => {
      sessionStorage.setItem('session', JSON.stringify(data));
      location.reload();
    });
  }
}
