import {Component} from '@angular/core';
import {IonicPage, ToastController, ViewController} from 'ionic-angular';
import {FavouriteProvider} from "../../providers/favourite/favourite";
import {HttpClient} from "@angular/common/http";

import {Media} from "../../interfaces/Media";
import * as papa from 'papaparse';
import {toast} from "../../utils";

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
        private toastController: ToastController
    ) {
        this.url = '';
    }

    async processImport() {
        let content;
        try {
            content = await this.http.get(this.url, {
                responseType: 'text'
            }).toPromise();
        } catch (e) {
            return toast(this.toastController, 'Unable to download the file at the given url. Please be sure it exists and the server allow CORS requests.');
        }

        let json: Array<Media>;
        try {
            // Try to decode as JSON
            json = JSON.parse(content);
        } catch (e) {
            // let's try to parse the content as a CSV
            const parse = papa.parse(content);
            if (parse.errors.length > 0) {
                return toast(this.toastController, 'The file seems not to be a valid one.');
            }

            json = parse.data;
        }

        await this.favouriteProvider.init(json);
        toast(this.toastController, 'Favourites successfully imported.');

        this.view.dismiss();
    }
}
