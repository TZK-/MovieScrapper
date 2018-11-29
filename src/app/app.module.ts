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
import {MovieDetailPage} from "../pages/movie-detail/movie-detail";
import {MoviesPage} from "../pages/movies/movies";
import {MoviesPageModule} from "../pages/movies/movies.module";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TabsPage,
        MovieDetailPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        MoviesPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TabsPage,
        MovieDetailPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        OmdbProvider,
        PosterProvider
    ]
})
export class AppModule {
}
