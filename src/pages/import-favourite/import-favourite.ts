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
        private toast: ToastController
    ) {
        this.url = '';
    }

    async processImport() {
        const content = await this.http.get(this.url, {
            responseType: 'text'
        }).toPromise();

        let json: Array<Media>;
        try {
            // Try to decode as JSON
            json = JSON.parse(content);
        } catch (e) {
            // let's try to parse the content as a CSV
            const parse = papa.parse(content);
            if (parse.errors.length > 0) {
                return toast(this.toast, 'The file seems not to be a valid one.');
            }

            json = parse.data;
        }

        this.favouriteProvider.init(json);
        this.view.dismiss();
    }
}
