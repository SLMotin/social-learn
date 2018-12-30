import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private places: {title: string}[] = [];

    constructor(private storage: Storage){}

    addPlace(place: {title: string}){
        this.places.push(place);
        this.storage.set('places', this.places);
    }
    async getPlaces(){
        this.places = await this.storage.get('places');
        if(this.places === null)
            this.places = [];
        return this.places.slice();
    }
}