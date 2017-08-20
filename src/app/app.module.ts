import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './Recipes/recipes.component';
import { RecipeDetailComponent } from './Recipes/Recipe-Detail/recipe-detail.component';
import { RecipeListComponent } from './Recipes/Recipe-List/recipe-list.component';
import { RecipeItemComponent } from './Recipes/Recipe-List/Recipe-Item/recipe-item.component';
import { ShoppingListComponent } from './Shopping-List/shopping-list.component';
import { ShoppingEditComponent } from './Shopping-List/Shopping-Edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,RecipesComponent,RecipeDetailComponent,RecipeListComponent,
    RecipeItemComponent,ShoppingListComponent,ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
