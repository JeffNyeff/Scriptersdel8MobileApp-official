import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public navCtrl:NavController,private googlePlus: GooglePlus) { }

  GoogleLogin(){
    this.googlePlus.login({})
  .then(res => console.log(res))
  .catch(err => console.error(err));
  }
  ngOnInit() {
  }

}
