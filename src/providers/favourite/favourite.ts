import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage";
import {Media} from "../../interfaces/Media";

@Injectable()
export class FavouriteProvider {

    private STORAGE_KEY = "MEDIA_FAVOURITE";

    constructor(private storage: Storage) {
        //
    }

    async all() {
        const favourites = await this.storage.get(this.STORAGE_KEY);

        return (favourites || []).reverse();
    }

    add(media: Media) {
        this.all().then((favourites: Array<Media>) => {
            favourites.push(media);
            this.storage.set(this.STORAGE_KEY, favourites);
        });
    }

    remove(media: Media) {
        this.all().then((favourites: Array<Media>) => {
            const newFavourites = favourites.filter((favourite: Media) => {
                return media.imdbID != favourite.imdbID;
            });

            this.storage.set(this.STORAGE_KEY, newFavourites);
        });
    }

    async isFavourite(media: Media) {
        const favourites: Array<Media> = await this.all();

        return favourites.filter((favourite: Media) => {
            return favourite.imdbID == media.imdbID;
        }).length > 0;
    }

    init(data: Array<Media>) {
        return this.storage.set(this.STORAGE_KEY, data);
    }

    async filter(filters) {
        const favourites = await this.all();

        return favourites.filter(favourite => {
            for(const filter in filters) {
                if (favourite[filter] != filters[filter]) {
                    return false;
                }
            }

            return true;
        });
    }
}
