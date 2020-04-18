import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
const USER_KEY = 'auth-user';



@Injectable({
  providedIn: 'root'
})
export class PermissionService implements CanActivate {

  constructor(private router: Router ) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (localStorage.getItem(USER_KEY)!=null )
      return true;



    this.router.navigate(['login']);
    return false;

  }
}

