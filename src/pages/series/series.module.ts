import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SeriesPage} from './series';
import {MediaSearchComponentModule} from "../../components/media-search/media-search.module";

@NgModule({
    declarations: [
        SeriesPage
    ],
    imports: [
        IonicPageModule.forChild(SeriesPage),
        MediaSearchComponentModule
    ],
})
export class SeriesPageModule {
}
