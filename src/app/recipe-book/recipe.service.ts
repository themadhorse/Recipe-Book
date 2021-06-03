import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class RecipeService{
    private recipeSelectedId = 0;

    recipesChanged = new Subject<Recipe[]>();

    private recipes:Recipe[] = [
        new Recipe("Boiled Eggs", "Just boiled eggs", "https://www.onceuponachef.com/images/2017/10/How-To-Make-Hard-Boiled-Eggs-850x577.jpg", [new Ingredient('Eggs', 6)]),
        new Recipe("Beef Wellington", "Perfectly cooked beef wrapped in bread pastry", "https://static01.nyt.com/images/2019/12/13/dining/mc-beef-wellington/mc-beef-wellington-articleLarge.jpg", [new Ingredient('Beef', 500), new Ingredient('Pastry', 2)])
      ];

      getRecipes():Recipe[]{
          return this.recipes.slice();
      }

      getRecipe(info: string | number): Recipe{
          if(typeof(info) === 'string')
              return this.recipes.find((recipe) => info === recipe.name);
          else 
              return this.recipes[info];
      }

      getIndex(recipe: Recipe){
          return this.recipes.indexOf(recipe);
      }

      addRecipe(recipe: Recipe, id: number, editMode=false){
            if(editMode){
                this.recipes[id] = recipe;
            } else {
                this.recipes.push(recipe);
            }
            this.recipesChanged.next(this.recipes.slice());
        }

        deleteRecipe(index: number){
            this.recipes.splice(index, 1);
            this.recipesChanged.next(this.recipes.slice());
        }
}