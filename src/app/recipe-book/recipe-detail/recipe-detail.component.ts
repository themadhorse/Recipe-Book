import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../store/recipe.actions';
import * as ShoppingListActions from '../../shopping/store/shopping-list.actions';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  id: number;
  subscription: Subscription;
  globalLength: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.subscription = this.route.params
      .pipe(
        map((params: Params) => {
          this.id = +params['id'];
        }),
        switchMap(() => this.store.select('recipes')),
        map((recipeState) => {
          this.globalLength = recipeState.globalRecipes.length;
          return [
          ...recipeState.globalRecipes,
          ...recipeState.recipes,
          ]
      }),
        map((recipes: Recipe[]) => recipes[this.id])
      )
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe;
      });
  }

  toShoppingList() {
    const ingredientsCopy = JSON.parse(
      JSON.stringify(this.selectedRecipe.ingredients)
    );
    //this.shoppingListService.addIngredients(ingredientsCopy);
    //this.recipeService.toShoppingList(ingredientsCopy);
    this.store.dispatch(
      new ShoppingListActions.AddIngredients(ingredientsCopy)
    );
  }

  onDelete() {
    //this.recipeService.deleteRecipe(this.id);
    if (this.selectedRecipe.isGlobal)
      this.store.dispatch(new RecipeActions.DeleteGlobalRecipe(this.id));
    else
      this.store.dispatch(new RecipeActions.DeleteRecipe(this.id-this.globalLength));

    this.router.navigate(['/recipes']);
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
