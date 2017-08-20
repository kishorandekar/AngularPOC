import {Component} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({

    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent{

    recipes: Recipe[] = [
        new Recipe('Recipe One','This is Avocado Recipe',
        'http://www.fnstatic.co.uk/images/content/package/17-utterly-brilliant-avocado-recipes-that-go-beyond-guacamole.jpeg'),
        new Recipe('Recipe Two','This is Chicken Recipe',
        'http://www.ibssano.com/wpimages/wp72044030_05_06.jpg'),
        new Recipe('Recipe Three','This is Spinach Recipe',
        'http://cdnwp.audiencemedia.com/wp-content/uploads/2017/03/788669-1-eng-GB_spinach-recipes-960x420.jpg'),
        new Recipe('Recipe Four','This is Indian Chicken Recipe',
        'http://i.ndtvimg.com/i/2016-07/chicken-korma_625x350_71467713811.jpg')
    ];
}