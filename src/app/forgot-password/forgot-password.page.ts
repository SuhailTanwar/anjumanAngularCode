import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Auth } from 'aws-amplify';
import { CommonService } from "../services/common.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  user = { email: '', otpNumber: "", password: "" }
  isSendOTPClicked = false;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() {
    this.user = { email: '', otpNumber: "", password: "" }
    console.log(this.user)
  }

  async sendOTP() {
    this.isSendOTPClicked = true;
    let toastMsg = 'OTP has been sent to your email ' + this.user.email + ', Please enter OTP to verfiy your email.'
    this.commonService.presentToast(toastMsg, "primary");
    await Auth.forgotPassword(this.user.email)
      .then(data => console.log(data))
      .catch(err => {
        console.log(err)
        this.commonService.presentToast('Invalid Email ' + this.user.email, "warning");
      });
  }
  async forgotPswrdSubmit() {
    this.commonService.showLoader();
    await Auth.forgotPasswordSubmit(this.user.email, this.user.otpNumber.toString(), this.user.password)
      .then(data => {
        this.commonService.dismiss();
        let toastMsg = 'New Password has been set successfully!!'
        this.commonService.presentToast(toastMsg, "success");
        this.router.navigateByUrl('/login');
        console.log(data)
      })
      .catch(err => {
        console.log(err)
        this.commonService.dismiss();
        this.commonService.presentToast('Invalid OTP provided, Please request a new OTP and try again.',"danger");
      });
  }

}
