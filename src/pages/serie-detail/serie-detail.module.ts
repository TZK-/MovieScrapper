import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SerieDetailPage} from './serie-detail';
import {MediaComponentModule} from "../../components/media/media.module";

@NgModule({
    declarations: [
        SerieDetailPage,
    ],
    imports: [
        IonicPageModule.forChild(SerieDetailPage),
        MediaComponentModule
    ],
})
export class SerieDetailPageModule {
}
