import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {MovieDetailPage} from "../movie-detail/movie-detail";

@IonicPage()
@Component({
    selector: 'page-movies',
    templateUrl: 'movies.html',
})
export class MoviesPage {
    public detailPage: any = MovieDetailPage;
}
