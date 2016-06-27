import { Component, Input } from '@angular/core';
import {Hero} from '../../app/classes/hero.ts';
import { AuthGuard } from  '../../app/helpers/route-guard';

@Component({
    selector: 'lottery-selector',
    templateUrl: '../../app/views/lottery/index.html',
   // providers: [AuthGuard]
   
})
export class LotteryComponent {
    @Input()
    hero: Hero;
    
}
