import { Component, Input } from '@angular/core';
import {Hero} from '../../app/classes/hero.ts';
@Component({
  selector: 'lottery-selector',
  templateUrl:'../../app/views/index/login.html'
})
export class LotteryComponent {
  @Input()
  hero: Hero;
}
