import {Injectable} from '@angular/core';
import {FavouriteProvider} from "../favourite/favourite";
import {Parser as Json2csvParser} from "json2csv";

@Injectable()
export class FavouriteExporterProvider {

    constructor(private favouriteProvider: FavouriteProvider) {
        //
    }

    async getContent(type: string) {
        const favourites = await this.favouriteProvider.all();

        switch (type) {
            case 'csv':
                const json2csvParser = new Json2csvParser();
                return json2csvParser.parse(favourites);
            case 'json':
            default:
                return JSON.stringify(favourites, null, 4);
        }
    }
}
