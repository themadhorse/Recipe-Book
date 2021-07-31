import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as RecipeActions from '../../recipe-book/store/recipe.actions';
import * as fromRecipe from '../../recipe-book/store/recipe.reducer';
import { Recipe } from 'src/app/recipe-book/recipe.model';
import { Subscription } from 'rxjs';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit, OnDestroy {
  selectedRecipes: Recipe[];
  testRecipe: Recipe = null;
  storeSub: Subscription;
  @Output('showPDFPreview') showPDFPreview = new EventEmitter<boolean>();
  @ViewChild('pdfWrapper', {static: true}) pdfWrapper: ElementRef;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('recipes').subscribe(
      (recipeState: fromRecipe.State) => {
        this.selectedRecipes = [...recipeState.recipes];
        this.testRecipe = this.selectedRecipes[1];
      }
    );
  }

  closePDF() {
    this.showPDFPreview.emit(false);
  }

  async htmlToPdf() {
    window.scrollTo(0,0);
    await html2canvas(this.pdfWrapper.nativeElement, {
      allowTaint: true,
      useCORS: true,
      scale: 1,
      windowWidth: document.documentElement.offsetWidth,
      windowHeight: document.documentElement.offsetHeight
    }).then((canvas) => {
      let pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      let imgData = canvas.toDataURL('image/jpeg', 2);
      pdf.addImage(imgData,100,0, canvas.width*0.75, canvas.height*0.75);

      pdf.save('Recipe');
    })
  }

  // htmlToPdf() {
  //   domtoimage.toPNG(this.pdfWrapper.nativeElement, {
  //     allowTaint: true
  //   }).then(
  //     dataURL => {
  //       const doc = new jsPDF('p', 'pt', 'letter');
  //       let width = doc.internal.pageSize.getWidth();
  //       let height = doc.internal.pageSize.getHeight();
  //       doc.addImage(dataURL, 'PNG', 0, 0, width, height);
  //       doc.save('Recipe');
  //     }
  //   );
  // }

  ngOnDestroy() {
    this.storeSub.unsubscribe();
  }
}
