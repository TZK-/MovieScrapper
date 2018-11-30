import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {MediaComponent} from "./media";
import {RatingComponentModule} from "../rating/rating.module";
import {SeasonsComponentModule} from "../seasons/seasons.module";

@NgModule({
    declarations: [
        MediaComponent
    ],
    imports: [
        IonicPageModule.forChild(MediaComponent),
        RatingComponentModule,
        SeasonsComponentModule
    ],
    exports: [
        MediaComponent
    ]
})
export class MediaComponentModule {
}
