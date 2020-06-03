import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UtilityService } from '../services/helpers/utility.service';
import { DbStorageService } from '../services/helpers/db-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private dbStorageService: DbStorageService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (JSON.parse(this.dbStorageService.getItem('user')).type === 1) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
