import {Component, Input, OnInit} from '@angular/core';
import {PosterProvider} from "../../providers/omdb/poster";
import {Media} from "../../interfaces/Media";
import {SocialSharing} from "@ionic-native/social-sharing";
import {Platform, ToastController} from "ionic-angular";
import {downloadBrowser, toast} from '../../utils';
import * as youtubeSearch from "youtube-search";
import {DomSanitizer} from '@angular/platform-browser';
import {OmdbProvider} from "../../providers/omdb/omdb";

@Component({
    selector: 'media',
    templateUrl: 'media.html'
})
export class MediaComponent implements OnInit {
    @Input() media: Media;
    poster: string;
    rating: number;
    trailerUrl: any;

    private maxRating = 5;

    constructor(
        private posterProvider: PosterProvider,
        private omdbProvider: OmdbProvider,
        private socialSharing: SocialSharing,
        private toastController: ToastController,
        private platform: Platform,
        private domSanitizer: DomSanitizer
    ) {
        //
    }

    async ngOnInit() {
        this.poster = this.media.PosterHD || this.media.Poster;
        this.rating = Math.round(this.media.imdbRating * this.maxRating / 10);

        this.trailerUrl = await this.getTrailerUrl();
    }

    async getTrailerUrl() {
        const options: youtubeSearch.YouTubeSearchOptions = {
            maxResults: 1,
            key: "AIzaSyDN3ClADOjyHN6hu1RA_lA49W7GOYgVD48"
        };

        let searchQuery = this.media.Title + ' trailer';
        if (this.media.Type == 'episode') {
            const serie = await<Promise<Media>> this.omdbProvider.getMedia(this.media.seriesID);
            searchQuery = serie.Title + " " + searchQuery;
        }

        const response = await youtubeSearch(searchQuery, options);
        if (response.results.length !== 0) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(
                'https://www.youtube.com/embed/' + response.results[0].id
            );
        }

        return null;
    }

    setFallbackPoster() {
        this.poster = this.media.Poster;
    }

    downloadPoster() {
        if (this.platform.is('mobile')) {
            this.socialSharing.shareWithOptions({
                files: [this.poster]
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
