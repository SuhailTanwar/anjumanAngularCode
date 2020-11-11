import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { QSHttpService } from "../app/services/qs-http.service.service";
import { IonicStorageModule } from "@ionic/storage";
import Amplify from 'aws-amplify';

const cognito = require('./config.json');

Amplify.configure({
  Auth: {
    mandatorySignId: true,
    region: cognito.cognito.REGION,
    userPoolId: cognito.cognito.USER_POOL_ID,
    userPoolWebClientId: cognito.cognito.APP_CLIENT_ID
  }
})

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: QSHttpService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
