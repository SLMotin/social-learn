import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private authKey: string;

    constructor(private storage: Storage){}

    checkAuthentication(){
        this.authKey = 'A1B2C3D4E5F6G7H8I9';
        this.storage.set('authKey', this.authKey);
        return true;
    }
    logOff(){
        this.authKey = null;
        this.storage.remove('authKey');
    }
    async isAuthenticated(){
        var isAuthenticated = false;
        this.authKey = await this.storage.get('authKey');
        if(this.authKey !== null)
            isAuthenticated = true;
        return isAuthenticated;
    }
}