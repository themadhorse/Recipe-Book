import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators'
import { Recipe } from "../recipe-book/recipe.model";

import { RecipeService } from "../recipe-book/recipe.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put("https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json", recipes)
            .subscribe(
                responseData => { console.log(responseData); }
            );
    }

    fetchRecipes() {
        return this.http.get<Recipe[]>("https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json")
            .pipe(map(
                response => {
                    return response.map(recipe => {
                        return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []}
                    });
                }
            ),
            tap(recipes => {
                this.recipeService.setFetchedRecipes(recipes);
            }))
    }
}