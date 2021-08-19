import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [];

  recipes: Recipe[] = [
    new Recipe('A Test Recipe #1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe #2', 'This is simply a test', 'https://www.iheartnaptime.net/wp-content/uploads/2019/06/how-to-grill-chicken-720x514.jpg')
  ];

  constructor() { }

  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }

}
