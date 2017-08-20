import {Component} from '@angular/core';
import {Ingredient} from '../Shared/ingredient.model';

@Component({

    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html'
})

export class ShoppingListComponent{

    ingredients: Ingredient[] = [
        new Ingredient('Chicken',650),
        new Ingredient('Spinach',850)
        
    ];
}