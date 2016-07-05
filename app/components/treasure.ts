
import {Component, OnInit, ElementRef} from "@angular/core";
import {itemsInterface, treasureInfoInterface } from '../../app/classes/treasureInterface';
import {TreasureSvc} from '../../app/services/TreasureSvc';

@Component({
    selector: 'treasure-selector',
    templateUrl: 'app/views/treasure/index.html',
    providers: [TreasureSvc]
})
export class TreasureComponent implements OnInit {
    private stillOptained: any;
    private alreadyOptained: any;

    private treasureInfo: treasureInfoInterface = {
        open_price: 0,
        open_count: 0,
        currency: ''
    }

    constructor(private elementRef: ElementRef, private Treasure: TreasureSvc) { };

    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js/treasureDriver.js";
        this.elementRef.nativeElement.appendChild(s);
    }

    public getStillBeOptained(): Promise<itemsInterface[]> {
        return this.Treasure.getStillBeOptained().then(
            stillOptained => this.stillOptained = stillOptained
        );
    }

    public getAlreadyOptained(): Promise<itemsInterface[]> {
        return this.Treasure.getAlreadyOptained().then(
            alreadyOptained => this.alreadyOptained = alreadyOptained
        );
    }

    public getTreasureInfo(): Promise<treasureInfoInterface> {
        return this.Treasure.getTreasureInfo().then(
            data => this.treasureInfo = data
        );
    }

    ngOnInit() {
        this.getStillBeOptained();
        this.getAlreadyOptained();
        this.getTreasureInfo();
    }

}