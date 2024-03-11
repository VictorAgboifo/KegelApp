import { Component } from '@angular/core';


import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  googleUser =null //delete if nned be
  constructor() { }

  public async signIn(){
    let googleUser = await GoogleAuth.signIn();
    console.log(googleUser);
  }

  public signOut(){
    GoogleAuth.signOut();
  }

  

}



