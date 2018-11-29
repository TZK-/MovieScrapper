import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailPage } from './movie-detail';
import {MediaComponent} from "../../components/media/media";

@NgModule({
  declarations: [
    MovieDetailPage,
    MediaComponent
  ],
  imports: [
    IonicPageModule.forChild(MovieDetailPage),
  ],
})
export class MovieDetailPageModule {}
