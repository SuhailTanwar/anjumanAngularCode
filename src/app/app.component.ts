import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { QSHttpService } from "./services/qs-http.service.service";
import { URL_QS } from "./services/constants/global.constants";
import { CommonService } from "./services/common.service";
import { Router } from "@angular/router";
import { Auth } from 'aws-amplify';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  navigate: any;
  profileName: String;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private qsHttpService: QSHttpService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  willOpenMenu() {
    console.log("willOpenMenu");
    this.profileName = sessionStorage.getItem("fullName");
  }

  logout() {
    // this.qsHttpService.call_WS_POST(URL_QS.path.logoutUserAll, "").subscribe(
    //   resp => {
    //     if (resp && resp["headerDto"].responseCode == 200) {
    //       this.router.navigateByUrl("/login");
    //     }
    //   },
    //   error => {
    //     console.log("");
    //   }
    // );
    this.signOut();
  }
  async signOut() {
    try {
      await Auth.signOut();
      this.router.navigateByUrl("/login");
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
