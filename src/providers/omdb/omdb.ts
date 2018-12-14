import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {API_CONFIG} from "./config";
import {Media} from "../../interfaces/Media";
import {PosterProvider} from "./poster";

export interface OmdbOptions {
    /**
     * A valid IMDb ID
     */
    i?: string;

    /**
     * Movie title to search for.
     */
    t?: string;

    /**
     * Movie title to search for.
     */
    s?: string;

    /**
     * Season number to search for. Must be used with a valid IMDb id.
     */
    season?: number;

    /**
     * Type of result to return (movie|series|episode).
     */
    type?: string;

    /**
     * Which page to get results.
     * Results are paginated by the API and only returns 10 results per page
     */
    page?: number;

    /**
     * Year of release.
     */
    y?: number;

    /**
     * Return short or full plot (full|short).
     */
    plot?: string;
}

@Injectable()
export class OmdbProvider {
    private config: any;

    constructor(private http: HttpClient, private poster: PosterProvider) {
        this.config = API_CONFIG;
    }

    search(search: string, params: OmdbOptions = {}) {
        const observable = this.http.get(this.getUrl({...{s: search}, ...params})).pipe(
            map(results => {
                if (results && results['Search']) {
                    return results['Search'].map((media: Media) => {
                        media.PosterHD = this.poster.getUrl(media.imdbID);
                        return media;
                    });
                }
            })
        );

        return this.toPromise(observable);
    }

    getMedia(id: string, params: OmdbOptions = {}) {
        const observable = this.http.get(this.getUrl({
            ...{i: id},
            ...params
        })).pipe(
            map((media: Media) => {
                media.PosterHD = this.poster.getUrl(media.imdbID);
                return media;
            })
        );

        return this.toPromise(observable);
    }

    getSerieEpisodes(id: string, season: number) {
        const observable = this.http.get(this.getUrl({
            i: id,
            season: season
        })).pipe(
            map(result => {
                if (result) {
                    return result['Episodes'];
                }
            })
        );

        return this.toPromise(observable);
    }

    toPromise(observable) {
        return new Promise((resolve, reject) => {
            observable.subscribe(response => {
                if (response === undefined) {
                    return reject(null);
                }

                if (response.Error !== undefined) {
                    return reject(response.Error);
                }

                return resolve(response);
            }, error => reject(error));
        });
    }

    /**
     * @param args
     * @return string
     */
    private getUrl(args: OmdbOptions): string {
        const getArgs = Object.keys(args)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(args[key])}`)
            .join('&');

        return `${this.config.entrypoint}?apikey=${this.config.key}&${getArgs}`;
    }
}
