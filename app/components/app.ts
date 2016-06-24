import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeroDetailComponent} from './detail';

import {Hero} from '../../app/classes/hero.ts';


import { HeroService } from  '../../app/services/HeroSvc';
import { AuthGuard } from  '../../app/helpers/route-guard';


@Component({
    selector: 'my-app',
    template: `\n\
     <h1 class="title">Component Router</h1>
    <nav>
      <a [routerLink]="['/login']">Login</a>\n\
      <a [routerLink]="['/lottery']">Lottery</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService,AuthGuard]
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


