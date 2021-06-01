import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  name: string;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.name = params['name'];
        this.editMode = params['name'] != null;
        this.initForm();
      }
    );
    
  }

  private initForm(){
    let recipeName = "";
    let recipeImgPath = "";
    let recipeDescription = "";
    if(this.editMode)
    {
    const recipe = this.recipeService.getRecipe(this.name);
    recipeName = recipe.name;
    recipeImgPath = recipe.imgPath;
    recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'imgPath': new FormControl(recipeImgPath, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.recipeForm.value);
  }
}
