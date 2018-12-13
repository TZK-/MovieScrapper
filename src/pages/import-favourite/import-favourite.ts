import {Component} from '@angular/core';
import {IonicPage, Platform, ViewController} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {HttpClient} from "@angular/common/http";
import {Media} from "../../interfaces/Media";

@IonicPage()
@Component({
    selector: 'page-import-favourite',
    templateUrl: 'import-favourite.html',
})
export class ImportFavouritePage {

    url: string;

    constructor(
        private favouriteProvider: FavouriteProvider,
        private view: ViewController,
        private http: HttpClient,
        private platform: Platform
    ) {
        this.url = '';
    }

    async processImport() {
        let content = await this.http.get<Array<Media>>(this.url).toPromise();
        this.favouriteProvider.init(content);

        this.view.dismiss();
    }
}
