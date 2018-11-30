import {Component} from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';
import {OmdbProvider} from "../../providers/omdb/omdb";
import {Media} from "../../Interfaces/Media";

@IonicPage()
@Component({
    selector: 'page-episode-detail',
    templateUrl: 'episode-detail.html',
})
export class EpisodeDetailPage {

    episode: Media;

    constructor(private navParams: NavParams, private omdb: OmdbProvider) {
        console.log("ok");
    }

    ionViewDidLoad() {
        const selectedEpisode: Media = this.navParams.get('episode');

        this.omdb.getMedia(selectedEpisode.imdbID)
            .then((episode: any) => this.episode = episode)
            .catch(error => console.log(error));
    }

}
