import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { NgForm } from '@angular/forms';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) ingredientForm: NgForm;
  subscription: Subscription;
  editMode = false;
  constructor(public shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.ingredientSelected.subscribe((index: number) => {
      let ingredient: Ingredient = this.shoppingListService.getIngredient(index);
      this.ingredientForm.setValue({
        'ingName': ingredient.name,
        'amount': ingredient.amount
      });
      this.editMode = true;
      this.shoppingListService.updateIndex = index;
    });
  }

  setData(){
    this.shoppingListService.addIngredient({name: this.ingredientForm.value.ingName, amount: this.ingredientForm.value.amount}, undefined, this.editMode);
    this.ingredientForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
