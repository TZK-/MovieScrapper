import {NgModule} from '@angular/core';
import {RatingComponent} from './rating/rating';
import {MediaSearchComponent} from './media-search/media-search';
import {MediaComponent} from './media/media';
import { SerieComponent } from './serie/serie';
import { SeasonsComponent } from './seasons/seasons';

@NgModule({
    declarations: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
    SerieComponent,
    SeasonsComponent
    ],
    imports: [],
    exports: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
    SerieComponent,
    SeasonsComponent
    ]
})
export class ComponentsModule {
}
