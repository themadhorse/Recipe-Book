import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';
import jsPDF, { ImageOptions } from 'jspdf';

import * as RecipesActions from './recipe.actions';
import { Recipe } from '../recipe.model';
import * as fromApp from '../../store/app.reducer';
import * as fromRecipe from '../store/recipe.reducer';


@Injectable()
export class RecipeEffects {
  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json'
      );
    }),
    map(recipes => {
      return recipes.map(recipe => {
        return {
          ...recipe,
          ingredients: recipe.ingredients ? recipe.ingredients : []
        };
      });
    }),
    map(recipes => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  @Effect({dispatch: false})
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select('recipes')),
    switchMap(([actionData, recipesState]) => {
      return this.http.put(
        'https://recipe-book-ddfc0-default-rtdb.firebaseio.com/recipes.json',
        recipesState.recipes
      );
    })
  );

  @Effect({dispatch: false})
  exportRecipes = this.actions$.pipe(
    ofType(RecipesActions.EXPORT_RECIPES),
    switchMap(() => this.store.select('recipes')),
    map((recipeState: fromRecipe.State) => recipeState.recipes),
    map((recipes: Recipe[]) => recipes[0]),
    tap((recipe: Recipe) => {
      this.arrangePdf(recipe).then(
        (doc: jsPDF) => { doc.save('Recipes.pdf'); }
      );
    })
  );



  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}

  arrangePdf(recipe: Recipe) {
    return new Promise<jsPDF>((resolve, reject) => {
    let doc = new jsPDF('p', 'pt', 'a4');
      let width = doc.internal.pageSize.width;
      let height = doc.internal.pageSize.height;
      let options = {
        pagesplit: true
      };
      doc.text('Recipes', width/2, 30, null,'center');
          doc.text('1.)', 20, 50);
          this.getDataUri(recipe.imgPath).then((imgData: string) => {
            doc.addImage(imgData, 'PNG', 0.167*width, 70, (0.66*width), 200);
            doc.setFont(undefined, 'bold');
            doc.text(recipe.name, width/2, 295, null, 'center');
            doc.line(0.167*width, 305, 0.827*width, 305);
            doc.setFont(undefined, 'normal');
            doc.text(recipe.description, 0.167*width, 325);
            resolve(doc);
          });

      }
    );
  }

  // arrangePdf(recipes: Recipe[]) {
  //   return new Promise<jsPDF>((resolve, reject) => {
  //   let doc = new jsPDF('p', 'pt', 'a4');
  //     let width = doc.internal.pageSize.width;
  //     let height = doc.internal.pageSize.height;
  //     let options = {
  //       pagesplit: true
  //     };
  //     doc.text('Recipes', 20, 30);
  //     recipes.forEach(
  //       (recipe: Recipe, index: number) => {
  //         doc.text(`${index+1}`, 20, index*100+50);
  //         this.getDataUri(recipe.imgPath).then((imgData: string) => {
  //           doc.addImage(imgData, 'PNG', 20, index*100+80, 100, 100);
  //           doc.text(recipe.name, 20, index*100+220);
  //           doc.text(recipe.description, 20, index*100+240);
  //           resolve(doc);
  //         });
  //       }
  //       );
  //     }
  //   );
  // }

  getDataUri(url: string) {
    return new Promise(
      (resolve, reject) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = url;
        img.onload = () =>
        {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);
          resolve(canvas.toDataURL());
        }
      }
    )
  }

}
