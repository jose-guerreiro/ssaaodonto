import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController } from '@ionic/angular';
import { AccessProviders } from './access-providers';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  u_name          : string = "";
  u_email_address : string = "";
  u_password      : string = "";
  u_confirm_password : string = "";

  disabledButton;

  constructor(
    private router : Router,
    private toastCtrl : ToastController,
    private loadingCtrl : LoadingController,
    private alertCtrl : AlertController,
    private accsPrvds: AccessProviders
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  async tryRegister(){
    if(this.u_name == ""){
      this.presentToast('Name is required');
    }else if(this.u_email_address == ""){
      this.presentToast('Email is required');
    }else if(this.u_password == ""){
      this.presentToast('Password is required');
    }else if(this.u_confirm_password != this.u_password){
      this.presentToast('Password are not the same');
    }else{
      this.disabledButton = true;
      const loader = await this.loadingCtrl.create({
        message: 'Please wait a moment...',
      });
      loader.present();

      return new Promise(resolve =>{
        let body = {
          aksi: 'proses_register',
          u_name: this.u_name,
          u_email_address: this.u_email_address,
          u_password: this.u_password
        }

        this.accsPrvds.postData(body, 'proses_api.php').subscribe((res:any)=>{
          if(res.success==true){
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
            this.router.navigate(['/login']);
          }else{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast(res.msg);
          }
        },(err)=>{
          loader.dismiss();
          this.disabledButton = false;
          this.presentAlert('Timeout');
        });
      });
    }
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message : a,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  async presentAlert(a){
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [
      {
        text: 'Close',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
          //action
        }
      }, {
          text: 'Try Again',
          handler: () => {
            this.tryRegister();
          }
        }
      ]
    });
    await alert.present();
  }
}
