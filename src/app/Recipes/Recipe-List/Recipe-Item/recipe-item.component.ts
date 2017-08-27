
import {Component,Input,EventEmitter,Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({

    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html'
})

export class RecipeItemComponent{

    @Input() recipe: Recipe;
    //Need to pass data from recipe-item to recipe-list component so need to use @Output
    @Output() recipeSelected = new EventEmitter<void>();

    onSelected(){
        this.recipeSelected.emit();

    }

}