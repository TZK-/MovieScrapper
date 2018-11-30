import {NgModule} from '@angular/core';
import {RatingComponent} from './rating/rating';
import {MediaSearchComponent} from './media-search/media-search';
import {MediaComponent} from './media/media';
import { SeasonsComponent } from './seasons/seasons';
import { FavouriteComponent } from './favourite/favourite';
import { MediaCardComponent } from './media-card/media-card';

@NgModule({
    declarations: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
        SeasonsComponent,
    FavouriteComponent,
    MediaCardComponent
    ],
    imports: [],
    exports: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
        SeasonsComponent,
    FavouriteComponent,
    MediaCardComponent
    ]
})
export class ComponentsModule {
}
