export interface lotteryUserInterface {
    id: number,
    name: string,
    cost: number,
    image?: string,
    currency: string,

}

export interface lotteryInfoInterface {
    total_mistery: number,
    ticket_avialable: number,
    ticket_owned: number,
    winning_balance: number,
    ticket:number
}

export interface lotteriesInterface {
    name: string,
    prize: number,
    date: string
}