import { Injectable} from "@angular/core";
import {lotteryUserInterface, lotteryInfoInterface, lotteriesInterface} from '../../app/classes/lotteryInterface';
import {lotteryUsers, lotteryInfo, misterInfo, weekInfo, monthlyInfo} from '../../app/mocks/lottery-user-mocks';

@Injectable()

export class LotterySvc {


    public getLotteryUsers(): Promise<lotteryUserInterface[]> {
        return new Promise<lotteryUserInterface[]>(resolve =>
            setTimeout(() => resolve(lotteryUsers), 500) // 0.5 seconds
        );
    }
  
    public getLotteryInfo(): Promise<lotteryInfoInterface> {
        return new Promise<lotteryInfoInterface>(resolve =>
            setTimeout(() => resolve(lotteryInfo), 800) // 0.1 seconds
        );
    }

    public getMisteryLotteryInfo(): Promise<lotteriesInterface> {
        return new Promise<lotteriesInterface>(resolve =>
            setTimeout(() => resolve(misterInfo), 1000) // 0.1 seconds
        );
    }

    public getWeekInfo(): Promise<lotteriesInterface> {
        return new Promise<lotteriesInterface>(resolve =>
            setTimeout(() => resolve(weekInfo), 400) // 0.1 seconds
        );
    }
    
     public getMonthInfo(): Promise<lotteriesInterface> {
        return new Promise<lotteriesInterface>(resolve =>
            setTimeout(() => resolve(monthlyInfo), 300) // 0.1 seconds
        );
    }
}