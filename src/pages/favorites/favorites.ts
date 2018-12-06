import {Component} from '@angular/core';
import {IonicPage, PopoverController} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {Media} from "../../Interfaces/Media";
import {MediaDetailPage} from "../media-detail/media-detail";
import {ExportChoicesPage} from "../export-choices/export-choices";

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {

    favourites: Array<Media>;
    detailPage = MediaDetailPage;

    constructor(
        private favouriteProvider: FavouriteProvider,
        private popover: PopoverController
    ) {
        //
    }

    ionViewWillEnter() {
        this.favouriteProvider.all().then((favourites) => {
            this.favourites = favourites;
        })
    }

    presentPopover(event) {
        const popover = this.popover.create(ExportChoicesPage);
        popover.present({
            ev: event
        });
    }

}
