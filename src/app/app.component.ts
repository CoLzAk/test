import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/security/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { CredentialsService } from "../services";

@Component({
    templateUrl: 'app.html'
})
export class App {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = LoginPage;

    pages: Array<{title: string, component: any}>;

    constructor(
        public platform: Platform,
        public statusBar: StatusBar,
        public splashScreen: SplashScreen,
        public credentialsService: CredentialsService
    ) {
        this.setRootPage();
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: LoginPage },
            { title: 'Home', component: HomePage },
            { title: 'List', component: ListPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    setRootPage() {
        this.credentialsService
            .isLoggedIn()
            .then((isLoggedIn) => {
                if (isLoggedIn) {
                    this.rootPage = HomePage;
                }
            });
    }
}
