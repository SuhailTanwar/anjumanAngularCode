import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Auth } from 'aws-amplify'

@Injectable({
    providedIn: 'root'
})
export class AuthenticateUser implements CanActivate {

    constructor(private router: Router) { }
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const session = await Auth.currentSession().then(data => {
            return true;
        }).catch(err => {
            this.router.navigateByUrl('/login')
            return false;
        })
        return session;

    }
}
