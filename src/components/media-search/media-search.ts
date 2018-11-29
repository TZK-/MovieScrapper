import {Component, Input} from '@angular/core';
import {OmdbProvider} from "../../providers/omdb/omdb";
import {NavController} from "ionic-angular";
import {Media} from "../../Interfaces/Media";

@Component({
    selector: 'media-search',
    templateUrl: 'media-search.html'
})
export class MediaSearchComponent {
    @Input() searchType: string;
    @Input() detailPage : any;

    public results: Array<Media>;

    constructor(private omdb: OmdbProvider, private navigation: NavController) {
        this.reset();
    }

    onInput(event) {
        this.reset();

        this.omdb.getMovies(event.target.value, {type: this.searchType})
            .then((results: any) => this.results = results)
            .catch((error) => {
                this.reset();
            })
    }

    showDetail(media: Object) {
        this.navigation.push(this.detailPage, {
            media: media
        })
    }

    private reset() {
        this.results = [];
    }
}
