import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Session } from 'protractor';
import { MatDialog } from '@angular/material/dialog';
import { ErrorModalComponent } from '../error-modal/error-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router, private dialog: MatDialog) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const sess = JSON.parse(sessionStorage.getItem('session'));
    if (sess.Type === 1) {
      return true;
    } else if (!sess) {
      this.router.navigateByUrl('');
      return false;
    } else {
      const dialogRef = this.dialog.open(ErrorModalComponent, {disableClose: true});

      dialogRef.afterClosed().subscribe(result => {
        window.history.back();
      });
      return false;
    }
  }
}
