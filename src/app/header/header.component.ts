import { Component, EventEmitter, Output } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed=true;
    @Output() selectedFeature = new EventEmitter<string>();
    
    onSelect (feature: string) {
        this.selectedFeature.emit(feature);
    }
    constructor(private dataStorageService: DataStorageService) {}

    onSaveData() {
        this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        this.dataStorageService.fetchRecipes();
    }
}