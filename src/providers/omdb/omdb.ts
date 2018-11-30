import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {API_CONFIG} from "./config";

@Injectable()
export class OmdbProvider {
    private config: any;

    constructor(private http: HttpClient) {
        this.config = API_CONFIG;
    }

    search(search: string, params = {}) {
        const observable = this.http.get(this.getUrl({...{s: search}, ...params})).pipe(
            map(results => {
                if (results) {
                    return results['Search'];
                }
            })
        );

        return this.toPromise(observable);
    }

    getMedia(id: string, params = {}) {
        const observable = this.http.get(this.getUrl({...{i: id}, ...params}));

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

    private getUrl(args: Object): string {
        const getArgs = Object.keys(args)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(args[key])}`)
            .join('&');

        return `${this.config.entrypoint}?apikey=${this.config.key}&${getArgs}`;
    }
}
