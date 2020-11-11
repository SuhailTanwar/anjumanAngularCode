import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Auth } from 'aws-amplify'
import { ToastController } from '@ionic/angular';
import { CommonService } from "../services/common.service";
import { Router } from "@angular/router"

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.page.html",
  styleUrls: ["./my-profile.page.scss"]
})
export class MyProfilePage implements OnInit {
  profileFG: FormGroup;
  profileDetails: any = {};
  invalidMobileNo = false;
  constructor(
    private fb: FormBuilder,
    //private qsHttpService: QSHttpService,
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

  async ngOnInit() {
    // this.qsHttpService.call_WS_GET(URL_QS.path.getUser).subscribe(
    //   response => {
    //     this.profileDetails = response;
    //     this.profileFG.setValue({
    //       firstName: this.profileDetails.firstName
    //         ? this.profileDetails.firstName
    //         : "",
    //       fatherName: this.profileDetails.fatherName
    //         ? this.profileDetails.fatherName
    //         : "",
    //       lastName: this.profileDetails.lastName
    //         ? this.profileDetails.lastName
    //         : "",
    //       mobile: this.profileDetails.mobile ? this.profileDetails.mobile : "",
    //       grandFatherName: this.profileDetails.grandFatherName
    //         ? this.profileDetails.grandFatherName
    //         : "",
    //       gender: this.profileDetails.gender ? this.profileDetails.gender : "",
    //       dob: this.profileDetails.dob ? this.profileDetails.dob : "",
    //       email: this.profileDetails.email ? this.profileDetails.email : ""
    //     });
    //   },

    //   error => { }
    // );

    this.profileDetails = await Auth.currentAuthenticatedUser({ bypassCache: true });
    const { attributes } = this.profileDetails;
    this.profileFG.setValue({
      firstName: (attributes.name) ? attributes.name : '',
      fatherName: (attributes.middle_name) ? attributes.middle_name : '',
      lastName: (attributes.given_name) ? attributes.given_name : '',
      grandFatherName: (attributes.family_name) ? attributes.family_name : '',
      dob: (attributes.birthdate) ? attributes.birthdate : '',
      gender: (attributes.gender) ? attributes.gender : '',
      mobile: (attributes.phone_number) ? Number(attributes.phone_number.substring(3)) : '',
      email: (attributes.email) ? attributes.email : '',
    })
  }



  async updateUser() {
    this.invalidMobileNo = false;
    console.log(this.profileFG.invalid);
    if (this.profileFG.controls.mobile.value.toString().length < 10) {
      this.invalidMobileNo = true;
      return
    }

    this.commonService.showLoader("Updating...");

    // console.log(this.profileFG.value);
    // this.qsHttpService
    //   .call_WS_POST(URL_QS.path.updateUser, this.profileFG.value)
    //   .subscribe(
    //     resp => {
    //       if (resp["statusCode"] == 200) {
    //         const toastMsg = "Updated Successfully!!";
    //         this.commonService.presentToast(toastMsg, "success");
    //         this.router.navigateByUrl('/dashboard')
    //       }
    //     },
    //     error => { }
    //   );

    await Auth.updateUserAttributes(this.profileDetails, {
      'name': this.profileFG.controls.firstName.value,
      'middle_name': this.profileFG.controls.fatherName.value,
      'given_name': this.profileFG.controls.lastName.value,
      'family_name': this.profileFG.controls.grandFatherName.value,
      'birthdate': this.profileFG.controls.dob.value.split("T")[0],
      'gender': this.profileFG.controls.gender.value,
      'phone_number': "+91" + this.profileFG.controls.mobile.value.toString(),
      'email': this.profileFG.controls.email.value,
    }).then(resp => {
      this.commonService.dismiss();
      this.router.navigateByUrl("/dashboard")
      this.commonService.presentToast("Profile updated Successfully!!", "success")

    }).catch(error => {
      this.commonService.dismiss();
      this.commonService.presentToast(error.message, "danger")
    })
    // console.log(result); // SUCCESS
  }

}
