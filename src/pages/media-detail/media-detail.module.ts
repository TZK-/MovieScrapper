import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MediaComponentModule} from "../../components/media/media.module";
import {MediaDetailPage} from "./media-detail";
import {FavouriteComponentModule} from "../../components/favourite/favourite.module";

@NgModule({
    declarations: [
        MediaDetailPage
    ],
    imports: [
        IonicPageModule.forChild(MediaDetailPage),
        MediaComponentModule,
        FavouriteComponentModule
    ],
})
export class MediaDetailPageModule {
}
