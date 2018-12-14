import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {Media} from "../../interfaces/Media";
import {EpisodesPage} from "../../pages/episodes/episodes";

@Component({
    selector: 'seasons',
    templateUrl: 'seasons.html'
})
export class SeasonsComponent {
    @Input() serie: Media;

    constructor(private navigation: NavController) {
        //
    }

    showDetail(serie: Media, season: number) {
        this.navigation.push(EpisodesPage, {
            serie: serie,
            season: season
        });
    }
}
