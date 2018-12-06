import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {OmdbProvider} from '../providers/omdb/omdb';
import {PosterProvider} from '../providers/omdb/poster';
import {TabsPage} from "../pages/tabs/tabs";
import {HttpClientModule} from "@angular/common/http";
import {MoviesPageModule} from "../pages/movies/movies.module";
import {SeriesPageModule} from "../pages/series/series.module";
import {MediaDetailPageModule} from "../pages/media-detail/media-detail.module";
import {EpisodesPageModule} from "../pages/episodes/episodes.module";
import {FavouriteProvider} from '../providers/favourite/favourite';
import {FavouriteExporterProvider} from '../providers/favourite-exporter/favourite-exporter';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        MoviesPageModule,
        SeriesPageModule,
        MediaDetailPageModule,
        EpisodesPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        OmdbProvider,
        PosterProvider,
        FavouriteProvider,
        FavouriteExporterProvider,
        File,
        FileTransfer
    ]
})
export class AppModule {
}
