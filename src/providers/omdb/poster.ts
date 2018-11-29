import {Injectable} from '@angular/core';
import {API_CONFIG} from './config';

@Injectable()
export class PosterProvider {
    private config: any;

    constructor() {
        this.config = API_CONFIG;
    }

    getUrl(id: string) {
        return `${this.config.poster_entrypoint}?apikey=${this.config.key}&i=${id}&h=1500`;
    }
}
