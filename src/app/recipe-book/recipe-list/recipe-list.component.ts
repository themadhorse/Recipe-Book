import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  isTrue = false;
  subscription: Subscription;

  constructor(public recipeService: RecipeService, private store: Store<fromApp.AppState>) { }


  ngOnInit(): void {
  // this.recipes = this.recipeService.getRecipes();
  // this.subscription = this.recipeService.recipesChanged.subscribe(
  //   (updatedRecipes: Recipe[]) => {
  //       this.recipes = updatedRecipes;
  //   }
  // );
  this.subscription = this.store.select('recipes')
  .pipe(map(recipeState => [...recipeState.globalRecipes, ...recipeState.recipes]))
  .subscribe((recipes: Recipe[]) => { this.recipes = recipes })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
