import { HttpClient } from "@angular/common/http";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { Recipe } from "../recipe.model";
import * as RecipeActions from './recipes.actions';
import * as fromApp from '../../store/app.reducer';
import { Injectable } from "@angular/core";

@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipeActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        "https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json")
    }),
    map(response => {
      return response.map(recipe => {
        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
      });
    }),
    map((recipes: Recipe[]) => {
      return new RecipeActions.SetRecipes(recipes);
    })
  );

  @Effect({ dispatch: false })
  storeRecipes = this.actions$.pipe(
    ofType(RecipeActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.http.put("https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json", recipesState.recipes);
    })
  );

  // @Effect({ dispatch: false })
  // storeRecipes = this.actions$.pipe(
  //   ofType(RecipeActions.STORE_RECIPES),
  //   switchMap(() => this.store.select('recipes')),
  //   map((recipeState => recipeState.recipes)),
  //   switchMap((recipes: Recipe[]) => {
  //     return this.http.put("https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json", recipes);
  //   })
  // );

  constructor(private actions$: Actions, private http: HttpClient, private store: Store<fromApp.AppState>) { }
}