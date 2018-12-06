import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {Media} from "../../Interfaces/Media";
import {MediaDetailPage} from "../media-detail/media-detail";
import {FavouriteExporterProvider} from "../../providers/favourite-exporter/favourite-exporter";

@IonicPage()
@Component({
    selector: 'page-favorites',
    templateUrl: 'favorites.html',
})
export class FavoritesPage {

    favourites: Array<Media>;
    detailPage = MediaDetailPage;

    constructor(private favouriteProvider: FavouriteProvider, private exporter: FavouriteExporterProvider) {
        //
    }

    ionViewWillEnter() {
        this.favouriteProvider.all().then((favourites) => {
            this.favourites = favourites;
        })
    }

    download() {
        this.exporter.download()
            .then(res => console.log("ok", res))
            .catch(err => console.log("err", err));
    }

}
