import { Ingredient } from '../shared/ingredient.model';

import { Recipe } from './recipe.model';

export class RecipeService{

    private recipes:Recipe[] = [
        new Recipe("Boiled Eggs", "Just boiled eggs", "https://www.onceuponachef.com/images/2017/10/How-To-Make-Hard-Boiled-Eggs-850x577.jpg", [new Ingredient('Eggs', 6)]),
        new Recipe("Beef Wellington", "Perfectly cooked beef wrapped in bread pastry", "https://static01.nyt.com/images/2019/12/13/dining/mc-beef-wellington/mc-beef-wellington-articleLarge.jpg", [new Ingredient('Beef', 500), new Ingredient('Pastry', 2)])
      ];

      getRecipes():Recipe[]{
          return this.recipes.slice();
      }

      getRecipe(name): Recipe{
          return this.recipes.find((recipe) => name === recipe.name);
      }
}