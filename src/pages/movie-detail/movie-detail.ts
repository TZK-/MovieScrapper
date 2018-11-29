import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-movie-detail',
    templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

    movie: Object;

    constructor(private navigationParams: NavParams) {
        this.movie = this.navigationParams.get('media');
    }
}
