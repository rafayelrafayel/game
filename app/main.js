System.register(['@angular/platform-browser-dynamic', './components/app', './routes/app-routes', './helpers/route-guard', './services/StorageSvc', '@angular/http', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_1, app_routes_1, route_guard_1, StorageSvc_1, http_1, core_1, core_2;
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
            function (StorageSvc_1_1) {
                StorageSvc_1 = StorageSvc_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            core_2.enableProdMode();
            platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
                app_routes_1.APP_ROUTER_PROVIDERS, route_guard_1.AuthGuard, StorageSvc_1.StorageSvc, http_1.HTTP_BINDINGS, core_1.provide(Window, { useValue: window })
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map