import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { ToastController } from "@ionic/angular";
import { Auth } from 'aws-amplify';
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    private loadingController: LoadingController,
    private storage: Storage,
    private toastController: ToastController,
    private router: Router
  ) { }

  async showLoader(msg) {
    //Dismiss all the pending loader before creating new one
    await this.dismiss();
    await this.loadingController
      .create({
        spinner: "crescent",
        message: msg,
        translucent: true
      })
      .then(resp => {
        resp.present();
      });
  }

  async presentToast(toastMsg, type) {
    const toast = await this.toastController.create({
      message: toastMsg,
      duration: 4000,
      color: type
    });
    toast.present();
  }

  /**
   * Dismiss all the pending loaders, if any
   */
  async dismiss() {
    while ((await this.loadingController.getTop()) !== undefined) {
      await this.loadingController.dismiss();
    }
  }

  getToken() {
    return this.storage.get("ACCESS_TOKEN").then(token => {
      //console.log(token)
      return token;
    });
  }

  async signIn(email, password) {

    try {
      const user = await Auth.signIn(email, password);
      console.log(user);
      this.dismiss();
      this.router.navigateByUrl("/dashboard");
      //this.presentAlert();
    } catch (error) {
      this.dismiss();
      console.log('error signing up:', error);
      this.presentToast('Incorrect username or password.', "danger")

    }
  };
}
