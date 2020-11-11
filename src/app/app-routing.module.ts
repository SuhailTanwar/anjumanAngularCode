import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticateUser } from './services/authenticateUser.service'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthenticateUser] },
  { path: 'header', loadChildren: './header/header.module#HeaderPageModule', canActivate: [AuthenticateUser] },
  { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfilePageModule', canActivate: [AuthenticateUser] },
  { path: 'welcome', loadChildren: './welcome/welcome.module#WelcomePageModule', canActivate: [AuthenticateUser] },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
