import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {MediaDetailPage} from "../media-detail/media-detail";

@IonicPage()
@Component({
    selector: 'page-movies',
    templateUrl: 'movies.html',
})
export class MoviesPage {
    public detailPage: any = MediaDetailPage;
}
