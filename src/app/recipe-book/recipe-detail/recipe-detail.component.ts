import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit{
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService, private route: ActivatedRoute){}

    ngOnInit(){
        this.route.params
        .subscribe(
            (params: Params) => {
                this.selectedRecipe = this.recipeService.getRecipe(params.name);
            } 
        );
    }

    toShoppingList(){
        const ingredientsCopy = JSON.parse(JSON.stringify(this.selectedRecipe.ingredients));
        this.shoppingListService.addIngredients(ingredientsCopy);
    }
}