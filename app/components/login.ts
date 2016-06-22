import { Component, Input } from '@angular/core';
import {Hero} from '../../app/classes/hero.ts';
@Component({
  selector: 'login-selector',
  templateUrl:'../../app/views/index/login.html'
})
export class LoginComponent {
  @Input()
  hero: Hero;
}
