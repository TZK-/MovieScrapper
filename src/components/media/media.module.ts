import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {MediaComponent} from "./media";
import {RatingComponentModule} from "../rating/rating.module";

@NgModule({
    declarations: [
        MediaComponent
    ],
    imports: [
        IonicPageModule.forChild(MediaComponent),
        RatingComponentModule
    ],
    exports: [
        MediaComponent
    ]
})
export class MediaComponentModule {
}
