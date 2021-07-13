import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  animations: [
    trigger('addRecipe', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [style({opacity: 0, transform: 'translateX(-100px)'}), animate(200)]),
      //transition('* => void', [animate(1000), style({opacity: 0, transform: 'translateX(-100px)'})])
    ])
  ]
})
export class RecipeItemComponent implements OnInit {
  @Input("currentRecipe") recipe: Recipe;
  @Input('index') index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
