System.register(['@angular/core', '../../app/services/LotterySvc'], function(exports_1, context_1) {
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
    var core_1, LotterySvc_1;
    var LotteryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (LotterySvc_1_1) {
                LotterySvc_1 = LotterySvc_1_1;
            }],
        execute: function() {
            LotteryComponent = (function () {
                function LotteryComponent(Lottery) {
                    this.Lottery = Lottery;
                    this.lotteryInfo = {
                        total_mistery: 0,
                        ticket_avialable: 0,
                        ticket_owned: 0,
                        winning_balance: 0,
                        ticket: 0
                    };
                    this.misterInfo = {
                        name: '',
                        prize: 0,
                        date: ''
                    };
                    this.weekInfo = {
                        name: '',
                        prize: 0,
                        date: ''
                    };
                    this.monthlyInfo = {
                        name: '',
                        prize: 0,
                        date: ''
                    };
                }
                LotteryComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                    this.getLotteryInfo();
                    this.getMisteryLotteryInfo();
                    this.getWeekInfo();
                    this.getMonthInfo();
                };
                LotteryComponent.prototype.getUsers = function () {
                    var _this = this;
                    return this.Lottery.getLotteryUsers().then(function (users) { return _this.users = users; });
                };
                LotteryComponent.prototype.getLotteryInfo = function () {
                    var _this = this;
                    return this.Lottery.getLotteryInfo().then(function (data) { return _this.lotteryInfo = data; });
                };
                LotteryComponent.prototype.getMisteryLotteryInfo = function () {
                    var _this = this;
                    return this.Lottery.getMisteryLotteryInfo().then(function (data) { return _this.misterInfo = data; });
                };
                LotteryComponent.prototype.getWeekInfo = function () {
                    var _this = this;
                    return this.Lottery.getWeekInfo().then(function (data) { return _this.weekInfo = data; });
                };
                LotteryComponent.prototype.getMonthInfo = function () {
                    var _this = this;
                    return this.Lottery.getMonthInfo().then(function (data) { return _this.monthlyInfo = data; });
                };
                LotteryComponent.prototype.setClasses = function (i) {
                    if (i >= 5) {
                        return "point_block text-center col-md-2 hidden";
                    }
                    return "point_block text-center col-md-2";
                };
                LotteryComponent = __decorate([
                    core_1.Component({
                        selector: 'lottery-selector',
                        templateUrl: 'app/views/lottery/index.html',
                        providers: [LotterySvc_1.LotterySvc]
                    }), 
                    __metadata('design:paramtypes', [LotterySvc_1.LotterySvc])
                ], LotteryComponent);
                return LotteryComponent;
            }());
            exports_1("LotteryComponent", LotteryComponent);
        }
    }
});
//# sourceMappingURL=lottery.js.map