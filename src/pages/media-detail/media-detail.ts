import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {OmdbProvider} from "../../providers/omdb/omdb";
import {Media} from "../../Interfaces/Media";

@IonicPage()
@Component({
    selector: 'page-media-detail',
    templateUrl: 'media-detail.html',
})
export class MediaDetailPage {

    movie: Media;

    constructor(private navParams: NavParams, private omdb: OmdbProvider) {
        //
    }

    ionViewDidLoad() {
        const selectedMovie = this.navParams.get('media');

        this.omdb.getMedia(selectedMovie.imdbID, {plot: 'full'})
            .then((movie: any) => {
                this.movie = movie;
            })
            .catch((errorMessage: string) => {
                // TODO handle error
                console.log(errorMessage);
            });
    }
}