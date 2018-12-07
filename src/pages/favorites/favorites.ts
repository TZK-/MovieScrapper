import {Component} from '@angular/core';
import {IonicPage, ModalController, PopoverController, ToastController} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {Media} from "../../Interfaces/Media";
import {MediaDetailPage} from "../media-detail/media-detail";
import {ExportChoicesPage} from "../export-choices/export-choices";
import {File} from '@ionic-native/file';
import {ImportFavouritePage} from "../import-favourite/import-favourite";

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
        private popoverController: PopoverController,
        private modal: ModalController
    ) {
        //
    }

    ionViewWillEnter() {
        this.initFavourites();
    }

    private initFavourites() {
        this.favouriteProvider.all().then((favourites) => {
            this.favourites = favourites;
        });
    }

    presentPopover(event) {
        const popover = this.popoverController.create(ExportChoicesPage);

        popover.onDidDismiss(() => this.initFavourites());

        popover.present({
            ev: event
        });
    }

    presentImport() {
        this.modal.create(ImportFavouritePage).present();
    }

}
