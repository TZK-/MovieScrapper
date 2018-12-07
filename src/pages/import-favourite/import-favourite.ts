import {Component} from '@angular/core';
import {IonicPage, ViewController} from 'ionic-angular';
import {FileTransfer} from "@ionic-native/file-transfer";
import {File} from "@ionic-native/file";
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
        private transfer: FileTransfer,
        private file: File,
        private favouriteProvider: FavouriteProvider,
        private view: ViewController,
        private http: HttpClient
    ) {
        this.url = '';
    }

    async processImport() {
        let content = await this.http.get<Array<Media>>(this.url).toPromise();
        this.favouriteProvider.init(content);

        this.view.dismiss();
    }
}
