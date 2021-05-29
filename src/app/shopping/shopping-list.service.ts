import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService{
    private ingredients:Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Vanilla Essence", 1),
        new Ingredient("Garlic", 2)
      ];

      ingredientsChanged = new Subject<Ingredient[]>();

      getIngredients = () => this.ingredients.slice();

      addIngredient(ingredient: Ingredient, publishChanges = true){
        const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
        if(index === -1)
          this.ingredients.push(ingredient);
        else{
          this.ingredients[index].amount += ingredient.amount;          
        }
        if(publishChanges)
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        ingredients.forEach(ing => this.addIngredient(ing, false));
        this.ingredientsChanged.next(this.ingredients.slice());
      }
}