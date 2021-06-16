import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { AlertComponent } from '../shared/alert/alert.component';
import { DataStorageService } from '../shared/data-storage.service';
import { PlaceholderDirective } from '../shared/placeholder.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed = true;
  private userSub: Subscription;
  isAuthenticated = false;
  showConfirmBox = false;
  @ViewChild(PlaceholderDirective, { static: false }) confirmationHost: PlaceholderDirective;
  saveSub: Subscription;

  constructor(public dataStorage: DataStorageService, public authService: AuthService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user => {
        this.isAuthenticated = !!user;
      }
    );
  }


  confirm(){
    this.showConfirmBox = true;
  }

  storeRecipes(){
    // const check = confirm("Are you sure you want to store recipes?");
    // if(check)
    // {
    //   this.dataStorage.storeRecipes();
    //   alert("Saved!");
    // }

    this.dataStorage.storeRecipes();
    this.showConfirmBox = false;
  }

  showConfirmation(){
      const confirmationCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      const hostViewContainerRef = this.confirmationHost.veiwContainerRef;
      hostViewContainerRef.clear();

      const confirmationComponentRef = hostViewContainerRef.createComponent(confirmationCmpFactory);
      this.saveSub = confirmationComponentRef.instance.shouldSave.subscribe(
        (save: boolean) => {
          if(save){
            this.storeRecipes();
          }
          this.saveSub.unsubscribe();
          hostViewContainerRef.clear();
        }
      );

  }

  fetchRecipes(){
    this.dataStorage.fetchRecipes().subscribe();
  }

  logout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    if(this.saveSub)
      this.saveSub.unsubscribe();
  }
}
