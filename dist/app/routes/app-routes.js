System.register(['@angular/router', '../../app/components/login', '../../app/components/lottery', '../../app/components/spin', '../../app/components/treasure', '../../app/components/jackpot', '../../app/helpers/route-guard'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, login_1, lottery_1, spin_1, treasure_1, jackpot_1, route_guard_1;
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
            },
            function (spin_1_1) {
                spin_1 = spin_1_1;
            },
            function (treasure_1_1) {
                treasure_1 = treasure_1_1;
            },
            function (jackpot_1_1) {
                jackpot_1 = jackpot_1_1;
            },
            function (route_guard_1_1) {
                route_guard_1 = route_guard_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', component: login_1.LoginComponent },
                { path: 'login', component: login_1.LoginComponent },
                { path: 'lottery', component: lottery_1.LotteryComponent, canActivate: [route_guard_1.AuthGuard] },
                { path: 'treasure', component: treasure_1.TreasureComponent, canActivate: [route_guard_1.AuthGuard] },
                { path: 'spin', component: spin_1.SpinComponent, canActivate: [route_guard_1.AuthGuard] },
                { path: 'jackpot', component: jackpot_1.JackpotComponent, canActivate: [route_guard_1.AuthGuard] },
            ]);
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});

//# sourceMappingURL=app-routes.js.map
