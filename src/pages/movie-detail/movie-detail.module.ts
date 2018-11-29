import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailPage } from './movie-detail';
import {MediaComponent} from "../../components/media/media";
import {RatingComponent} from "../../components/rating/rating";

@NgModule({
  declarations: [
    MovieDetailPage,
    MediaComponent,
    RatingComponent
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailPage),
  ],
})
export class MovieDetailPageModule {}
