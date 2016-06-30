import { Injectable} from "@angular/core";
import {jackpotUserInterface, jackpotInfoInterface, jackpotStakesInterface } from '../../app/classes/jackpotUserInterface';
import {jackpotUsers, jackpotPreviuosActions, winnerInfo, jackpotInfo, lowStakeInfo, highStakeInfo } from '../../app/mocks/jackpot-user-mock';

@Injectable()

export class JackpotSvc {


    public getJackpotUsers(): Promise<jackpotUserInterface[]> {
        return new Promise<jackpotUserInterface[]>(resolve =>
            setTimeout(() => resolve(jackpotUsers), 500) // 0.5 seconds
        );
    }
    public getPreviousAction(): Promise<jackpotUserInterface[]> {
        return new Promise<jackpotUserInterface[]>(resolve =>
            setTimeout(() => resolve(jackpotPreviuosActions), 1000) // 1 seconds
        );
    }

    public getWinnerInfo(): Promise<jackpotUserInterface[]> {
        return new Promise<jackpotUserInterface[]>(resolve =>
            setTimeout(() => resolve(winnerInfo), 100) // 0.1 seconds
        );
    }

    public getjackPotInfo(): Promise<jackpotInfoInterface> {
        return new Promise<jackpotInfoInterface>(resolve =>
            setTimeout(() => resolve(jackpotInfo), 200) // 0.1 seconds
        );
    }

    public getHighStakeInfo(): Promise<jackpotStakesInterface> {
        return new Promise<jackpotStakesInterface>(resolve =>
            setTimeout(() => resolve(highStakeInfo), 300) // 0.1 seconds
        );
    }

    public getLowStakeInfo(): Promise<jackpotStakesInterface> {
        return new Promise<jackpotStakesInterface>(resolve =>
            setTimeout(() => resolve(lowStakeInfo), 300) // 0.1 seconds
        );
    }
}