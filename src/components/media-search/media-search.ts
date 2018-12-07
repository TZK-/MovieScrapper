import {Component, Input} from '@angular/core';
import {OmdbProvider} from "../../providers/omdb/omdb";
import {InfiniteScroll, NavController} from "ionic-angular";
import {Media} from "../../Interfaces/Media";

@Component({
    selector: 'media-search',
    templateUrl: 'media-search.html'
})
export class MediaSearchComponent {
    @Input() searchType: string;
    @Input() detailPage : any;

    public medias: Array<Media>;
    private search: string;
    public page: number;

    constructor(private omdb: OmdbProvider) {
        this.reset();
    }

    onInput(event) {
        this.reset();
        this.search = event.target.value;
        
        this.omdb.search(this.search, {type: this.searchType})
            .then((results: any) => this.medias = results)
            .catch((error) => {
                this.reset();
            });
    }

    private reset() {
        this.medias = [];
        this.page = 1;
    }

    doInfinite(event: InfiniteScroll) {
        this.omdb.search(this.search, {type: this.searchType, page: this.page + 1})
            .then((results: any) => {
                this.medias = [...this.medias, ...results];
                this.page++;
            })
            .catch((error) => {
                // do nothing
            });
        event.complete();
    }
}
