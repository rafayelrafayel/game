System.register(['@angular/core', '../../app/helpers/route-guard'], function(exports_1, context_1) {
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
    var core_1, route_guard_1;
    var LotteryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (route_guard_1_1) {
                route_guard_1 = route_guard_1_1;
            }],
        execute: function() {
            LotteryComponent = (function () {
                function LotteryComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], LotteryComponent.prototype, "hero", void 0);
                LotteryComponent = __decorate([
                    core_1.Component({
                        selector: 'lottery-selector',
                        templateUrl: '../../app/views/lottery/index.html',
                        providers: [route_guard_1.AuthGuard]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LotteryComponent);
                return LotteryComponent;
            }());
            exports_1("LotteryComponent", LotteryComponent);
        }
    }
});
//# sourceMappingURL=lottery.js.map