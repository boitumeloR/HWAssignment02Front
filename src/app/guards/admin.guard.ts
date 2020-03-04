import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Session } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor() {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sess = JSON.parse(sessionStorage.getItem('session'));
    if (sess.Type === 1) {
      return true;
    } else {
      return false;
    }
  }

}
