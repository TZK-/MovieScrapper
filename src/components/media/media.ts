import {Component, Input, OnInit} from '@angular/core';
import {PosterProvider} from "../../providers/omdb/poster";

@Component({
    selector: 'media',
    templateUrl: 'media.html'
})
export class MediaComponent implements OnInit {
    @Input() media: any;
    poster: Object;
    rating: number;

    private maxRating = 5;

    constructor(private posterProvider: PosterProvider) {
        //
    }

    ngOnInit(): void {
        this.poster = this.posterProvider.getUrl(this.media.imdbID);
        this.rating = Math.round(this.media.Metascore * this.maxRating / 100);

        console.log(this.poster, this.rating);
    }
}
