import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RecipesModule } from './recipe-book/recipes.module';
import { ShoppingListModule } from './shopping/shopping-list.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { AuthInterceptorService } from './auth/auth/auth-interceptor.service';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShoppingListModule,
    RecipesModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent],
  //entryComponents: [AlertComponent] in angular versions below 9 for programmatic creation of component
})
export class AppModule { }
