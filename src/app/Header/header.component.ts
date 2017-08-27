import {Component,EventEmitter,Output} from '@angular/core';

@Component({

    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{

    //Creating a new property using EventEmitter
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);

    }

}