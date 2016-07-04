var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("classes/hero", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("components/detail", ['@angular/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_1;
    var HeroDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroDetailComponent = (function () {
                function HeroDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], HeroDetailComponent.prototype, "hero", void 0);
                HeroDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-hero-detail',
                        template: "\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div><label>id: </label>{{hero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailComponent);
                return HeroDetailComponent;
            }());
            exports_2("HeroDetailComponent", HeroDetailComponent);
        }
    }
});
System.register("mocks/hero-provider", [], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var HEROES;
    return {
        setters:[],
        execute: function() {
            exports_3("HEROES", HEROES = [
                { id: 11, name: 'Mr. Nice' },
                { id: 12, name: 'Narco' },
                { id: 13, name: 'Bombasto' },
                { id: 14, name: 'Celeritas' },
                { id: 15, name: 'Magneta' },
                { id: 16, name: 'RubberMan' },
                { id: 17, name: 'Dynama' },
                { id: 18, name: 'Dr IQ' },
                { id: 19, name: 'Magma' },
                { id: 20, name: 'Tornado' }
            ]);
        }
    }
});
System.register("services/HeroSvc", ['@angular/core', "mocks/hero-provider"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var core_2, hero_provider_1;
    var HeroService;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (hero_provider_1_1) {
                hero_provider_1 = hero_provider_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService() {
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(hero_provider_1.HEROES);
                };
                // See the "Take it slow" appendix
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(hero_provider_1.HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                HeroService = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], HeroService);
                return HeroService;
            }());
            exports_4("HeroService", HeroService);
        }
    }
});
System.register("services/StorageSvc", ['@angular/core'], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var core_3;
    var StorageSvc;
    return {
        setters:[
            function (core_3_1) {
                core_3 = core_3_1;
            }],
        execute: function() {
            StorageSvc = (function () {
                function StorageSvc(window) {
                    this.window = window;
                }
                StorageSvc.prototype.isNotEmpty = function () {
                    if (this.window.sessionStorage.hasOwnProperty('userInfo') && this.window.sessionStorage['userInfo'] !== 'null') {
                        return true;
                    }
                    return true;
                };
                StorageSvc.prototype.getStorage = function () {
                    if (this.window.sessionStorage.hasOwnProperty('userInfo') && this.window.sessionStorage['userInfo'] !== 'null') {
                        return JSON.parse(this.window.sessionStorage['userInfo']);
                    }
                    return {};
                };
                StorageSvc.prototype.removeStorage = function () {
                    this.window.sessionStorage['userInfo'] = null;
                    return true;
                };
                StorageSvc.prototype.getProperty = function (name, from) {
                    var name = name || null, from = from || null;
                    var stoarageInfo = this.getStorage();
                    if (typeof stoarageInfo === 'object') {
                        if (name !== null) {
                            if (from === null) {
                                return stoarageInfo[name];
                            }
                            else if (stoarageInfo.hasOwnProperty(from)) {
                                return stoarageInfo[from][name];
                            }
                        }
                    }
                    return null;
                };
                StorageSvc = __decorate([
                    core_3.Injectable(), 
                    __metadata('design:paramtypes', [Window])
                ], StorageSvc);
                return StorageSvc;
            }());
            exports_5("StorageSvc", StorageSvc);
        }
    }
});
System.register("helpers/route-guard", ['@angular/core', '@angular/router', "services/StorageSvc"], function(exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var core_4, router_1, StorageSvc_1;
    var AuthGuard;
    return {
        setters:[
            function (core_4_1) {
                core_4 = core_4_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (StorageSvc_1_1) {
                StorageSvc_1 = StorageSvc_1_1;
            }],
        execute: function() {
            AuthGuard = (function () {
                function AuthGuard(storage, router) {
                    this.storage = storage;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (this.storage.isNotEmpty()) {
                        return true;
                    }
                    this.router.navigate(['login']);
                    return false;
                };
                AuthGuard = __decorate([
                    core_4.Injectable(), 
                    __metadata('design:paramtypes', [StorageSvc_1.StorageSvc, router_1.Router])
                ], AuthGuard);
                return AuthGuard;
            }());
            exports_6("AuthGuard", AuthGuard);
        }
    }
});
System.register("components/app", ['@angular/core', '@angular/router', "services/HeroSvc", "services/StorageSvc"], function(exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var core_5, router_2, HeroSvc_1, StorageSvc_2;
    var AppComponent;
    return {
        setters:[
            function (core_5_1) {
                core_5 = core_5_1;
            },
            function (router_2_1) {
                router_2 = router_2_1;
            },
            function (HeroSvc_1_1) {
                HeroSvc_1 = HeroSvc_1_1;
            },
            function (StorageSvc_2_1) {
                StorageSvc_2 = StorageSvc_2_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(heroService, storage) {
                    this.heroService = heroService;
                    this.storage = storage;
                    this.loggedIn = true;
                    this.title = 'Tour oof Heroes';
                }
                AppComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this.heroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.loggedIn = this.storage.isNotEmpty();
                    this.getHeroes();
                };
                AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                AppComponent = __decorate([
                    core_5.Component({
                        selector: 'my-app',
                        templateUrl: 'app/views/index/index.html',
                        directives: [router_2.ROUTER_DIRECTIVES],
                        providers: [HeroSvc_1.HeroService, StorageSvc_2.StorageSvc]
                    }), 
                    __metadata('design:paramtypes', [HeroSvc_1.HeroService, StorageSvc_2.StorageSvc])
                ], AppComponent);
                return AppComponent;
            }());
            exports_7("AppComponent", AppComponent);
        }
    }
});
System.register("components/login", ['@angular/core', "services/StorageSvc"], function(exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var core_6, StorageSvc_3;
    var LoginComponent;
    return {
        setters:[
            function (core_6_1) {
                core_6 = core_6_1;
            },
            function (StorageSvc_3_1) {
                StorageSvc_3 = StorageSvc_3_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(storage) {
                    this.storage = storage;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    console.log(this.storage.isNotEmpty());
                };
                LoginComponent = __decorate([
                    core_6.Component({
                        selector: 'login-selector',
                        templateUrl: 'app/views/index/login.html',
                        providers: [StorageSvc_3.StorageSvc]
                    }), 
                    __metadata('design:paramtypes', [StorageSvc_3.StorageSvc])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_8("LoginComponent", LoginComponent);
        }
    }
});
System.register("classes/lotteryInterface", [], function(exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mocks/lottery-user-mocks", [], function(exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var lotteryUsers, lotteryInfo, misterInfo, weekInfo, monthlyInfo;
    return {
        setters:[],
        execute: function() {
            exports_10("lotteryUsers", lotteryUsers = [
                { id: 11, name: 'Maynard Canchola', cost: 140, image: './images/arrow.png', currency: "M" },
                { id: 12, name: 'Dakota Heins', cost: 140, image: './images/arrow.png', currency: "M" },
                { id: 13, name: 'Lela Cairns', cost: 131, image: './images/arrow.png', currency: "M" },
                { id: 14, name: 'Carli Gran', cost: 160, image: './images/arrow.png', currency: "M" },
                { id: 15, name: 'Odette Wickert', cost: 150, image: './images/arrow.png', currency: "M" },
                { id: 16, name: 'Eura Hoeppner', cost: 190, image: './images/arrow.png', currency: "M" },
                { id: 17, name: 'Kirsten Trader', cost: 120, image: './images/arrow.png', currency: "M" },
                { id: 18, name: 'Rolanda Toenjes', cost: 110, image: './images/arrow.png', currency: "M" },
                { id: 19, name: 'Ara Sayre', cost: 130, image: './images/arrow.png', currency: "M" },
                { id: 20, name: 'Emilee Brandl', cost: 180, image: './images/arrow.png', currency: "M" }
            ]);
            exports_10("lotteryInfo", lotteryInfo = {
                total_mistery: 1000,
                ticket_avialable: 1000,
                ticket_owned: 1000,
                winning_balance: 0,
                ticket: 150
            });
            exports_10("misterInfo", misterInfo = {
                name: "Mistery Lottery",
                prize: 45,
                date: "5:11:22"
            });
            exports_10("weekInfo", weekInfo = {
                name: "Weekly Lottery",
                prize: 700,
                date: "5:11:22"
            });
            exports_10("monthlyInfo", monthlyInfo = {
                name: "Montly Lottery",
                prize: 1.3,
                date: "5:11:22"
            });
        }
    }
});
System.register("services/LotterySvc", ["@angular/core", "mocks/lottery-user-mocks"], function(exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var core_7, lottery_user_mocks_1;
    var LotterySvc;
    return {
        setters:[
            function (core_7_1) {
                core_7 = core_7_1;
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
                    core_7.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LotterySvc);
                return LotterySvc;
            }());
            exports_11("LotterySvc", LotterySvc);
        }
    }
});
System.register("components/lottery", ['@angular/core', "services/LotterySvc"], function(exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var core_8, LotterySvc_1;
    var LotteryComponent;
    return {
        setters:[
            function (core_8_1) {
                core_8 = core_8_1;
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
                    core_8.Component({
                        selector: 'lottery-selector',
                        templateUrl: 'app/views/lottery/index.html',
                        providers: [LotterySvc_1.LotterySvc]
                    }), 
                    __metadata('design:paramtypes', [LotterySvc_1.LotterySvc])
                ], LotteryComponent);
                return LotteryComponent;
            }());
            exports_12("LotteryComponent", LotteryComponent);
        }
    }
});
System.register("classes/jackpotUserInterface", [], function(exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("mocks/jackpot-user-mock", [], function(exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var jackpotUsers, jackpotPreviuosActions, winnerInfo, jackpotInfo, lowStakeInfo, highStakeInfo;
    return {
        setters:[],
        execute: function() {
            exports_14("jackpotUsers", jackpotUsers = [
                { id: 11, name: 'Maynard Canchola', cost: 140, image: './images/man-1.png', currency: "usd" },
                { id: 12, name: 'Dakota Heins', cost: 140, image: './images/man-2.png', currency: "usd" },
                { id: 13, name: 'Lela Cairns', cost: 131, image: './images/man-1.png', currency: "usd" },
                { id: 14, name: 'Carli Gran', cost: 160, image: './images/man-2.png', currency: "usd" },
                { id: 15, name: 'Odette Wickert', cost: 150, image: './images/man-1.png', currency: "usd" },
                { id: 16, name: 'Eura Hoeppner', cost: 190, image: './images/man-2.png', currency: "usd" },
                { id: 17, name: 'Kirsten Trader', cost: 120, image: './images/man-1.png', currency: "usd" },
                { id: 18, name: 'Rolanda Toenjes', cost: 110, image: './images/man-2.png', currency: "usd" },
                { id: 19, name: 'Ara Sayre', cost: 130, image: './images/man-1.png', currency: "usd" },
                { id: 20, name: 'Emilee Brandl', cost: 180, image: './images/man-2.png', currency: "usd" }
            ]);
            exports_14("jackpotPreviuosActions", jackpotPreviuosActions = [
                { id: 11, name: 'Maynard Canchola', cost: 40, currency: "usd" },
                { id: 12, name: 'Dakota Heins', cost: 80, currency: "usd" },
                { id: 13, name: 'Lela Cairns', cost: 126, currency: "usd" },
            ]);
            exports_14("winnerInfo", winnerInfo = [
                { id: 20, name: 'Emilee Brandl', cost: 15.5, currency: "m" },
            ]);
            exports_14("jackpotInfo", jackpotInfo = {
                fee: 150,
                entries: 1500,
                total: 1350,
                currency: 'usd'
            });
            exports_14("lowStakeInfo", lowStakeInfo = {
                name: 'Lowstakes',
                current_pot: 15,
                more_to_go: 6,
                currency: 'usd'
            });
            exports_14("highStakeInfo", highStakeInfo = {
                name: 'Highstakes',
                current_pot: 156,
                more_to_go: 6,
                currency: 'usd'
            });
        }
    }
});
System.register("services/JackpotSvc", ["@angular/core", "mocks/jackpot-user-mock"], function(exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var core_9, jackpot_user_mock_1;
    var JackpotSvc;
    return {
        setters:[
            function (core_9_1) {
                core_9 = core_9_1;
            },
            function (jackpot_user_mock_1_1) {
                jackpot_user_mock_1 = jackpot_user_mock_1_1;
            }],
        execute: function() {
            JackpotSvc = (function () {
                function JackpotSvc() {
                }
                JackpotSvc.prototype.getJackpotUsers = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(jackpot_user_mock_1.jackpotUsers); }, 500);
                    } // 0.5 seconds
                     // 0.5 seconds
                    );
                };
                JackpotSvc.prototype.getPreviousAction = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(jackpot_user_mock_1.jackpotPreviuosActions); }, 1000);
                    } // 1 seconds
                     // 1 seconds
                    );
                };
                JackpotSvc.prototype.getWinnerInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(jackpot_user_mock_1.winnerInfo); }, 100);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                JackpotSvc.prototype.getjackPotInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(jackpot_user_mock_1.jackpotInfo); }, 200);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                JackpotSvc.prototype.getHighStakeInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(jackpot_user_mock_1.highStakeInfo); }, 300);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                JackpotSvc.prototype.getLowStakeInfo = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(jackpot_user_mock_1.lowStakeInfo); }, 300);
                    } // 0.1 seconds
                     // 0.1 seconds
                    );
                };
                JackpotSvc = __decorate([
                    core_9.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], JackpotSvc);
                return JackpotSvc;
            }());
            exports_15("JackpotSvc", JackpotSvc);
        }
    }
});
System.register("components/jackpot", ['@angular/core', "services/JackpotSvc"], function(exports_16, context_16) {
    "use strict";
    var __moduleName = context_16 && context_16.id;
    var core_10, JackpotSvc_1;
    var JackpotComponent;
    return {
        setters:[
            function (core_10_1) {
                core_10 = core_10_1;
            },
            function (JackpotSvc_1_1) {
                JackpotSvc_1 = JackpotSvc_1_1;
            }],
        execute: function() {
            JackpotComponent = (function () {
                function JackpotComponent(Jackpot) {
                    this.Jackpot = Jackpot;
                    this.winnerInfo = {
                        id: 0,
                        name: '',
                        cost: 0,
                        currency: ''
                    };
                    this.jackpotInfo = {
                        fee: 0,
                        entries: 0,
                        total: 0,
                        currency: ''
                    };
                    this.lowStakeInfo = {
                        name: '',
                        current_pot: 0,
                        more_to_go: 0,
                        currency: ''
                    };
                    this.highStakeInfo = {
                        name: '',
                        current_pot: 0,
                        more_to_go: 0,
                        currency: ''
                    };
                }
                JackpotComponent.prototype.getUsers = function () {
                    var _this = this;
                    return this.Jackpot.getJackpotUsers().then(function (users) { return _this.users = users; });
                };
                JackpotComponent.prototype.getPreviousAction = function () {
                    var _this = this;
                    return this.Jackpot.getPreviousAction().then(function (prevActions) { return _this.prevActions = prevActions; });
                };
                JackpotComponent.prototype.getWinnerInfo = function () {
                    var _this = this;
                    return this.Jackpot.getWinnerInfo().then(function (winner) { return _this.winnerInfo = winner['0']; });
                };
                JackpotComponent.prototype.getJackpotInfo = function () {
                    var _this = this;
                    return this.Jackpot.getjackPotInfo().then(function (data) { return _this.jackpotInfo = data; });
                };
                JackpotComponent.prototype.getLowStakeInfo = function () {
                    var _this = this;
                    return this.Jackpot.getLowStakeInfo().then(function (data) { return _this.lowStakeInfo = data; });
                };
                JackpotComponent.prototype.getHighStakeInfo = function () {
                    var _this = this;
                    return this.Jackpot.getHighStakeInfo().then(function (data) { return _this.highStakeInfo = data; });
                };
                JackpotComponent.prototype.ngOnInit = function () {
                    this.getUsers();
                    this.getPreviousAction();
                    this.getWinnerInfo();
                    this.getJackpotInfo();
                    this.getLowStakeInfo();
                    this.getHighStakeInfo();
                    jQuery(document).ready(function () {
                        (function ($) {
                            var counter = 0;
                            var top = "";
                            var sample = new Audio("sounds/slot_jackpot.mp3");
                            var w = new Audio("sounds/bell_ring.mp3");
                            function slot() {
                                var duration = 100;
                                $("div.select-winner").animate({
                                    top: -$("div.select-winner").height(),
                                }, duration, function () {
                                    $(this).css('top', 0);
                                    counter++;
                                    if (counter < 10 * 7) {
                                        slot();
                                    }
                                    else {
                                        $("div.select-winner").css('top', -$("div.select-winner").height() + 3 * 90);
                                        var max = $("div.select-winner").children('div').length / 2 - 1;
                                        var min = 0;
                                        var index = Math.floor(Math.random() * (max - min + 1)) + min;
                                        duration = 2500;
                                        top = (-90 * (index + 1)).toString();
                                        $("div.select-winner").animate({ top: top }, duration, 'easeOutExpo', function () {
                                            var winner = $("div.participants").children('div').eq(index);
                                            $("div.winner .circle-winner").css("background-image", "url(" + winner.find("img").attr("src") + ")");
                                            $("div.win-info span.name").text(winner.find("span.name").text());
                                            $("div.winner").delay(1000).fadeIn(300, function () {
                                                w.play();
                                                $("div.select-winner > div").slice(-max - 1).remove();
                                                $("div.select-winner").css('top', 0);
                                                $("#enter-jackpot").prop('disabled', false);
                                                counter = 0;
                                            });
                                        });
                                    }
                                });
                            }
                            function enterJackpot() {
                                $("div.select-winner > *").clone().appendTo($("div.select-winner"));
                                sample.play();
                                slot();
                                $("div.winner").hide();
                                $(".circle-winner").css("visibility", "visible");
                                $("div.circle-winner").show();
                            }
                            $("#enter-jackpot").click(function (e) {
                                $(this).prop('disabled', true);
                                e.preventDefault();
                                enterJackpot();
                            });
                        })(jQuery);
                    });
                };
                JackpotComponent = __decorate([
                    core_10.Component({
                        selector: 'jackpot-selector',
                        templateUrl: 'app/views/jackpot/index.html',
                        providers: [JackpotSvc_1.JackpotSvc]
                    }), 
                    __metadata('design:paramtypes', [JackpotSvc_1.JackpotSvc])
                ], JackpotComponent);
                return JackpotComponent;
            }());
            exports_16("JackpotComponent", JackpotComponent);
        }
    }
});
System.register("routes/app-routes", ['@angular/router', "components/login", "components/lottery", "components/jackpot", "helpers/route-guard"], function(exports_17, context_17) {
    "use strict";
    var __moduleName = context_17 && context_17.id;
    var router_3, login_1, lottery_1, jackpot_1, route_guard_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_3_1) {
                router_3 = router_3_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (lottery_1_1) {
                lottery_1 = lottery_1_1;
            },
            function (jackpot_1_1) {
                jackpot_1 = jackpot_1_1;
            },
            function (route_guard_1_1) {
                route_guard_1 = route_guard_1_1;
            }],
        execute: function() {
            exports_17("routes", routes = [
                { path: '', component: login_1.LoginComponent },
                { path: 'login', component: login_1.LoginComponent },
                { path: 'lottery', component: lottery_1.LotteryComponent, canActivate: [route_guard_1.AuthGuard] },
                { path: 'jackpot', component: jackpot_1.JackpotComponent, canActivate: [route_guard_1.AuthGuard] },
            ]);
            exports_17("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_3.provideRouter(routes)
            ]);
        }
    }
});
System.register("main", ['@angular/platform-browser-dynamic', "components/app", "routes/app-routes", "helpers/route-guard", "services/StorageSvc", '@angular/http', '@angular/core'], function(exports_18, context_18) {
    "use strict";
    var __moduleName = context_18 && context_18.id;
    var platform_browser_dynamic_1, app_1, app_routes_1, route_guard_2, StorageSvc_4, http_1, core_11;
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
            function (route_guard_2_1) {
                route_guard_2 = route_guard_2_1;
            },
            function (StorageSvc_4_1) {
                StorageSvc_4 = StorageSvc_4_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_11_1) {
                core_11 = core_11_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_1.AppComponent, [
                app_routes_1.APP_ROUTER_PROVIDERS, route_guard_2.AuthGuard, StorageSvc_4.StorageSvc, http_1.HTTP_BINDINGS, core_11.provide(Window, { useValue: window })
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
System.register("constants/api-url", [], function(exports_19, context_19) {
    "use strict";
    var __moduleName = context_19 && context_19.id;
    var apiUrl;
    return {
        setters:[],
        execute: function() {
            exports_19("apiUrl", apiUrl = {
                login: '../backend/login',
                logout: ''
            });
        }
    }
});
System.register("services/AuthenticationSvc", ['@angular/core', 'rxjs/Rx', "constants/api-url", '@angular/http', '@angular/router', "services/StorageSvc"], function(exports_20, context_20) {
    "use strict";
    var __moduleName = context_20 && context_20.id;
    var core_12, Rx_1, api_url_1, http_2, router_4, StorageSvc_5;
    var AuthenticationSvc;
    return {
        setters:[
            function (core_12_1) {
                core_12 = core_12_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (api_url_1_1) {
                api_url_1 = api_url_1_1;
            },
            function (http_2_1) {
                http_2 = http_2_1;
            },
            function (router_4_1) {
                router_4 = router_4_1;
            },
            function (StorageSvc_5_1) {
                StorageSvc_5 = StorageSvc_5_1;
            }],
        execute: function() {
            AuthenticationSvc = (function () {
                function AuthenticationSvc(http, router, storage) {
                    this.http = http;
                    this.router = router;
                    this.storage = storage;
                }
                AuthenticationSvc.prototype.login = function (requestData) {
                    if (requestData === void 0) { requestData = {}; }
                    var router = this.router;
                    var obs;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/json');
                    try {
                        obs = this.http.post(api_url_1.apiUrl.login, JSON.stringify(requestData), { headers: headers })
                            .map(this.success)
                            .catch(this.error);
                    }
                    catch (err) {
                        obs = Rx_1.Observable.of(false);
                    }
                    return obs
                        .map(this.success);
                };
                AuthenticationSvc.prototype.logout = function () {
                    this.storage.removeStorage();
                    //this.isLoggedIn = true;
                };
                AuthenticationSvc.prototype._isLoggedIn = function () {
                    return true;
                };
                AuthenticationSvc.prototype.check = function () {
                    return Rx_1.Observable.of(this.login);
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
                    core_12.Injectable(), 
                    __metadata('design:paramtypes', [http_2.Http, router_4.Router, StorageSvc_5.StorageSvc])
                ], AuthenticationSvc);
                return AuthenticationSvc;
            }());
            exports_20("AuthenticationSvc", AuthenticationSvc);
        }
    }
});
//# sourceMappingURL=test.js.map