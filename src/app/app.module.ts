import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { Storage } from "@ionic/storage";
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { UserAuth } from "../services/user-auth";
import { CustomValidators } from "../services/custom-validators";
import { ErrorMessages } from "../services/error-messages";
import { ConfirmPasswordResetPage } from "../pages/confirm-password-reset/confirm-password-reset";
import { ForgotPasswordPage } from "../pages/forgot-password/forgot-password";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { SettingsPage } from "../pages/settings/settings";
import { ChangePasswordPage } from "../pages/change-password/change-password";
import { EditUserDetailsPage } from "../pages/edit-user-details/edit-user-details";
import { MomentModule } from "angular2-moment";


const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'YOUR_IONIC_APP_ID'
  }
};

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    SettingsPage,
    ChangePasswordPage,
    EditUserDetailsPage,
    ConfirmPasswordResetPage,
    ErrorMessages
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    ConfirmPasswordResetPage,
    SettingsPage,
    ChangePasswordPage,
    EditUserDetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  Storage,
  UserAuth,
  CustomValidators
  ]
})
export class AppModule {}
