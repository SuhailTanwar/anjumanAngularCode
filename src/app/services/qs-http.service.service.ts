import { EventEmitter, Injectable, Output } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { Observable, from } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { Storage } from "@ionic/storage";
import {
  HttpHandler,
  HttpProgressEvent,
  HttpInterceptor,
  HttpSentEvent,
  HttpHeaderResponse,
  HttpUserEvent,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { CommonService } from "./common.service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
@Injectable({
  providedIn: "root"
})
export class QSHttpService implements HttpInterceptor {
  awpURL = environment.apiHost;
  api_token = "";
  constructor(
    private http: HttpClient,
    private commonService: CommonService,
    private storage: Storage
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  > {
    let nextReqauest;
    const token = sessionStorage.getItem("ACCESS_TOKEN");
    if (token) {
      console.log("AT IFF");
      nextReqauest = req.clone({
        headers: req.headers
          .set("Cache-Control", "no-cache")
          .set("Pragma", "no-cache")
          .set("Expires", "Sat, 01 Jan 2000 00:00:00 GMT")
          .set("Authorization", "Bearer " + token)
      });
    } else {
      console.log("AT ELSE");
      nextReqauest = req.clone({
        headers: req.headers
          .set("Cache-Control", "no-cache")
          .set("Pragma", "no-cache")
          .set("Expires", "Sat, 01 Jan 2000 00:00:00 GMT")
        //.set('Access-Control-Allow-Origin', 'http://localhost:3000')
      });
    }

    return next.handle(nextReqauest);
  }

  /**
   * Method to POST any data
   */
  call_WS_POST(path: string, body: any) {
    return this.http.post(this.getURL(path), body, httpOptions);
  }

  call_WS_GET(path: string) {
    return this.http.get(this.getURL(path));
  }

  getURL(path: string) {
    let returnURL;
    if (environment.production) {
      let url = "";
      return (returnURL = url + path);
    }
    return (returnURL = this.awpURL + path);
  }
}
