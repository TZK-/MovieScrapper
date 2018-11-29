import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MediaComponentModule} from "../../components/media/media.module";
import {MediaDetailPage} from "./media-detail";

@NgModule({
    declarations: [
        MediaDetailPage
    ],
    imports: [
        IonicPageModule.forChild(MediaDetailPage),
        MediaComponentModule
    ],
})
export class MediaDetailPageModule {
}
