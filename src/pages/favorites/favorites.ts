import {Component} from '@angular/core';
import {IonicPage, NavController, PopoverController} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {Media} from "../../Interfaces/Media";
import {MediaDetailPage} from "../media-detail/media-detail";
import {ExportChoicesPage} from "../export-choices/export-choices";
import {ImportFavouritePage} from "../import-favourite/import-favourite";

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {

    favourites: Array<Media>;
    detailPage = MediaDetailPage;
    filterType = 'all';

    constructor(
        private favouriteProvider: FavouriteProvider,
        private popoverController: PopoverController,
        private navigation: NavController
    ) {
        //
    }

    ionViewWillEnter() {
        this.initFavourites(this.filterType);
    }

    presentPopover(event) {
        const popover = this.popoverController.create(ExportChoicesPage);

        popover.onDidDismiss(() => this.initFavourites(this.filterType));

        popover.present({
            ev: event
        });
    }

    presentImport() {
        this.navigation.push(ImportFavouritePage);
    }

    filterChanged(event) {
        return this.initFavourites(event.value);
    }

    private initFavourites(type: string) {
        let filter = {};
        if (type != 'all') {
            // @ts-ignore
            filter.Type = type;
        }

        return this.favouriteProvider.filter(filter).then(favourites => {
            this.favourites = favourites;
        });
    }
}
