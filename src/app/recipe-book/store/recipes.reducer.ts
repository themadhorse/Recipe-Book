import { Recipe } from "../recipe.model";
import * as RecipesActions from './recipes.actions';

export interface State {
  recipes: Recipe[]
}

const initialState: State = {
  recipes: []
}

export function recipesReducer(state = initialState, action: RecipesActions.RecipesActions) {
  switch(action.type){
    case RecipesActions.SET_RECIPES:
      return {...state, recipes: action.payload};
    case RecipesActions.ADD_RECIPE:
      return {...state, recipes: [...state.recipes, action.payload]};
    case RecipesActions.DELETE_RECIPE:
      const recipesCopy = [...state.recipes];
      recipesCopy.splice(action.payload);
      return {...state, recipes: recipesCopy}
    case RecipesActions.UPDATE_RECIPE:
      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = action.payload.newRecipe;
      return {...state, recipes: updatedRecipes}
    default:
      return state;
  }
}