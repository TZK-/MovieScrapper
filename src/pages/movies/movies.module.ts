import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MoviesPage} from './movies';
import {MediaSearchComponentModule} from "../../components/media-search/media-search.module";

@NgModule({
    declarations: [
        MoviesPage
    ],
    imports: [
        IonicPageModule.forChild(MoviesPage),
        MediaSearchComponentModule
    ]
})
export class MoviesPageModule {
}
