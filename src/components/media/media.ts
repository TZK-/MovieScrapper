import {Component, Input, OnInit} from '@angular/core';
import {PosterProvider} from "../../providers/omdb/poster";
import {Media} from "../../interfaces/Media";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Platform, ToastController} from "ionic-angular";
import {downloadBrowser, toast} from '../../utils';

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
        private socialSharing: SocialSharing,
        private toastController: ToastController,
        private platform: Platform
    ) {
        //
    }

    ngOnInit(): void {
        this.poster = this.media.PosterHD || this.media.Poster;
        this.rating = Math.round(this.media.imdbRating * this.maxRating / 10);
    }

    setFallbackPoster() {
        this.poster = this.media.Poster;
    }

    downloadPoster() {
        if (this.platform.is('mobile')) {
            return this.socialSharing.shareWithOptions({
                files: [this.poster]
            }).then(() => {
                toast(this.toastController, 'Poster successfully shared !');
            }).catch((e) => {
                toast(this.toastController, JSON.stringify(e));
            });
        }

        this.posterProvider
            .getBlob(this.media.imdbID)
            .subscribe(data => {
                downloadBrowser(data, this.media.Title + '.jpg');
            });
    }
}
