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
                            var counter = 0;
                            var top = "";
                            var sample = new Audio("/sounds/slot_jackpot.mp3");
                            var w = new Audio("/sounds/bell_ring.mp3");
                            function slot() {
                                var duration = 100;
                                $("div.select-winner").animate({
                                    top: -$("div.select-winner").height(),
                                },duration, function() {
                                    $(this).css('top', 0);
                                    counter++;
                                    if (counter < 10 * 7) {
                                        slot();
                                    } else {
                                        $("div.select-winner").css('top', -$("div.select-winner").height() + 3 * 90);
                                        var max = $("div.select-winner").children('div').length/2 - 1;
                                        var min = 0;
                                        var index = Math.floor(Math.random() * (max - min + 1)) + min;
                                        duration = 2500;
                                        top = -90 * (index+1);
                                        $("div.select-winner").animate({top: top}, duration, 'easeOutExpo', function() {
                                            var winner = $("div.participants").children('div').eq(index);
                                            $("div.winner .circle-winner").css("background-image", "url("+winner.find("img").attr("src")+")");
                                            $("div.win-info span.name").text(winner.find("span.name").text());
                                            $("div.winner").delay(1000).fadeIn(300, function(){
                                                w.play();
                                                $("div.select-winner > div").slice(-max-1).remove();
                                                $("div.select-winner").css('top',0);
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