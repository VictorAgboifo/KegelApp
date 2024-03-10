import { Component } from '@angular/core';
//import { register } from 'swiper/element/bundle';
//register();


import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from '@ionic/angular';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('READY!')
      GoogleAuth.initialize(
        {
        clientId:'550430673946-1u8chnj4u2r1bmprt78284q4adhm8s3q.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      }
      )
    })
  }
}












