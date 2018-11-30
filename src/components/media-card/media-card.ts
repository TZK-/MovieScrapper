import {Component, Input} from '@angular/core';
import {Media} from "../../Interfaces/Media";
import {NavController} from "ionic-angular";

@Component({
    selector: 'media-card',
    templateUrl: 'media-card.html'
})
export class MediaCardComponent {

    @Input() detailPage;
    @Input() media: Media;

    constructor(private navigation: NavController) {
        //
    }

    showDetail() {
        this.navigation.push(this.detailPage, {
            media: this.media
        })
    }
}
