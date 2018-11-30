import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {FavoritesPage} from './favorites';
import {MediaCardComponentModule} from "../../components/media-card/media-card.module";

@NgModule({
    declarations: [
        FavoritesPage,
    ],
    imports: [
        IonicPageModule.forChild(FavoritesPage),
        MediaCardComponentModule
    ],
})
export class FavoritesPageModule {
}
