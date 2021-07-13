import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";

import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import * as fromApp from '../store/app.reducer';
import * as RecipeActions from './store/recipe.actions';
import { Store } from "@ngrx/store";
import { ThrowStmt } from "@angular/compiler";
import { Actions, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { take, map, switchMap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class RecipesResolverService implements Resolve<Recipe[]>{
    
    constructor(private store: Store<fromApp.AppState>, private actions$: Actions){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.store.select('recipes').pipe(
            take(1),
            map(recipeState => recipeState.recipes),
            switchMap((recipes: Recipe[]) => {
                if(recipes.length === 0) 
                {
                    this.store.dispatch(new RecipeActions.FetchRecipes());
                    return this.actions$.pipe(
                        ofType(RecipeActions.SET_RECIPES),
                        take(1)
                    );
                } else {
                    return of(recipes)
                }
            })
        )
    }
}