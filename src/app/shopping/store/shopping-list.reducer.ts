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
      let ingredients = checkDuplicateIngredients({...state}, [action.payload]);
      return {...state, ingredients: ingredients}
    case ShoppingListActions.ADD_INGREDIENTS:
      let newIngredients: Ingredient[];
      newIngredients = checkDuplicateIngredients({...state}, action.payload);
      return {...state, ingredients: newIngredients};
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = {...state.editedIngredient};
      const updatedIngredient: Ingredient = {...ingredient, ...action.payload};
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      
      return {...state, ingredients: updatedIngredients, editedIngredient: null, editedIngredientIndex: -1};
    case ShoppingListActions.DELETE_INGREDIENT:
      return {...state, ingredients: state.ingredients.filter((ig, index) => {
        return index !== state.editedIngredientIndex;
      }), editedIngredient: null, editedIngredientIndex: -1};
      case ShoppingListActions.START_EDIT:
        return {...state, editedIngredientIndex: action.payload, editedIngredient: {...state.ingredients[action.payload]}};
      case ShoppingListActions.STOP_EDIT:
        return {...state, editedIngredient: null, editedIngredientIndex: -1};
    default: 
      return state;
  }
}

function checkDuplicateIngredients(stateCopy: State, ingredients: Ingredient[]): Ingredient[]{
  let updatedIngredients: Ingredient[];
  let stateIngredients = [...stateCopy.ingredients];
  ingredients.forEach(ingredient => {
    const index = stateCopy.ingredients.findIndex(ing => ing.name === ingredient.name);
    if(index === -1)
    {
      updatedIngredients = [...stateIngredients, ingredient];
    } 
    else
    {
      updatedIngredients = [...stateIngredients];
      const updatedIngredient: Ingredient = {...updatedIngredients[index], amount: updatedIngredients[index].amount + ingredient.amount}
      updatedIngredients[index] = updatedIngredient;
    }
    stateIngredients = updatedIngredients;
  })
  
  return updatedIngredients;
}
