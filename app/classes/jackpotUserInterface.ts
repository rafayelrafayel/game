export interface jackpotUserInterface {
    id: number,
    name: string,
    cost: number,
    image?: string,
    currency: string,

}

export interface jackpotInfoInterface {
    fee: number,
    entries: number,
    total: number,
    currency: string
}

export interface jackpotStakesInterface {
    name: string,
    current_pot: number,
    more_to_go: number,
    currency: string
}