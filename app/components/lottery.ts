import { Component, Input } from '@angular/core';
import {Hero} from '../../app/classes/hero.ts';
@Component({
  selector: 'lottery-selector',
  templateUrl:'../../app/views/lottery/index.html'
})
export class LotteryComponent {
  @Input()
  hero: Hero;
}
