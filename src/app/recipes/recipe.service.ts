import { Injectable } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    // private recipes: Recipe[] = [  
    //     new Recipe(
    //         'Hamburger', 
    //         'A delicious hamburger.', 
    //         'https://www.tastingtable.com/img/gallery/heres-how-hamburgers-got-their-name/intro-1653066580.webp',
    //         [
    //             new Ingredient('Beef patty', 1),
    //             new Ingredient('Bun', 1),
    //         ]),
    //     new Recipe(
    //         'Chocolate Cake', 
    //         'A decadent cake.', 
    //         'https://stylesweet.com/wp-content/uploads/2022/06/ChocolateCakeForTwo_Featured.jpg',
    //         [
    //             new Ingredient('Flour', 2),
    //             new Ingredient('Eggs', 3),
    //         ]),
    // ];
    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice(); // returns a new array (copy), so can't access the original from outside
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipeFromId(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
        
}