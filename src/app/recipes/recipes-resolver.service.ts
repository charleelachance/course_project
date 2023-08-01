import { Injectable } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { Recipe } from "./recipe.model";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable({providedIn: 'root'})
export class RecipesResolverService implements Resolve<Recipe[]> {
    constructor(private dataStorageService: DataStorageService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
    }
}