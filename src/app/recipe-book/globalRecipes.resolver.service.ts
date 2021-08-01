import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { Recipe } from "./recipe.model";
import * as fromApp from '../store/app.reducer';
import { Actions, ofType } from "@ngrx/effects";
import * as RecipeActions from './store/recipe.actions';
import { of } from "rxjs";
import { take, map, switchMap } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GlobalRecipesResolverService implements Resolve<Recipe[]> {

  constructor(private store: Store<fromApp.AppState>, private action$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('recipes').pipe(
      take(1),
      map(recipeState => recipeState.globalRecipes),
      switchMap((globalRecipes: Recipe[]) => {
        if(globalRecipes.length === 0)
        {
          this.store.dispatch(new RecipeActions.FetchGlobalRecipes());
          return this.action$.pipe(
            ofType(RecipeActions.SET_GLOBAL_RECIPES),
            take(1)
          );
        }
        else {
          return of(globalRecipes);
        }
      })
    );
  }
}
