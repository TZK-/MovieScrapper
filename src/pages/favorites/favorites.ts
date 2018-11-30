import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {Media} from "../../Interfaces/Media";
import {MediaDetailPage} from "../media-detail/media-detail";

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {

    favourites: Array<Media>;
    detailPage: MediaDetailPage;

    constructor(private favouriteProvider: FavouriteProvider) {
        //
    }

    ionViewWillEnter() {
        this.favouriteProvider.all().then((favourites) => {
            this.favourites = favourites;
        })
    }

}
