import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Media} from "../../Interfaces/Media";
import {OmdbProvider} from "../../providers/omdb/omdb";

@IonicPage()
@Component({
    selector: 'page-episodes',
    templateUrl: 'episodes.html',
})
export class EpisodesPage {

    serie: Media;
    season: number;
    episodes: Array<Media> = [];

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private omdb: OmdbProvider
    ) {
        this.serie = this.navParams.get('serie');
        this.season = this.navParams.get('season');
    }

    ionViewDidLoad() {
        this.omdb.getSerieEpisodes(this.serie.imdbID, this.season)
            .then((episodes:any) => {
                this.episodes = episodes;
            })
            .catch(error => {
                console.log(error);
            })
    }

    showDetail(episode) {
        //
    }

}
