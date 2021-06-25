import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducer';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) ingredientForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor(public shoppingListService: ShoppingListService, private store: Store<fromShoppingList.Appstate>) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.ingredientSelected.subscribe((index: number) => {
      let ingredient: Ingredient = this.shoppingListService.getIngredient(index);
      this.ingredientForm.setValue({
        'ingName': ingredient.name,
        'amount': ingredient.amount
      });
      this.editMode = true;
      this.editedItemIndex = index;
    });
  }

  setData(){
    //this.shoppingListService.addIngredient({name: this.ingredientForm.value.ingName, amount: this.ingredientForm.value.amount}, undefined, this.editMode);
    const newIngredient = new Ingredient(this.ingredientForm.value.ingName, this.ingredientForm.value.amount)

    if(!this.editMode)
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    else
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({index: this.editedItemIndex, ingredient: newIngredient}));
    this.ingredientForm.reset();
  }

  onClear(){
    this.ingredientForm.reset(); 
    this.editMode=false;
  }

  onDelete(){
    this.onClear();
    this.shoppingListService.deleteIngredient();//
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemIndex));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
