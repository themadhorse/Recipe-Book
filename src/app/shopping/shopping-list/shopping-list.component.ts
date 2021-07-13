import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core'; 
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from '../../shared/ingredient.model';

import * as fromApp from '../../store/app.reducer';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('addIngredient', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [style({opacity: 0, transform: 'translateX(-75px)'}), animate(200)]),
      transition('* => void', [animate(100), style({opacity: 0})])
    ])
  ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  ingredientSubscription: Subscription;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.shoppingListService.getIngredients();
    // this.ingredientSubscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => this.ingredients = ingredients
    // );
  }

  onEditItem(index: number){
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy(){
    //this.ingredientSubscription.unsubscribe();
    this.store.dispatch(new ShoppingListActions.StopEdit());
  }
}
