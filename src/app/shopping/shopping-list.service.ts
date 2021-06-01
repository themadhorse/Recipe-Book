import { Injectable } from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";

import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ShoppingListService{
    private ingredients:Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Vanilla Essence", 1)
      ];
      indexToBeUpdated = 0;

      ingredientSelected = new Subject<Number>();

      ingredientsChanged = new Subject<Ingredient[]>();

      getIngredients = () => this.ingredients.slice();

      getIngredient(index: number): Ingredient {
        return this.ingredients[index];
      }

      addIngredient(ingredient: Ingredient, publishChanges = true, editMode = false){
        const index = this.ingredients.findIndex(ing => ing.name === ingredient.name);
        if(editMode)
        {
          this.ingredients[this.indexToBeUpdated].name = ingredient.name;
          this.ingredients[this.indexToBeUpdated].amount = ingredient.amount;
        }
        else{
        if(index === -1)
          this.ingredients.push(ingredient);
        else{
          this.ingredients[index].amount += ingredient.amount;          
        }
        if(publishChanges)
        this.ingredientsChanged.next(this.ingredients.slice());
      }
      }

      addIngredients(ingredients: Ingredient[]){
        ingredients.forEach(ing => this.addIngredient(ing, false));
        this.ingredientsChanged.next(this.ingredients.slice());
      }

      deleteIngredient(){
        this.ingredients.splice(-1, 1);
      }

      set updateIndex(upDatedIndex: number){
        this.indexToBeUpdated = upDatedIndex;
      }
}