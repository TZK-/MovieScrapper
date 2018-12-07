import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {FavouriteExporterProvider} from "../../providers/favourite-exporter/favourite-exporter";
import {SocialSharing} from "@ionic-native/social-sharing";

/**
 * Generated class for the ExportChoicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-export-choices',
    templateUrl: 'export-choices.html',
})
export class ExportChoicesPage {

    types = [
        'json', 'csv'
    ];

    constructor(
        private exporter: FavouriteExporterProvider,
        private view: ViewController,
        private socialSharing: SocialSharing) {
        //
    }

    exportFavourites(type: string) {
        this.view.dismiss();

        this.exporter.download(type).then(file => {
            return this.socialSharing.share(null, null, null, file.nativeURL);
        });
    }
}