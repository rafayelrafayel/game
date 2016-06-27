// user.service.ts
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {apiUrl} from '../../app/constants/api-url';
import { Http, Headers, Response } from '@angular/http';
import {Router}    from '@angular/router';
//import localStorage from 'localStorage';

@Injectable()
export class AuthenticationSvc {


    constructor(private http: Http, private router: Router) {
        // this.loggedIn = !!localStorage.getItem('auth_token');
    }

    


    public isLoggedIn(requestData: Object = {}): Observable<boolean> | boolean {
        let router: Router = this.router;
        let obs;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');


        try {
            obs = this.http.post(apiUrl.login,
                JSON.stringify(requestData),
                { headers })
                .map(this.success)
                .catch(this.error);

        } catch (err) {
            obs = Observable.of(false);
        }

        return obs
            .map(success => {
                // navigate to login page
                if (!success)
                    router.navigate(['/auth/login']);

                return success;
            });
    }

    public logout() {
        //  localStorage.removeItem('auth_token');
        //this.isLoggedIn = true;
    }

    public _isLoggedIn() {
        return true;
    }

    public check() {
        return Observable.of(this.isLoggedIn);
    }

    private success(res: Response) {
        let body = res.json();
        console.log(body);
        //return body.data || {};
    }
    private error(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}