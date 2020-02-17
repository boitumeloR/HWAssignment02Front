import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  guardData: any;
  constructor(private authserv: AuthenticationService, private router: Router, private cookie: CookieService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sess = JSON.parse(this.cookie.get('session'));
    if (sess.Error != null) {
      return false;
      this.router.navigate(['login']);
    } else {
      return true;
    }
  }
}
