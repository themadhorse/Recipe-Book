import { Component, OnInit} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor(public dataStorage: DataStorageService) { }

  ngOnInit(): void {
  }

  storeRecipes(){
    const check = confirm("Are you sure you want to store recipes?");
    if(check)
    {
      this.dataStorage.storeRecipes();
      alert("Saved!");
    }
  }

  fetchRecipes(){
    this.dataStorage.fetchRecipes().subscribe();
  }

}
