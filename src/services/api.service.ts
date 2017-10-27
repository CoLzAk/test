import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



// Check if user is loggedIn

// JWT getter/setter

@Injectable()
export default class ApiService {
    constructor(public storage: Storage) {
        this.storage = storage;
    }

    executeRequest(request) {

    }
}