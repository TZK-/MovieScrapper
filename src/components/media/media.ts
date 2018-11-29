import {Component, Input, OnInit} from '@angular/core';
import {PosterProvider} from "../../providers/omdb/poster";
import {Media} from "../../Interfaces/Media";

@Component({
    selector: 'media',
    templateUrl: 'media.html'
})
export class MediaComponent implements OnInit {
    @Input() media: Media;
    poster: string;
    rating: number;

    private maxRating = 5;

    constructor(private posterProvider: PosterProvider) {
        //
    }

    ngOnInit(): void {
        this.poster = this.posterProvider.getUrl(this.media.imdbID);
        this.rating = Math.round(this.media.imdbRating * this.maxRating / 10);
    }
}
