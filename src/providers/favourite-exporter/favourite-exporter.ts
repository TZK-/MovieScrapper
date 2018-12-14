import {Injectable} from '@angular/core';
import {FavouriteProvider} from "../favourite/favourite";
import {Parser as Json2csvParser} from "json2csv";

@Injectable()
export class FavouriteExporterProvider {

    constructor(private favouriteProvider: FavouriteProvider) {
        //
    }

    async getContent(type: string): Promise<string> {
        const favourites = await this.favouriteProvider.all();
        if (favourites.length === 0) {
            // To avoid getting empty array as string if the JSON is empty.
            return "";
        }

        switch (type) {
            case 'csv':
                return (new Json2csvParser).parse(favourites);
            case 'json':
            default:
                return JSON.stringify(favourites, null, 4);
        }
    }
}
