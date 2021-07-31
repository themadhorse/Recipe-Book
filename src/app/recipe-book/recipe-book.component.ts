import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // htmlToPdf() {
  //   html2canvas(document.querySelector("#test")).then((canvas) => {
  //     let pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

  //     let imgData = canvas.toDataURL('image/jpeg', 1.0);
  //     pdf.addImage(imgData,0,0,canvas.width, canvas.height);
  //     pdf.save('Huh');
  //   })
  // }
}
