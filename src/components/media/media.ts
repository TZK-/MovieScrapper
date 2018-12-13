import {Component, Input, OnInit} from '@angular/core';
import {PosterProvider} from "../../providers/omdb/poster";
import {Media} from "../../Interfaces/Media";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Platform, ToastController} from "ionic-angular";
import {downloadBrowser} from '../../utils';

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
        private toast: ToastController,
        private platform: Platform
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
        if (this.platform.is('mobile')) {
            return this.socialSharing.share(null, null, this.poster, null).then(() => {
                this.toast.create({
                    message: 'Poster successfully shared !',
                    duration: 3000
                }).present();
            }).catch((e) => {
                this.toast.create({
                    message: JSON.stringify(e),
                    duration: 3000
                }).present();
            });
        }

        this.posterProvider
            .getBlob(this.media.imdbID)
            .subscribe(data => {
                downloadBrowser(data, this.media.Title + '.jpg');
            });
    }
}
