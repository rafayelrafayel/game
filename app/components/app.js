System.register(['@angular/core', '@angular/router', '../../app/services/HeroSvc', '../../app/helpers/route-guard'], function(exports_1, context_1) {
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
    var core_1, router_1, HeroSvc_1, route_guard_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (HeroSvc_1_1) {
                HeroSvc_1 = HeroSvc_1_1;
            },
            function (route_guard_1_1) {
                route_guard_1 = route_guard_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(heroService) {
                    this.heroService = heroService;
                    this.title = 'Tour oof Heroes';
                }
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <h1 class=\"title\">Component Router</h1>\n    <nav>\n      <a [routerLink]=\"['/login']\">Login</a>\n      <a [routerLink]=\"['/lottery']\">Lottery</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [HeroSvc_1.HeroService, route_guard_1.AuthGuard]
                    }), 
                    __metadata('design:paramtypes', [HeroSvc_1.HeroService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.js.map