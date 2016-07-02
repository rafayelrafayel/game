import { Component, Input, OnInit } from '@angular/core';
import {jackpotUserInterface, jackpotInfoInterface, jackpotStakesInterface } from '../../app/classes/jackpotUserInterface';

import {JackpotSvc} from '../../app/services/JackpotSvc';


declare var jQuery: any;

@Component({
    selector: 'jackpot-selector',
    templateUrl: 'app/views/jackpot/index.html',
    providers: [JackpotSvc]
})
export class JackpotComponent implements OnInit {

    private users: any;
    private prevActions: Object;
    private winnerInfo: jackpotUserInterface = {
        id: 0,
        name: '',
        cost: 0,
        currency: ''
    };

    private jackpotInfo: jackpotInfoInterface = {
        fee: 0,
        entries: 0,
        total: 0,
        currency: ''
    }


    private lowStakeInfo: jackpotStakesInterface = {
        name: '',
        current_pot: 0,
        more_to_go: 0,
        currency: ''
    }

    private highStakeInfo: jackpotStakesInterface = {
        name: '',
        current_pot: 0,
        more_to_go: 0,
        currency: ''
    }

    constructor(private Jackpot: JackpotSvc) { }


    public getUsers(): Promise<jackpotUserInterface[]> {
        return this.Jackpot.getJackpotUsers().then(
            users => this.users = users
        );
    }

    public getPreviousAction(): Promise<jackpotUserInterface[]> {
        return this.Jackpot.getPreviousAction().then(
            prevActions => this.prevActions = prevActions
        );
    }

    public getWinnerInfo(): Promise<jackpotUserInterface[]> {
        return this.Jackpot.getWinnerInfo().then(winner => this.winnerInfo = winner['0']);
    }

    public getJackpotInfo(): Promise<jackpotInfoInterface> {
        return this.Jackpot.getjackPotInfo().then(data => this.jackpotInfo = data);
    }
    
    public getLowStakeInfo(): Promise<jackpotStakesInterface> {
        return this.Jackpot.getLowStakeInfo().then(data => this.lowStakeInfo = data);
    }
    
     public getHighStakeInfo(): Promise<jackpotStakesInterface> {
         return this.Jackpot.getHighStakeInfo().then(data => this.highStakeInfo = data);
    }

    ngOnInit() {

        this.getUsers();
        this.getPreviousAction();
        this.getWinnerInfo();
        this.getJackpotInfo();
        this.getLowStakeInfo();
        this.getHighStakeInfo();


        jQuery(document).ready(function() {
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
                            top = (-90 * (index+1)).toString();
                            $("div.select-winner").animate({top: top}, duration, 'easeOutExpo', function() {
                                var winner = $("div.participants").children('div').eq(index);
                                $("div.winner .circle-winner").css("background-image", "url("+winner.find("img").attr("src")+")");
                                $("div.win-info span.name").text(winner.find("span.name").text());
                                $("div.winner").delay(1000).fadeIn(300, function(){
                                    w.play();
                                    $("div.select-winner > div").slice(-max+1).remove();
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
    }
}
