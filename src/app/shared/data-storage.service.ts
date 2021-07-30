import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import jsPDF from "jspdf";
import { map, tap } from 'rxjs/operators'

import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipe-book/recipe.model";

import { RecipeService } from "../recipe-book/recipe.service";

@Injectable({ providedIn: "root" })
export class DataStorageService {
  pdf = new jsPDF();

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        console.log(recipes);
        this.http.put("https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json", recipes)
            .subscribe(
                responseData => { console.log(responseData); }
            );
    }

    fetchRecipes() {

        return this.http.get<Recipe[]>(
            "https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json")
            .pipe(
                map(
                    response => {
                        return response.map(recipe => {
                            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                        });
                    }
                ),
                tap(recipes => {
                    this.recipeService.setFetchedRecipes(recipes);
                })
            );
    }


}
