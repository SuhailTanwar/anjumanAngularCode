import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from 'aws-amplify'
import { ToastController } from '@ionic/angular';
import { CommonService } from "../services/common.service";

@Component({
  selector: "app-create-account",
  templateUrl: "./create-account.page.html",
  styleUrls: ["./create-account.page.scss"]
})
export class CreateAccountPage implements OnInit {


  user = {
    username: '',
    phone_number: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  isBothPswrdSame: boolean = true;
  constructor(
    private router: Router,
    private toastController: ToastController,
    private commonService: CommonService
  ) { }
  @ViewChild('f', { static: true }) UserForm;

  ngOnInit() { }

  create_user() {
    this.signUp();


    // this.qsHttpService
    //   .call_WS_POST(URL_QS.path.createUser, this.createUserData)
    //   .subscribe(
    //     resp => {
    //       this.userDetails = resp;
    //       if (
    //         this.userDetails != "" &&
    //         this.userDetails.headerDto.responseCode === 201
    //       ) {
    //         //sessionStorage.setItem("token", resp["token"]);
    //         this.router.navigateByUrl("/login");
    //       }
    //     },
    //     error => {}
    //   );


  }

  async signUp() {
    this.isBothPswrdSame = true;
    console.log(this.UserForm)
    console.log(this.UserForm.form.value.password);
    console.log(this.UserForm.form.value.confirmPassword);
    if (this.UserForm.form.value.password != this.UserForm.form.value.confirmPassword) {
      this.isBothPswrdSame = false;
      return
    }
    this.commonService.showLoader("Creating Account...");
    let { username, password, email } = this.user;
    let phone_number = (this.user.phone_number.toString() === '') ? this.user.phone_number.toString() : '+91' + this.user.phone_number.toString();
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,         // optional
          phone_number,   // optional - E.164 number convention
          // other custom attributes 
        }
      });
      console.log(user);
      this.commonService.dismiss();
      this.presentToastWithOptions();
    } catch (error) {
      this.commonService.dismiss();
      this.commonService.presentToast(error.message, "danger")
      console.log('error signing up:', error);
    }

  };


  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'WELCOME!!',
      message: `You have successfully registered a new account.` +
        `We have sent you an email. Please click on the confirmation link to verfiy your account`,
      position: 'top',
      keyboardClose: true,
      duration: 5000,
      color: "success"
    });
    toast.present();
    this.router.navigateByUrl("/login")
  }



}

interface User {
  username: string;
  email: string;
  password: string;
  phone_number: string;
}
