import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";
import {RadioButtonModule} from 'primeng/radiobutton';
import { MyProfilePage } from "./my-profile.page";

const routes: Routes = [
  {
    path: "",
    component: MyProfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    RadioButtonModule
  ],
  declarations: [MyProfilePage]
})
export class MyProfilePageModule {}
