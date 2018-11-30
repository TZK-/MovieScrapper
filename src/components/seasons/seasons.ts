import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {OmdbProvider} from "../../providers/omdb/omdb";
import {Media} from "../../Interfaces/Media";
import {EpisodesPage} from "../../pages/episodes/episodes";

@Component({
    selector: 'seasons',
    templateUrl: 'seasons.html'
})
export class SeasonsComponent {
    @Input() serie : Media;

    constructor(private navigation: NavController, private omdb: OmdbProvider) {
        //
    }

    showDetail(serie: Media, season: number) {
        this.navigation.push(EpisodesPage, {
            serie: serie,
            season: season
        });
    }
}
