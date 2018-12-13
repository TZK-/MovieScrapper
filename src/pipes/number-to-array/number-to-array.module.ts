import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {NumberToArrayPipe} from "./number-to-array";

@NgModule({
    declarations: [
        NumberToArrayPipe
    ],
    imports: [
        IonicPageModule.forChild(NumberToArrayPipe),
    ],
    exports: [
        NumberToArrayPipe
    ]
})
export class NumberToArrayPipeModule {
}
