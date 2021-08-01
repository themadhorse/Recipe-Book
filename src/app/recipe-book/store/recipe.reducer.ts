import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';

export interface State {
  recipes: Recipe[];
  globalRecipes: Recipe[];
}

const initialState: State = {
  recipes: [],
  globalRecipes: []
};

export function recipeReducer(
  state = initialState,
  action: RecipesActions.RecipesActions
) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload]
      };
      case RecipesActions.SET_GLOBAL_RECIPES:
        return {
          ...state,
          globalRecipes: [...action.payload]
        }
    case RecipesActions.ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case RecipesActions.ADD_GLOBAL_RECIPE:
      return {
        ...state,
        globalRecipes: [...state.globalRecipes, action.payload]
      };
    case RecipesActions.RESET_RECIPES:
      return {
        ...state,
        recipes: [],
        globalRecipes: []
      }
    case RecipesActions.UPDATE_RECIPE:
      const updatedRecipe = {
        ...state.recipes[action.payload.index],
        ...action.payload.newRecipe
      };

      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = updatedRecipe;

      return {
        ...state,
        recipes: updatedRecipes
      };
    case RecipesActions.UPDATE_GLOBAL_RECIPE:
      const updatedGlobalRecipe = {
        ...state.globalRecipes[action.payload.index],
        ...action.payload.newRecipe
      };

      const updatedGlobalRecipes = [...state.globalRecipes];
      updatedGlobalRecipes[action.payload.index] = updatedGlobalRecipe;

      return {
        ...state,
        globalRecipes: updatedGlobalRecipes
      };
    case RecipesActions.DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe, index) => {
          return index !== action.payload;
        })
      };
    case RecipesActions.DELETE_GLOBAL_RECIPE:
      return {
        ...state,
        globalRecipes: state.globalRecipes.filter((globalRecipe, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
