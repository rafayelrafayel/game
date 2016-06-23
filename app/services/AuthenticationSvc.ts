// user.service.ts
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {apiUrl} from '../../app/constants/api-url';
import { Http, Headers, Response } from '@angular/http';
//import localStorage from 'localStorage';

@Injectable()
export class AuthenticationSvc {
    private isLoggedIn = false;

    constructor(private http: Http) {
        // this.loggedIn = !!localStorage.getItem('auth_token');
    }

    public login(requestData: Object = {}): Observable<any> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(
            apiUrl.login,
            JSON.stringify(requestData),
            { headers }
            )
            .map(this.success)
            .catch(this.error);
    }

    public logout() {
        //  localStorage.removeItem('auth_token');
        this.isLoggedIn = true;
    }

    public _isLoggedIn() {
        return this.isLoggedIn;
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