import { Component, OnInit } from "@angular/core";
import { QSHttpService } from "../services/qs-http.service.service";
import { URL_QS } from "../services/constants/global.constants";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.page.html",
  styleUrls: ["./create-account.page.scss"]
})
export class CreateAccountPage implements OnInit {
  userDetails: any = {};
  createUserFG: FormGroup;
  createUserData: User = {
    firstName: "",
    fatherName: "",
    lastName: "",
    gender: "",
    mobile: "",
    email: "",
    password: ""
  };
  constructor(
    private qsHttpService: QSHttpService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.createUserFG = this.fb.group({
      firstName: [null],
      fatherName: [null],
      lastName: [null],
      gender: [null],
      mobile: [null],
      email: [null],
      password: [null],
      confirmPassword: [null]
    });
  }

  ngOnInit() {}

  create_user() {
    this.createUserData["firstName"] = this.createUserFG.controls[
      "firstName"
    ].value;
    this.createUserData["fatherName"] = this.createUserFG.controls[
      "fatherName"
    ].value;
    this.createUserData["lastName"] = this.createUserFG.controls[
      "lastName"
    ].value;
    this.createUserData["gender"] = this.createUserFG.controls["gender"].value;
    this.createUserData["email"] = this.createUserFG.controls["email"].value;
    this.createUserData["mobile"] = this.createUserFG.controls["mobile"].value;
    this.createUserData["password"] = this.createUserFG.controls[
      "password"
    ].value;

    console.log(this.createUserData);

    this.qsHttpService
      .call_WS_POST(URL_QS.path.createUser, this.createUserData)
      .subscribe(
        resp => {
          this.userDetails = resp;
          if (
            this.userDetails != "" &&
            this.userDetails.headerDto.responseCode === 201
          ) {
            //sessionStorage.setItem("token", resp["token"]);
            this.router.navigateByUrl("/login");
          }
        },
        error => {}
      );
  }
}

interface User {
  firstName: string;
  fatherName: string;
  lastName: string;
  gender: string;
  mobile: string;
  email: string;
  password: string;
}
