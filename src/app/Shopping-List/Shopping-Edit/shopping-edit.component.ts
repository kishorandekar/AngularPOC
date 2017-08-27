
import {Component,EventEmitter,ElementRef,ViewChild,Output} from '@angular/core';
import {Ingredient} from '../../Shared/ingredient.model';

@Component({

    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent{

    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;

    @Output() ingridientAdded = new EventEmitter<Ingredient>();

    onAddItem(){
        const ingName = this.nameInputRef.nativeElement.value;
        const ingAmount = this.amountInputRef.nativeElement.value;

        const newIngredient = new Ingredient(ingName,ingAmount);

        this.ingridientAdded.emit(newIngredient);
    }

}