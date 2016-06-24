System.register(['@angular/platform-browser-dynamic', './components/app', './routes/app-routes', './helpers/route-guard', './services/AuthenticationSvc', '@angular/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_1, app_routes_1, route_guard_1, AuthenticationSvc_1, http_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (route_guard_1_1) {
                route_guard_1 = route_guard_1_1;
            },
            function (AuthenticationSvc_1_1) {
                AuthenticationSvc_1 = AuthenticationSvc_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
                app_routes_1.APP_ROUTER_PROVIDERS, route_guard_1.AuthGuard, AuthenticationSvc_1.AuthenticationSvc, http_1.HTTP_BINDINGS
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map