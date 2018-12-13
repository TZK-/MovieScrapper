import {NgModule} from '@angular/core';
import {IonicPageModule} from "ionic-angular";
import {FavouriteComponent} from "./favourite";
import {IonicStorageModule} from "@ionic/storage";

@NgModule({
    declarations: [
        FavouriteComponent
    ],
    imports: [
        IonicPageModule.forChild(FavouriteComponent),
        IonicStorageModule.forRoot()
    ],
    exports: [
        FavouriteComponent
    ]
})
export class FavouriteComponentModule {
}
