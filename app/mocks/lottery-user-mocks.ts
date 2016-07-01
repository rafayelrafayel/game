import {lotteryUserInterface, lotteryInfoInterface, lotteriesInterface } from '../../app/classes/lotteryInterface';
export var lotteryUsers: lotteryUserInterface[] = [
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
];


export var lotteryInfo: lotteryInfoInterface = {
    total_mistery: 1000,
    ticket_avialable: 1000,
    ticket_owned: 1000,
    winning_balance: 0,
    ticket:150
};
export var misterInfo: lotteriesInterface = {
    name: "Mistery Lottery",
    prize: 45,
    date: "5:11:22"
}

export var weekInfo: lotteriesInterface = {
    name: "Weekly Lottery",
    prize: 700,
    date: "5:11:22"
}

export var monthlyInfo: lotteriesInterface = {
    name: "Montly Lottery",
    prize: 1.3,
    date: "5:11:22"
}



