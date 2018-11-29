import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PosterProvider {
    private config: any;

    constructor(private http: HttpClient) {
        //
    }
}
