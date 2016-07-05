import {Injectable} from "@angular/core";
import {spinInfoInterface, winnerInfoInterface } from '../../app/classes/spinInterface';
import {spinInfo, winnerInfo} from '../../app/mocks/spin-mocks';

Injectable();
export class SpinSvc {

    public getSpinInfo(): Promise<spinInfoInterface> {
        return new Promise<spinInfoInterface>(resolve =>
            setTimeout(() => resolve(spinInfo), 800) // 0.1 seconds
        );
    }

    public winnerInfo(): Promise<winnerInfoInterface> {
        return new Promise<winnerInfoInterface>(resolve =>
            setTimeout(() => resolve(winnerInfo), 800) // 0.1 seconds
        );
    }

}
