System.register(['@angular/router', '../../app/components/login', '../../app/components/lottery'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_1, lottery_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (lottery_1_1) {
                lottery_1 = lottery_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: login_1.LoginComponent },
                { path: 'login', component: login_1.LoginComponent },
                { path: 'lottery', component: lottery_1.LotteryComponent },
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app-routes.js.map