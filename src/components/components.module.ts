import {NgModule} from '@angular/core';
import {RatingComponent} from './rating/rating';
import {MediaSearchComponent} from './media-search/media-search';
import {MediaComponent} from './media/media';
import { SerieComponent } from './serie/serie';

@NgModule({
    declarations: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
    SerieComponent
    ],
    imports: [],
    exports: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
    SerieComponent
    ]
})
export class ComponentsModule {
}
