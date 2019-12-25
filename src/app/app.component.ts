import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate = [
      {
        title: "Home",
        url: "/home",
        icon: "home"
      },
      {
        title: "My Profile",
        url: "/my-profile",
        icon: "person"
      },
      {
        title: "Community Stats",
        url: "/contacts", 
        icon: "contacts"
      },

      {
        title: "Notification",
        url: "/contacts",
        icon: "notifications"
      },
      {
        title: "Setting",
        url: "/contacts",
        icon: "settings"
      },
      {
        title: "Logout",
        url: "/login",
        icon: "log-out"
      }
    ];
  }
}
