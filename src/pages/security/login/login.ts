import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

import { LoginFormInterface } from '../../../form-types/login.form.interface';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {
    loginForm: FormGroup;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private formBuilder: FormBuilder
    ) {
        this.loginForm = this.formBuilder.group({
            email: [ '', Validators.required ],
            password: [ '', Validators.required ],
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    doLogin(loginForm: { value: LoginFormInterface, valid: boolean }) {
        if (loginForm.valid === false) {
            return;
        }


        console.log(loginForm.value);
    }
}
