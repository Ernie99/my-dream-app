import {Component, OnInit, Input} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'my-hero-detail',
  // templateUrl: './hero-detail.component.html',
  template: `
    <div *ngIf="superhero">
        <h2>{{superhero.name}} details!</h2>
        <div><label>id: </label>{{superhero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="superhero.name" palceholder="name"/>
        </div>
    </div>
    `,
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input()
  superhero: Hero;

}
