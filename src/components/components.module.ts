import {NgModule} from '@angular/core';
import {RatingComponent} from './rating/rating';
import {MediaSearchComponent} from './media-search/media-search';
import {MediaComponent} from './media/media';
import { SeasonsComponent } from './seasons/seasons';

@NgModule({
    declarations: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
        SeasonsComponent
    ],
    imports: [],
    exports: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent,
        SeasonsComponent
    ]
})
export class ComponentsModule {
}
