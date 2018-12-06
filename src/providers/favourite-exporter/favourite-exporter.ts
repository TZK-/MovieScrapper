import {Injectable} from '@angular/core';
import {FavouriteProvider} from "../favourite/favourite";
import {FileTransfer} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

@Injectable()
export class FavouriteExporterProvider {

    private EXPORT_NAME = 'favourites';

    constructor(
        private favouriteProvider: FavouriteProvider,
        private transfer: FileTransfer,
        private file: File) {
        //
    }

    download() {
        var fileName = "myfile.zip";
//for IOS
        var filePath = this.file.cacheDirectory+"/Download/"+fileName;
//for Android
//var filePath = cordova.file.externalRootDirectory+"/Download/"+fileName;

        var mimeType = "application/zip";
        this.plugins.fileOpener2.open(
            filePath,
            mimeType,
            {error : function(){
                    my.alert("ERROR opening with cordova.plugins.fileOpener2");
                },
                success : function(){
                    my.log("SUCCESS opening zip file");
                }
            });
    }

}
