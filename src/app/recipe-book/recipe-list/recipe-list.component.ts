import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Recipe } from '../recipe.model';

import * as fromApp from '../../store/app.reducer';
import * as fromRecipes from '../store/recipes.reducer';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  isTrue = false;
  subscription: Subscription;

  constructor(/*public recipeService: RecipeService,*/ private store: Store<fromApp.AppState>) { }


  ngOnInit(): void {
  // this.recipes = this.recipeService.getRecipes();
  // this.subscription = this.recipeService.recipesChanged.subscribe(
  //   (updatedRecipes: Recipe[]) => {
  //       this.recipes = updatedRecipes;
  //   }
  // );
  this.subscription = this.store.select('recipes').subscribe(
    (recipeState: fromRecipes.State) => {
      this.recipes = recipeState.recipes;
    }
  );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
