import {Component, Input, OnInit} from '@angular/core';
import {Media} from "../../interfaces/Media";
import {NavController} from "ionic-angular";

@Component({
    selector: 'media-card',
    templateUrl: 'media-card.html'
})
export class MediaCardComponent implements OnInit {

    @Input() detailPage;
    @Input() media: Media;

    poster: string;

    constructor(private navigation: NavController) {
        //
    }

    showDetail() {
        this.navigation.push(this.detailPage, {
            media: this.media
        })
    }

    ngOnInit(): void {
        this.poster = this.media.PosterHD || this.media.Poster;
    }

    setFallbackPoster() {
        this.poster = this.media.Poster;
    }
}
