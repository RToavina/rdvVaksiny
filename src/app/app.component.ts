import {ViewportScroller} from '@angular/common';
import {Component, HostListener, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {IonContent, Platform} from '@ionic/angular';
import {SplashService} from './shared/services/splash.service';
import {AuthenticationService} from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router: Router, private splashService: SplashService, private authService: AuthenticationService) {
    this.initializeApp();
  }

  initializeApp() {
    this.router.navigateByUrl('splash');
  }

  get showSplash() {
    return this.splashService.showSplash;
  }

  get isConnected() {
    return this.authService.isAuth();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  
}
