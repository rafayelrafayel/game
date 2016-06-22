import { Injectable } from '@angular/core';
import { HEROES } from  '../../app/mocks/hero-provider';
import {Hero} from '../../app/classes/hero';
@Injectable()
export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
    }
    // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }
}
