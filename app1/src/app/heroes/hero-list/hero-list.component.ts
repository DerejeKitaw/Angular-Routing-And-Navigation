import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { IHero } from '../hero';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes:IHero[];
  constructor( private _heroService :HeroService, 
    private route: ActivatedRoute)  {
    
 }

  ngOnInit() {
    this._heroService.getHeroes()
    .subscribe(heroes => {
        this.heroes = heroes;
    },
        error => "error occured");
  }

}
