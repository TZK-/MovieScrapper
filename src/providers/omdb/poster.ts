import {Injectable} from '@angular/core';
import {API_CONFIG} from './config';
import {Media} from "../../interfaces/Media";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class PosterProvider {
    private config: any;

    constructor(private http: HttpClient) {
        this.config = API_CONFIG;
    }

    getUrl(id: string) {
        return `${this.config.poster_entrypoint}?apikey=${this.config.key}&i=${id}&h=1500`;
    }

    getBlob(id: string) {
        return this.http.get(this.getUrl(id), {
            responseType: 'blob'
        }).pipe(
            map(data => {
                return new Blob([data], {type: 'image/jpg'});
            })
        );
    }
}
