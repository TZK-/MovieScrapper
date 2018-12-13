import {Component, Input} from '@angular/core';

@Component({
    selector: 'rating',
    templateUrl: 'rating.html'
})
export class RatingComponent {

    @Input() rating = 1;
    @Input() maxRating = 5;

    public range: any;

    constructor() {
        this.range = [...Array.from(Array(this.maxRating).keys())].map(i => i + 1);
    }

}
