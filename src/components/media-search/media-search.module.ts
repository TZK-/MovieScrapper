import {NgModule} from '@angular/core';
import {MediaSearchComponent} from "./media-search";
import {IonicPageModule} from "ionic-angular";

@NgModule({
    declarations: [
        MediaSearchComponent
    ],
    imports: [
        IonicPageModule.forChild(MediaSearchComponent)
    ],
    exports: [
        MediaSearchComponent
    ]
})
export class MediaSearchComponentModule {
}
