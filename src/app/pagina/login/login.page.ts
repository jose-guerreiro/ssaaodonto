import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
//import { map } from 'rxjs/operators';
import { Http } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string = "";
  senha : string = "";

  constructor(private alertCtrl: AlertController, public https: Http) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!' + this.email + this.senha,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async logar() {
    if(this.email == '' || this.senha == ''){
      const alert = await this.alertCtrl.create({
        header: 'Atenção!',
        subHeader: 'Erro de Aesso.',
        message: "Preencha todos os campos!",
        buttons: ["Ok"]
      });
      await alert.present();
    } else {

    }
  }

  NewCadastro(){
  }

  NewSenha(){
  }

}
