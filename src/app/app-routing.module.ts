import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipe-book/recipes.resolver.service";
import { SelectRecipeComponent } from "./recipe-book/select-recipe/select-recipe.component";
import { ShoppingListComponent } from "./shopping/shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full'},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'recipes', component: RecipeBookComponent, children: [
        { path: 'new', component: RecipeEditComponent, resolve: [RecipesResolverService] },
        { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
        { path: '', component: SelectRecipeComponent, pathMatch: 'full'},
        { path: ':id/edit', component: RecipeEditComponent }
    ] },
    { path: '**', redirectTo: '/recipes'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}