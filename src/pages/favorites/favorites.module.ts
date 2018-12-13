import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FavoritesPage} from './favorites';
import {MediaCardComponentModule} from "../../components/media-card/media-card.module";
import {FileTransfer} from "@ionic-native/file-transfer";
import {ExportChoicesPageModule} from "../export-choices/export-choices.module";

@NgModule({
    declarations: [
        FavoritesPage,
    ],
    imports: [
        IonicPageModule.forChild(FavoritesPage),
        MediaCardComponentModule,
        ExportChoicesPageModule
    ]
})
export class FavoritesPageModule {
}
