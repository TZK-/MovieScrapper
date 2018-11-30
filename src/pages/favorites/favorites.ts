import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {Media} from "../../Interfaces/Media";

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {

    favourites: Array<Media>;

    constructor(private favouriteProvider: FavouriteProvider) {
        //
    }

    ionViewDidLoad() {
        this.favouriteProvider.all().then((favourites) => {
            this.favourites = favourites;
        })
    }

}
