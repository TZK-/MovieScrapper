import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {SerieDetailPage} from "../serie-detail/serie-detail";

@IonicPage()
@Component({
    selector: 'page-series',
    templateUrl: 'series.html',
})
export class SeriesPage {
    public detailPage: any = SerieDetailPage;
}
