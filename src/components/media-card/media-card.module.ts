import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {MediaCardComponent} from "./media-card";

@NgModule({
    declarations: [
        MediaCardComponent
    ],
    imports: [
        IonicPageModule.forChild(MediaCardComponent)
    ],
    exports: [
        MediaCardComponent
    ]
})
export class MediaCardComponentModule {
}
