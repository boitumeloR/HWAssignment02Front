import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  usertype: any;
  constructor(private cookie: CookieService) { }

  ngOnInit(): void {
    const sess = JSON.parse(sessionStorage.getItem('session'));
    if (sess !== null) {this.usertype = sess.Type; }
    console.log(this.usertype);
  }

}
