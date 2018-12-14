import {Component, Input, OnInit} from '@angular/core';
import {Media} from "../../interfaces/Media";
import {FavouriteProvider} from "../../providers/favourite/favourite";

@Component({
    selector: 'favourite',
    templateUrl: 'favourite.html'
})
export class FavouriteComponent implements OnInit {
    @Input() media: Media;
    isFavourite : boolean = false;

    constructor(private favourite: FavouriteProvider) {
        //
    }

    toggle() {
        this.isFavourite
            ? this.favourite.remove(this.media)
            : this.favourite.add(this.media);

        this.isFavourite = !this.isFavourite;
    }

    ngOnInit(): void {
        this.favourite.isFavourite(this.media)
            .then(isFavourite => {
                this.isFavourite = isFavourite;
            });
    }
}
