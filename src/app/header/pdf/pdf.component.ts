import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../../recipe-book/store/recipe.actions';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }



}
