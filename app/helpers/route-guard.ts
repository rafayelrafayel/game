import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


import { StorageSvc } from '../../app/services/StorageSvc';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private storage: StorageSvc, private router: Router) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.storage.isNotEmpty()) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}