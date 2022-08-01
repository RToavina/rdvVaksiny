import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SplashService } from '../shared/services/splash.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {
  constructor(public router: Router,private splashService:SplashService) {
    setTimeout(() => {
      this.router.navigateByUrl('home');
      this.splashService.showSplash = false;
    }, 3000);
  }

  ngOnInit() {}
}
