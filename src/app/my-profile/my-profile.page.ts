import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { QSHttpService } from "../services/qs-http.service.service";
import { URL_QS } from "../services/constants/global.constants";
import { CommonService } from "../services/common.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.page.html",
  styleUrls: ["./my-profile.page.scss"]
})
export class MyProfilePage implements OnInit {
  profileFG: FormGroup;
  profileDetails: any = {};
  constructor(
    private fb: FormBuilder,
    private qsHttpService: QSHttpService,
    private commonService: CommonService,
    private router: Router
  ) {
    this.profileFG = fb.group({
      firstName: [null],
      fatherName: [null],
      lastName: [null],
      grandFatherName: [null],
      dob: [null],
      gender: [null],
      mobile: [null],
      email: [null]
    });
  }

  ngOnInit() {
    this.qsHttpService.call_WS_GET(URL_QS.path.getUser).subscribe(
      response => {
        this.profileDetails = response;
        this.profileFG.setValue({
          firstName: this.profileDetails.firstName
            ? this.profileDetails.firstName
            : "",
          fatherName: this.profileDetails.fatherName
            ? this.profileDetails.fatherName
            : "",
          lastName: this.profileDetails.lastName
            ? this.profileDetails.lastName
            : "",
          mobile: this.profileDetails.mobile ? this.profileDetails.mobile : "",
          grandFatherName: this.profileDetails.grandFatherName
            ? this.profileDetails.grandFatherName
            : "",
          gender: this.profileDetails.gender ? this.profileDetails.gender : "",
          dob: this.profileDetails.dob ? this.profileDetails.dob : "",
          email: this.profileDetails.email ? this.profileDetails.email : ""
        });
      },

      error => {}
    );
  }

  updateUser() {
    console.log(this.profileFG.value); 
    this.qsHttpService
      .call_WS_POST(URL_QS.path.updateUser, this.profileFG.value)
      .subscribe(
        resp => {
          if (resp["statusCode"] == 200) {
            const toastMsg = "Updated Successfully!!";
            this.commonService.presentToast(toastMsg);
            this.router.navigateByUrl('/dashboard')
          }
        },
        error => {}
      );
  }
}
