import {Component} from '@angular/core';
import {IonicPage, NavParams, ToastController} from 'ionic-angular';
import {OmdbProvider} from "../../providers/omdb/omdb";
import {Media} from "../../interfaces/Media";
import {toast} from "../../utils";

@IonicPage()
@Component({
    selector: 'page-media-detail',
    templateUrl: 'media-detail.html',
})
export class MediaDetailPage {

    movie: Media;

    constructor(
        private navParams: NavParams,
        private omdb: OmdbProvider,
        private toastController: ToastController
    ) {
        //
    }

    ionViewDidLoad() {
        const selectedMovie = this.navParams.get('media');

        this.omdb.getMedia(selectedMovie.imdbID, {plot: 'full'})
            .then((movie: any) => {
                this.movie = movie;
            })
            .catch((error: string) => {
                toast(this.toastController, error)
            });
    }
}
