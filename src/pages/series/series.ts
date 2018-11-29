import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {MediaDetailPage} from "../media-detail/media-detail";

@IonicPage()
@Component({
    selector: 'page-series',
    templateUrl: 'series.html',
})
export class SeriesPage {
    public detailPage: any = MediaDetailPage;
}
