import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes"
import {HeroService} from "./hero.service";

@Component({
  // selector: 'app-root',
  selector: 'heroes-component',
  // templateUrl: './heroes.component.html',
  providers: [HeroService],
  template: `

    <!--<h1>{{title}}</h1>-->
    
      <!--<div *ngIf="selectedHero">-->
        <!--<h2>{{selectedHero.name}} details!</h2>-->
        <!--<div><label>id: </label>{{selectedHero.id}}</div>-->
        <!--&lt;!&ndash;<div><label>name: </label>{{hero.name}}</div>&ndash;&gt;-->
        <!--<div>-->
          <!--<label>name: </label>-->
          <!--<input [(ngModel)]="selectedHero.name" placeholder="name">-->
        <!--</div>-->
      <!--</div>-->
      
      <my-hero-detail [superhero]="selectedHero"></my-hero-detail>
    
    <h2>my Heroes</h2>
    <ul class="heroes">
       <li *ngFor="let hero of heroes" 
          (click)="onSelect(hero)"
          [class.selected]="hero === selectedHero">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
       </li>
    </ul>

`,
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit{

  constructor(private heroService: HeroService){ }

  heroes: Hero[];
  selectedHero: Hero;
  // hero: Hero = {
  //   id: 1,
  //   name: "Windstorm"
  // };
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }


}
