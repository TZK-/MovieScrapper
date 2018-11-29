import {NgModule} from '@angular/core';
import {MediaSearchComponent} from "./media-search";
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [
        MediaSearchComponent
    ],
    imports: [
        IonicModule
    ],
    exports: [
        MediaSearchComponent
    ]
})
export class MediaSearchComponentModule {
}
