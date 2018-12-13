import {NgModule} from '@angular/core';
import {MediaSearchComponent} from "./media-search";
import {IonicPageModule} from "ionic-angular";
import {MediaCardComponentModule} from "../media-card/media-card.module";

@NgModule({
    declarations: [
        MediaSearchComponent
    ],
    imports: [
        IonicPageModule.forChild(MediaSearchComponent),
        MediaCardComponentModule
    ],
    exports: [
        MediaSearchComponent
    ]
})
export class MediaSearchComponentModule {
}
