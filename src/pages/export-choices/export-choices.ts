import {Component} from '@angular/core';
import {IonicPage, NavParams, Platform, ViewController} from 'ionic-angular';
import {downloadBrowser} from "../../utils";
import {FavouriteExporterProvider} from "../../providers/favourite-exporter/favourite-exporter";
import {SocialSharing} from "@ionic-native/social-sharing";
import {File} from "@ionic-native/file";

@IonicPage()
@Component({
    selector: 'page-export-choices',
    templateUrl: 'export-choices.html',
})
export class ExportChoicesPage {
    types = [
        'json', 'csv'
    ];
    private EXPORT_NAME = 'favourites';

    constructor(
        private view: ViewController,
        private navParams: NavParams,
        private exporter: FavouriteExporterProvider,
        private socialSharing: SocialSharing,
        private platform: Platform,
        private file: File
    ) {
        //
    }

    exportFavourites(type: string) {
        const filename = this.EXPORT_NAME + '.' + type;
        this.exporter.getContent(type).then(content => {
            if (this.platform.is('core')) {
                const blob = new Blob([content], {
                    type: type == 'csv'
                        ? 'text/csv'
                        : 'application/json'
                });

                downloadBrowser(blob, filename);
                return;
            }

            this.file.writeFile(
                this.file.dataDirectory,
                filename,
                content,
                {replace: true}
            ).then(file => {
                return this.socialSharing.shareWithOptions({
                    files: [file.nativeURL]
                });
            });
        });
    }
}
