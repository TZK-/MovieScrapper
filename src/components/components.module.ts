import {NgModule} from '@angular/core';
import {RatingComponent} from './rating/rating';
import {MediaSearchComponent} from './media-search/media-search';
import {MediaComponent} from './media/media';

@NgModule({
    declarations: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent
    ],
    imports: [],
    exports: [
        RatingComponent,
        MediaSearchComponent,
        MediaComponent
    ]
})
export class ComponentsModule {
}
