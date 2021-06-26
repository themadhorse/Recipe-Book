import { Ingredient } from "../../shared/ingredient.model";
import * as ShoppingListActions from './shopping-list.actions';

export interface Appstate{
  shoppingList: State
}

export interface State {
  ingredients: Ingredient[],
  editedIngredient: Ingredient,
  editedIngredientIndex: number
}

const initialState: State = {
  ingredients: [
    new Ingredient("Apples", 5),
    new Ingredient("Vanilla Essence", 1)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions){
  switch(action.type){
    case ShoppingListActions.ADD_INGREDIENT: 
      return {...state, ingredients: [...state.ingredients, action.payload]};
    case ShoppingListActions.ADD_INGREDIENTS:
      return {...state, ingredients: [...state.ingredients, ...action.payload]};
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[action.payload.index];
      const updatedIngredient: Ingredient = {...ingredient, ...action.payload.ingredient};
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updatedIngredient;

      return {...state, ingredients: updatedIngredients};
    case ShoppingListActions.DELETE_INGREDIENT:
      return {...state, ingredients: state.ingredients.filter((ig, index) => {
        return index !== action.payload;
      })};
      case ShoppingListActions.START_EDIT:
        return {...state, editedIngredientIndex: action.payload, editedIngredient: {...state.ingredients[action.payload]}};
      case ShoppingListActions.STOP_EDIT:
        return {...state, editedIngredient: null, editedIngredientIndex: -1};
    default: 
      return state;
  }
}