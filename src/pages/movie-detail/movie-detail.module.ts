import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MovieDetailPage} from './movie-detail';
import {MediaComponentModule} from "../../components/media/media.module";

@NgModule({
    declarations: [
        MovieDetailPage
    ],
    imports: [
        IonicPageModule.forChild(MovieDetailPage),
        MediaComponentModule
    ],
})
export class MovieDetailPageModule {
}
