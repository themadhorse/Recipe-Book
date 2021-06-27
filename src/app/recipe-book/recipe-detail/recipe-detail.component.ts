import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})

export class RecipeDetailComponent implements OnInit{
    selectedRecipe: Recipe;
    id: number;
    constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router){}

    ngOnInit(){
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.selectedRecipe = this.recipeService.getRecipe(+params.id);
            } 
        );
    }

    toShoppingList(){
        const ingredientsCopy = JSON.parse(JSON.stringify(this.selectedRecipe.ingredients));
        //this.shoppingListService.addIngredients(ingredientsCopy);
        this.recipeService.toShoppingList(ingredientsCopy);
    }

    onDelete(){
        this.recipeService.deleteRecipe(this.id);
        this.router.navigate(['/recipes']);
    }
}