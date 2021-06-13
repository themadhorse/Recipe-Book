import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(public dataStorage: DataStorageService, public authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user;
      }
    );
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

  logout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }
}
