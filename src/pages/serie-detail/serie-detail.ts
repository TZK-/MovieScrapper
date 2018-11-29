import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {OmdbProvider} from "../../providers/omdb/omdb";
import {Media} from "../../Interfaces/Media";

@IonicPage()
@Component({
    selector: 'page-serie-detail',
    templateUrl: 'serie-detail.html',
})
export class SerieDetailPage {

    serie: Media;

    constructor(private navParams: NavParams, private omdb: OmdbProvider) {
        //
    }

    ngOnInit() {
        const selectedMovie = this.navParams.get('media');

        this.omdb.getMedia(selectedMovie.imdbID, {plot: 'full'})
            .then((serie: Media) => {
                this.serie = serie;
            })
            .catch((errorMessage: string) => {
                // TODO handle error
                console.log(errorMessage);
            });
    }

}
