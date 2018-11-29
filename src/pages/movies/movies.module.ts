import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {MoviesPage} from './movies';
import {MediaSearchComponent} from "../../components/media-search/media-search";

@NgModule({
    declarations: [
        MoviesPage,
        MediaSearchComponent
    ],
    imports: [
        IonicPageModule.forChild(MoviesPage)
    ]
})
export class MoviesPageModule {
}
