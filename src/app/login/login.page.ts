import { Component, OnInit } from "@angular/core";
import { CommonService } from "../services/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  user = { email: '', password: '' }
  constructor(
    private commonService: CommonService,
  ) {

  }

  ngOnInit() { }


  login() {
    this.commonService.showLoader("Please wait...");
    this.commonService.signIn(this.user.email, this.user.password);
  }


}
