import { Component, Input, OnInit } from '@angular/core';
import {jackpotUserInterface, jackpotInfoInterface, jackpotStakesInterface } from '../../app/classes/jackpotUserInterface';

import {JackpotSvc} from '../../app/services/JackpotSvc';


declare var jQuery: any;

@Component({
    selector: 'jackpot-selector',
    templateUrl: '../../app/views/jackpot/index.html',
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
            (function($) {
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
                    $("div.select-winner").css('top', top)
                    for (var i = 0; i <= 30; i++) {
                        if (i == 30) {
                            var a = (Math.floor(Math.random() * (playes_count - 1)) - 1) + playes_count;
                            duration = 2000;
                            top = -step * a;
                            setTimeout(function() {
                                $("div.winner").fadeIn(300);
                                $("div.winner .circle-winner").css("background-image", "url(" + el.children().eq(a + 1).find("img").attr("src") + ")");
                                $("#enter-jackpot").prop('disabled', false);
                            }, 30 * 50 * 2 + 3500)
                        }
                        $("div.select-winner").animate({ top: top }, duration, 'easeOutExpo');
                        if (i != 30) {
                            $("div.select-winner").animate({ top: 0 }, duration)
                        }
                    }
                }
                $("#enter-jackpot").click(function(e) {
                    $(this).prop('disabled', true);
                    e.preventDefault();
                    $("div.winner").hide();
                    $(".circle-winner").css("visibility", "visible");
                    $("div.circle-winner").show();
                    loop(duration, top);
                })
            })(jQuery)
        });
    }
}
