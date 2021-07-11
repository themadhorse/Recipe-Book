import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipes.actions';
import * as ShoppingListActions from '../../shopping/store/shopping-list.actions';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit{
    selectedRecipe: Recipe;
    id: number;
    constructor(/*private recipeService: RecipeService,*/ private route: ActivatedRoute, private router: Router, private store: Store<fromApp.AppState>){}

    ngOnInit(){
        this.route.params
        .pipe(
            map(params => +params['id']),
            switchMap((id: number) => {
                this.id = id;
                return this.store.select('recipes');
            }),
            map(recipeState => {
                return recipeState.recipes[this.id];
            })
        )
        .subscribe(
            recipe => { this.selectedRecipe = recipe}
        );
    }

    toShoppingList(){
        const ingredientsCopy = JSON.parse(JSON.stringify(this.selectedRecipe.ingredients));
        //this.shoppingListService.addIngredients(ingredientsCopy);
        //this.recipeService.toShoppingList(ingredientsCopy);
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredientsCopy));
    }

    onDelete(){
        //this.recipeService.deleteRecipe(this.id);
        this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
        this.router.navigate(['/recipes']);
    }
}