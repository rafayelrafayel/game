import { Component, OnInit } from '@angular/core';
import {HeroDetailComponent} from './detail';

import {Hero} from '../../app/classes/hero.ts';


import { HeroService } from  '../../app/services/HeroSvc';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>\n\
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,
    directives: [HeroDetailComponent],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
  title = 'Tour oof Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);     
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}


