System.register(['@angular/core', '../../app/services/JackpotSvc'], function(exports_1, context_1) {
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
    var core_1, JackpotSvc_1;
    var JackpotComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
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
                            var h = $("div.select-winner").height();
                            var el = $("div.select-winner");
                            var duration = 7000;
                            var playes_count = el.children().length;
                            var step = el.children().height();
                            $("div.select-winner > *").clone().appendTo($("div.select-winner"));
                            var index = 0;
                            var duration = 50;
                            var top = -$("div.select-winner").height() + 180;
                            function loop(duration, top) {
                                $("div.select-winner").css('top', top);
                                for (var i = 0; i <= 30; i++) {
                                    if (i == 30) {
                                        var a = (Math.floor(Math.random() * (playes_count - 1)) - 1) + playes_count;
                                        duration = 2000;
                                        top = -step * a;
                                        setTimeout(function () {
                                            $("div.winner").fadeIn(300);
                                            $("div.winner .circle-winner").css("background-image", "url(" + el.children().eq(a + 1).find("img").attr("src") + ")");
                                            $("#enter-jackpot").prop('disabled', false);
                                        }, 30 * 50 * 2 + 3500);
                                    }
                                    $("div.select-winner").animate({ top: top }, duration, 'easeOutExpo');
                                    if (i != 30) {
                                        $("div.select-winner").animate({ top: 0 }, duration);
                                    }
                                }
                            }
                            $("#enter-jackpot").click(function (e) {
                                $(this).prop('disabled', true);
                                e.preventDefault();
                                $("div.winner").hide();
                                $(".circle-winner").css("visibility", "visible");
                                $("div.circle-winner").show();
                                loop(duration, top);
                            });
                        })(jQuery);
                    });
                };
                JackpotComponent = __decorate([
                    core_1.Component({
                        selector: 'jackpot-selector',
                        templateUrl: 'app/views/jackpot/index.html',
                        providers: [JackpotSvc_1.JackpotSvc]
                    }), 
                    __metadata('design:paramtypes', [JackpotSvc_1.JackpotSvc])
                ], JackpotComponent);
                return JackpotComponent;
            }());
            exports_1("JackpotComponent", JackpotComponent);
        }
    }
});
//# sourceMappingURL=jackpot.js.map