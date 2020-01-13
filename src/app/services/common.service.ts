import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(
    private loadingController: LoadingController,
    private storage: Storage,
    private toastController: ToastController
  ) {}

  async showLoader() {
    //Dismiss all the pending loader before creating new one
    await this.dismiss();
    await this.loadingController
      .create({
        spinner: "crescent",
        duration: 3000,
        message: "Please wait...",
        translucent: true
      })
      .then(resp => {
        resp.present();
      });
  }

  async presentToast(toastMsg) {
    const toast = await this.toastController.create({
      message: toastMsg,
      duration: 2000
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
}
