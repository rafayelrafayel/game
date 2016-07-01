import { Component, Input, OnInit } from '@angular/core';
import {Hero} from '../../app/classes/hero.ts';
import {lotteryUserInterface, lotteryInfoInterface, lotteriesInterface } from '../../app/classes/lotteryInterface';

import {LotterySvc} from '../../app/services/LotterySvc';

@Component({
    selector: 'lottery-selector',
    templateUrl: 'app/views/lottery/index.html',
    providers: [LotterySvc]

})
export class LotteryComponent implements OnInit {

    private users;
    private lotteryInfo: lotteryInfoInterface = {
        total_mistery: 0,
        ticket_avialable: 0,
        ticket_owned: 0,
        winning_balance: 0,
        ticket:0
    }

    private misterInfo: lotteriesInterface = {
        name: '',
        prize: 0,
        date: ''
    }

    private weekInfo: lotteriesInterface = {
        name: '',
        prize: 0,
        date: ''
    }
    private monthlyInfo: lotteriesInterface = {
        name: '',
        prize: 0,
        date: ''
    }

    constructor(private Lottery: LotterySvc) {

    }

    ngOnInit() {
        this.getUsers();
        this.getLotteryInfo();
        this.getMisteryLotteryInfo();
        this.getWeekInfo();
        this.getMonthInfo();
    }

    public getUsers(): Promise<lotteryUserInterface[]> {
        return this.Lottery.getLotteryUsers().then(
            users => this.users = users
        );
    }

    public getLotteryInfo(): Promise<lotteryInfoInterface> {
        return this.Lottery.getLotteryInfo().then(
            data => this.lotteryInfo = data
        );
    }

    public getMisteryLotteryInfo(): Promise<lotteriesInterface> {
        return this.Lottery.getMisteryLotteryInfo().then(
            data => this.misterInfo = data
        );
    }


    public getWeekInfo(): Promise<lotteriesInterface> {
        return this.Lottery.getWeekInfo().then(
            data => this.weekInfo = data
        );
    }

    public getMonthInfo(): Promise<lotteriesInterface> {
        return this.Lottery.getMonthInfo().then(
            data => this.monthlyInfo = data
        );
    }


    public setClasses(i): string {
        if (i >= 5) {
            return "point_block text-center col-md-2 hidden";
        }
        return "point_block text-center col-md-2";

    }

}
