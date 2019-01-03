import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/authentication.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService, public loadingCtrl: LoadingController) {}

  async ionViewWillEnter(){
    const loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    var isAuth = await this.authService.isAuthenticated();
    loader.dismiss();
    if(!isAuth)
      this.navCtrl.setRoot(LoginPage);
  }
}
