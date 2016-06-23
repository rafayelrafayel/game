import { Injectable }             from '@angular/core';
import { CanActivate,
         Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { AuthenticationSvc }         from  '../../app/services/AuthenticationSvc'; 

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthenticationSvc, private router: Router) {}

  canActivate(
    // Not using but worth knowing about
    next:  ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.authService._isLoggedIn()) { return true; }
    this.router.navigate(['/login']);
    return false;
  }
}