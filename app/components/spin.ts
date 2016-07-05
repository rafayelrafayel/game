import {Component, OnInit, ElementRef} from "@angular/core";
import {spinInfoInterface, winnerInfoInterface } from '../../app/classes/spinInterface';
import {SpinSvc} from '../../app/services/SpinSvc';

@Component({
    selector: 'spin-selector',
    templateUrl: 'app/views/spin/index.html',
    providers: [SpinSvc]
})

export class SpinComponent implements OnInit {
    private spinInfo: spinInfoInterface = {
        price: 0,
        currency: '',
        count: 0,
        maxAmount: 0
    }

    private winnerInfo: winnerInfoInterface = {
        name: ''
    }


    constructor(private elementRef: ElementRef, private Spin: SpinSvc) { };

    ngAfterViewInit() {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js/rouletteWheel.js";
        this.elementRef.nativeElement.appendChild(s);
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js/spinDriver.js";
        this.elementRef.nativeElement.appendChild(s);
    }

    public getSpinInfo(): Promise<spinInfoInterface> {
        return this.Spin.getSpinInfo().then(
            data => this.spinInfo = data
        );
    }

    public getWinnerInfo(): Promise<winnerInfoInterface> {
        return this.Spin.winnerInfo().then(
            data => this.winnerInfo = data
        );
    }

    ngOnInit() {
        this.getSpinInfo();
    }

}
