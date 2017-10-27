import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



// Check if user is loggedIn

// JWT getter/setter

@Injectable()
export default class CredentialsService {
    constructor(public storage: Storage) {
        this.storage = storage;
    }

    isLoggedIn() {
        return this.getAccessToken()
            .then((accessToken) => {
                return accessToken !== null;
            })
            .catch(() => {
                return false;
            });
    }

    getAccessToken() {
        return this.storage.get('accessToken')
            .then((accessToken) => {
                return accessToken;
            })
            .catch(() => {
                return null;
            });
    }
}