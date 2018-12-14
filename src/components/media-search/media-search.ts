import {Component, Input} from '@angular/core';
import {OmdbProvider} from "../../providers/omdb/omdb";
import {InfiniteScroll, ToastController} from "ionic-angular";
import {Media} from "../../interfaces/Media";
import {toast} from "../../utils";

@Component({
    selector: 'media-search',
    templateUrl: 'media-search.html'
})
export class MediaSearchComponent {
    @Input() searchType: string;
    @Input() detailPage: any;
    @Input() showSearchBar = true;

    public medias: Array<Media>;
    public page: number;
    private search: string;

    constructor(private omdb: OmdbProvider, private toastController: ToastController) {
        this.reset();
    }

    onInput(event) {
        this.reset();
        this.search = event.target.value;

        this.omdb.search(this.search, {type: this.searchType})
            .then((results: any) => {
                this.medias = results
            })
            .catch((error) => {
                this.reset();
                toast(this.toastController, error);
            });
    }

    doInfinite(event: InfiniteScroll) {
        this.omdb.search(this.search, {type: this.searchType, page: this.page + 1})
            .then((results: Array<Media>) => {
                if (results.length === 0) {
                    event.enable(false);
                    return;
                }

                this.medias = [...this.medias, ...results];
                this.page++;
                event.complete();
            }, () => {
                event.enable(false);
            })
            .catch(() => {
                event.enable(false);
            });
    }

    private reset() {
        this.medias = [];
        this.page = 1;
    }
}
