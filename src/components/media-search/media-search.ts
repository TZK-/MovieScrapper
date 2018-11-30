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

    public medias: Array<Media>;

    constructor(private omdb: OmdbProvider) {
        this.reset();
    }

    onInput(event) {
        this.reset();

        this.omdb.search(event.target.value, {type: this.searchType})
            .then((results: any) => this.medias = results)
            .catch((error) => {
                this.reset();
            })
    }

    private reset() {
        this.medias = [];
    }
}
