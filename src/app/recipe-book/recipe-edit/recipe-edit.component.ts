import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
    
  }

  private initForm(){
    let recipeName = "";
    let recipeImgPath = "";
    let recipeDescription = "";
    let recipeIngredients = new FormArray([]);

    if(this.editMode)
    {
    const recipe = this.recipeService.getRecipe(this.id);
    recipeName = recipe.name;
    recipeImgPath = recipe.imgPath;
    if(recipe['ingredients'])
    {
      for(let ingredient of recipe['ingredients']){
        recipeIngredients.push(
          new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          })
        );
      }
    }
    recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imgPath': new FormControl(recipeImgPath, Validators.required),
      'ingredients' : recipeIngredients
    });
  }

  onSubmit(){

    this.recipeService.addRecipe(new Recipe(this.recipeForm.get('name').value, this.recipeForm.get('description').value, this.recipeForm.get('imgPath').value, this.recipeForm.get('ingredients').value), this.id, this.editMode);
    this.onCancel();
  }

  get controls(){
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel(){
    if(this.editMode)
      this.router.navigate(['/recipes', this.id]);
      else
      this.router.navigate(['/recipes']);
  }

  delIngredient(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
