import {Injectable} from '@angular/core';
import {FavouriteProvider} from "../favourite/favourite";
import {File} from '@ionic-native/file';
import {SocialSharing} from "@ionic-native/social-sharing";

@Injectable()
export class FavouriteExporterProvider {

    private EXPORT_NAME = 'favourites';

    constructor(
        private favouriteProvider: FavouriteProvider,
        private file: File,
        private socialSharing: SocialSharing) {
        //
    }

    async download(type: string) {
        const filename = this.EXPORT_NAME + '.' + type;
        const favourites = await this.favouriteProvider.all();

        let content = "";
        switch (type) {
            case 'csv':
                break;
            case 'json':
            default:
                content = JSON.stringify(favourites, null, 4);
                break;
        }

        return this.file
            .writeFile(
                this.file.tempDirectory,
                filename,
                content,
                {replace: true}
            )
            .then(value => {
                return this.socialSharing.share(null, null, null, value.nativeURL);
            });
    }

}
