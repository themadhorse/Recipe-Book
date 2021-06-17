import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth/auth.guard";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesResolverService } from "./recipes.resolver.service";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";

const routes: Routes = [
    { path: 'recipes', component: RecipeBookComponent,
         canActivate: [AuthGuard],
         children: [
            { path: 'new', component: RecipeEditComponent, resolve: [RecipesResolverService]}, //resolve: [RecipesResolverService]
            { path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
            { path: '', component: SelectRecipeComponent, pathMatch: 'full'},
            { path: ':id/edit', component: RecipeEditComponent }
    ] },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {

}