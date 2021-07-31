import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from '../shopping/store/shopping-list.actions';
import jsPDF from 'jspdf';
//import * as jsPDF from 'jspdf';

@Injectable({ providedIn: 'root' })
export class RecipeService {
    private recipeSelectedId = 0;
    private pdf = new jsPDF();

    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [
    //     new Recipe("Boiled Eggs", "Just boiled eggs", "https://www.onceuponachef.com/images/2017/10/How-To-Make-Hard-Boiled-Eggs-850x577.jpg", [new Ingredient('Eggs', 6)]),
    //     new Recipe("Beef Wellington", "Perfectly cooked beef wrapped in bread pastry", "https://static01.nyt.com/images/2019/12/13/dining/mc-beef-wellington/mc-beef-wellington-articleLarge.jpg", [new Ingredient('Beef', 500), new Ingredient('Pastry', 2)])
    // ];
    private recipes: Recipe[] = [];

    constructor(private store: Store<fromApp.AppState>) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    getRecipe(info: string | number): Recipe {
        if (typeof (info) === 'string')
            return this.recipes.find((recipe) => info === recipe.name);
        else
            return this.recipes[info];
    }

    getIndex(recipe: Recipe) {
        return this.recipes.indexOf(recipe);
    }

    addRecipe(recipe: Recipe, id: number, editMode = false) {
        if (editMode) {
            this.recipes[id] = recipe;
        } else {
            this.recipes.push(recipe);
        }
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }

    setFetchedRecipes(fetchedRecipes: Recipe[]) {
        this.recipes = fetchedRecipes;
        this.recipesChanged.next(this.recipes?.slice());
    }

    toShoppingList(ingredients: Ingredient[]){
        this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients));
    }

    downloadAsPDF() {

    }

    addToPDF() {

    }
}
