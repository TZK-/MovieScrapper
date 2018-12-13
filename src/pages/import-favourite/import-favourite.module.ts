import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ImportFavouritePage} from './import-favourite';
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
    declarations: [
        ImportFavouritePage,
    ],
    imports: [
        IonicPageModule.forChild(ImportFavouritePage),
        IonicStorageModule.forRoot()
    ],
})
export class ImportFavouritePageModule {
}
