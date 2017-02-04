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
    ConfirmPasswordResetPage,
    ErrorMessages
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    LoginPage,
    SignupPage,
    ForgotPasswordPage,
    ConfirmPasswordResetPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  Storage,
  UserAuth,
  CustomValidators
  ]
})
export class AppModule {}
