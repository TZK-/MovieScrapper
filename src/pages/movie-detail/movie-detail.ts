import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {OmdbProvider} from "../../providers/omdb/omdb";

@IonicPage()
@Component({
    selector: 'page-movie-detail',
    templateUrl: 'movie-detail.html',
})
export class MovieDetailPage {

    movie: any;

    constructor(private navParams: NavParams, private omdb: OmdbProvider) {
        //
    }

    ionViewDidLoad() {
        const selectedMovie = this.navParams.get('media');

        this.omdb.getMovie(selectedMovie.imdbID, {plot: 'full'})
            .then((movie: any) => {
                this.movie = movie;
            })
            .catch((errorMessage: string) => {
                // TODO handle error
                console.log(errorMessage);
            });
    }
}
