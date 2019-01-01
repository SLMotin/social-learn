import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../services/authentication.service';
import { LoadingPage } from '../loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private authService: AuthService) {
    
  }
  async ionViewWillEnter(){
    this.navCtrl.push(LoadingPage);

    var isAuth = await this.authService.isAuthenticated();
    this.navCtrl.pop();
    if(!isAuth)
      this.navCtrl.push(LoginPage);
  }
}
