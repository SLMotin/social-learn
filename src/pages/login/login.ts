import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/authentication.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService) {
  }
  
  logIn(value: {email: string, password: string}){
    //to do verificar email e senha com regex
    //to do verificar email e senha no servidor
    alert(value.email + " " + value.password);
  }
}
