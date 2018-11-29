import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating';
import { MediaSearchComponent } from './media-search/media-search';
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
@NgModule({
	declarations: [
		RatingComponent,
    	MediaSearchComponent
	],
	imports: [],
	exports: [
		RatingComponent,
    	MediaSearchComponent
	]
})
export class ComponentsModule {}
