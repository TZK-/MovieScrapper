import {NgModule} from '@angular/core';
import {RatingComponent} from './rating/rating';
import {MediaSearchComponent} from './media-search/media-search';
import {MediaComponent} from './media/media';
import { SeasonsComponent } from './seasons/seasons';
import { FavouriteComponent } from './favourite/favourite';

@NgModule({
    declarations: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
        SeasonsComponent,
    FavouriteComponent
    ],
    imports: [],
    exports: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
        SeasonsComponent,
    FavouriteComponent
    ]
})
export class ComponentsModule {
}
