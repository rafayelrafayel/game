System.register(['@angular/core', 'rxjs/Rx', '../../app/constants/api-url', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1, api_url_1, http_1;
    var AuthenticationSvc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (api_url_1_1) {
                api_url_1 = api_url_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            //import localStorage from 'localStorage';
            AuthenticationSvc = (function () {
                function AuthenticationSvc(http) {
                    this.http = http;
                    this.isLoggedIn = false;
                    // this.loggedIn = !!localStorage.getItem('auth_token');
                }
                AuthenticationSvc.prototype.login = function (requestData) {
                    if (requestData === void 0) { requestData = {}; }
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.http
                        .post(api_url_1.apiUrl.login, JSON.stringify(requestData), { headers: headers })
                        .map(this.success)
                        .catch(this.error);
                };
                AuthenticationSvc.prototype.logout = function () {
                    //  localStorage.removeItem('auth_token');
                    this.isLoggedIn = true;
                };
                AuthenticationSvc.prototype._isLoggedIn = function () {
                    return this.isLoggedIn;
                };
                AuthenticationSvc.prototype.success = function (res) {
                    var body = res.json();
                    console.log(body);
                    //return body.data || {};
                };
                AuthenticationSvc.prototype.error = function (error) {
                    var errMsg = (error.message) ? error.message :
                        error.status ? error.status + " - " + error.statusText : 'Server error';
                    console.error(errMsg); // log to console instead
                    return Rx_1.Observable.throw(errMsg);
                };
                AuthenticationSvc = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthenticationSvc);
                return AuthenticationSvc;
            }());
            exports_1("AuthenticationSvc", AuthenticationSvc);
        }
    }
});
//# sourceMappingURL=AuthenticationSvc.js.map