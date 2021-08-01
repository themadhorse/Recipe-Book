import { Action } from '@ngrx/store';

import { Recipe } from '../recipe.model';

export const SET_RECIPES = '[Recipes] Set Recipes';
export const SET_GLOBAL_RECIPES = `[Recipe] Set Global Recipes`;
export const FETCH_RECIPES = '[Recipes] Fetch Recipes';
export const FETCH_GLOBAL_RECIPES = `[Recipe] Fetch Global Recipes`;
export const ADD_RECIPE = '[Recipe] Add Recipe';
export const ADD_GLOBAL_RECIPE = `[Recipe] Add Global Recipe`;
export const UPDATE_RECIPE = '[Recipe] Update Recipe';
export const UPDATE_GLOBAL_RECIPE = '[Recipe] Update Global Recipe';
export const DELETE_RECIPE = '[Recipe] Delete Recipe';
export const DELETE_GLOBAL_RECIPE = '[Recipe] Delete Global Recipe';
export const STORE_RECIPES = '[Recipe] Store Recipes';
export const EXPORT_RECIPES = `[Recipe] Export Recipes`;
export const RESET_RECIPES = `[Recipe] Reset Recipes`;

export class SetRecipes implements Action {
  readonly type = SET_RECIPES;

  constructor(public payload: Recipe[]) {}
}

export class FetchRecipes implements Action {
  readonly type = FETCH_RECIPES;
}

export class AddRecipe implements Action {
  readonly type = ADD_RECIPE;

  constructor(public payload: Recipe) {}
}

export class UpdateRecipe implements Action {
  readonly type = UPDATE_RECIPE;

  constructor(public payload: { index: number; newRecipe: Recipe }) {}
}

export class UpdateGlobalRecipe implements Action {
  readonly type = UPDATE_GLOBAL_RECIPE;

  constructor(public payload: { index: number, newRecipe: Recipe }) {}
}

export class DeleteRecipe implements Action {
  readonly type = DELETE_RECIPE;

  constructor(public payload: number) {}
}

export class DeleteGlobalRecipe implements Action {
  readonly type = DELETE_GLOBAL_RECIPE;

  constructor(public payload: number) {}
}

export class StoreRecipes implements Action {
  readonly type = STORE_RECIPES;
}

export class SetGlobalRecipes implements Action {
  readonly type = SET_GLOBAL_RECIPES;

  constructor(public payload: Recipe[]) {}
}
export class FetchGlobalRecipes implements Action {
  readonly type = FETCH_GLOBAL_RECIPES;
}

export class AddGlobalRecipe implements Action {
  readonly type = ADD_GLOBAL_RECIPE;

  constructor(public payload: Recipe) {}
}

export class ResetRecipes implements Action {
  readonly type = RESET_RECIPES;
}



export type RecipesActions =
  | SetRecipes
  | SetGlobalRecipes
  | FetchRecipes
  | FetchGlobalRecipes
  | AddRecipe
  | AddGlobalRecipe
  | UpdateRecipe
  | UpdateGlobalRecipe
  | DeleteRecipe
  | DeleteGlobalRecipe
  | StoreRecipes
  | ResetRecipes;
