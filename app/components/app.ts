import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeroDetailComponent} from './detail';

import {Hero} from '../../app/classes/hero.ts';


import { HeroService } from  '../../app/services/HeroSvc';
import { StorageSvc } from '../../app/services/StorageSvc';
import { AuthGuard } from  '../../app/helpers/route-guard';


@Component({
    selector: 'my-app',
    templateUrl:'app/views/index/index.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [HeroService,StorageSvc]
})
export class AppComponent implements OnInit {
    public loggedIn = true;
    title = 'Tour oof Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService,private storage: StorageSvc) { }
    getHeroes() {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    ngOnInit() {
        this.loggedIn = this.storage.isNotEmpty();
        this.getHeroes();
    }
    onSelect(hero: Hero) { this.selectedHero = hero; }
}


