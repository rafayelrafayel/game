import {Injectable} from "@angular/core";

import {itemsInterface, treasureInfoInterface } from '../../app/classes/treasureInterface';
import {stillBeOptained, alreadyOptained, treasureInfo} from '../../app/mocks/treasure-mocks';
Injectable();
export class TreasureSvc {

    public getStillBeOptained(): Promise<itemsInterface[]> {
        return new Promise<itemsInterface[]>(resolve =>
            setTimeout(() => resolve(stillBeOptained), 800) // 0.1 seconds
        );
    }

    public getAlreadyOptained(): Promise<itemsInterface[]> {
        return new Promise<itemsInterface[]>(resolve =>
            setTimeout(() => resolve(alreadyOptained), 1000) // 0.1 seconds
        );
    }

    public getTreasureInfo(): Promise<treasureInfoInterface> {
        return new Promise<treasureInfoInterface>(resolve =>
            setTimeout(() => resolve(treasureInfo), 900));
    }


}