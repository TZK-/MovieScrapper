import {Component, Input, OnInit} from '@angular/core';
import {PosterProvider} from "../../providers/omdb/poster";
import {Media} from "../../Interfaces/Media";
import {SocialSharing} from "@ionic-native/social-sharing";

@Component({
    selector: 'media',
    templateUrl: 'media.html'
})
export class MediaComponent implements OnInit {
    @Input() media: Media;
    poster: string;
    rating: number;

    private maxRating = 5;

    constructor(
        private posterProvider: PosterProvider,
        private socialSharing: SocialSharing
    ) {
        //
    }

    ngOnInit(): void {
        this.poster = this.posterProvider.getUrl(this.media.imdbID);
        this.rating = Math.round(this.media.imdbRating * this.maxRating / 10);
    }

    setFallbackPoster() {
        this.poster = this.media.Poster;
    }

    downloadPoster() {
        return this.socialSharing.shareWithOptions({
            files: [this.poster]
        });
    }
}
