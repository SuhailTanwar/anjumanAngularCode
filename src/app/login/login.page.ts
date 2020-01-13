import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { QSHttpService } from "../services/qs-http.service.service";
import { URL_QS } from "../services/constants/global.constants";
import { CommonService } from "../services/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  loginFG: FormGroup;
  loginDetails: any = {};
  constructor(
    private fb: FormBuilder,
    private qsHttpService: QSHttpService,
    private commonService: CommonService,
    private router: Router
  ) {
    this.loginFG = fb.group({
      email: [null],
      password: [null]
    });
  }

  ngOnInit() {}
  login() {
    let email = this.loginFG.controls["email"].value;
    let password = this.loginFG.controls["password"].value;
    this.commonService.showLoader();
    this.qsHttpService
      .call_WS_POST(URL_QS.path.loginUser, { email, password })
      .subscribe(
        response => {
          this.loginDetails = response;
          if (
            this.loginDetails !== "" &&
            this.loginDetails.headerDto.responseCode === 200
          ) {
           
            sessionStorage.setItem(
              "fullName",
              this.loginDetails.user.firstName +
                " " +
                this.loginDetails.user.lastName
            );
            sessionStorage.setItem("id", this.loginDetails.user._id);
            sessionStorage.setItem("ACCESS_TOKEN", this.loginDetails.token);
            setTimeout(() => {
              this.commonService.dismiss();
              this.router.navigateByUrl("/dashboard");
            }, 1500);
            
          }
        },
        error => {}
      );
  }
}
