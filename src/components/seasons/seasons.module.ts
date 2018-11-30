import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {SeasonsComponent} from "./seasons";
import {NumberToArrayPipeModule} from "../../pipes/number-to-array/number-to-array.module";

@NgModule({
    declarations: [
        SeasonsComponent
    ],
    imports: [
        IonicPageModule.forChild(SeasonsComponent),
        NumberToArrayPipeModule
    ],
    exports: [
        SeasonsComponent
    ]
})
export class SeasonsComponentModule {
}
