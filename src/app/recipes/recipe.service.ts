import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

//@Injectable()
export class RecipeService{
    recipesSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] =[
        new Recipe('Briyani',
         'This is Hyderabadi Chicken Dum Briyani',
         'https://cdn.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized.jpg',
         [
             new Ingredient('Fried Chicken', 5),
             new Ingredient('Pepsi', 1)
         ]),
        new Recipe('Mutton Briyani',
         'This is Hyderabadi Mutton Dum Briyani',
         'https://cdn.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized.jpg',
         [
             new Ingredient('Omlette', 1),
             new Ingredient('Sprite',1)
         ])
        ];
        constructor(private slService: ShoppingListService){}
        getRecipes(){
            return this.recipes.slice();
        }
        addIngredientsTosShoppingList(ingredients: Ingredient[]){
            this.slService.addIngredients(ingredients);
        }
        getRecipe(index: number){
            return this.recipes[index];
        }
}