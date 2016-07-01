System.register(["@angular/core", '../../app/mocks/lottery-user-mocks'], function(exports_1, context_1) {
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
    var core_1, lottery_user_mocks_1;
    var LotterySvc;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (lottery_user_mocks_1_1) {
                lottery_user_mocks_1 = lottery_user_mocks_1_1;
            }],
        execute: function() {
            LotterySvc = (function () {
                function LotterySvc() {
                }
                LotterySvc.prototype.getLotteryUsers = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(lottery_user_mocks_1.lotteryUsers); }, 500);
                    } // 0.5 seconds
                     // 0.5 seconds
                    );
                };
                LotterySvc.prototype.getLotteryInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(lottery_user_mocks_1.lotteryInfo); }, 800);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                LotterySvc.prototype.getMisteryLotteryInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(lottery_user_mocks_1.misterInfo); }, 1000);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                LotterySvc.prototype.getWeekInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(lottery_user_mocks_1.weekInfo); }, 400);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                LotterySvc.prototype.getMonthInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(lottery_user_mocks_1.monthlyInfo); }, 300);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                LotterySvc = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LotterySvc);
                return LotterySvc;
            }());
            exports_1("LotterySvc", LotterySvc);
        }
    }
});
//# sourceMappingURL=LotterySvc.js.map