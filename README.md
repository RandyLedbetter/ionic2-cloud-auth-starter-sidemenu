![](http://i.imgur.com/10YWsI3.png)
# Ionic 2 Cloud Auth Starter App (Sidemenu) w/ Settings Page
An Ionic 2 sidemenu starter app with Ionic Cloud Auth Service integration. This version of the app contains a complete user login/registration flow with password reset functionality via the Ionic Cloud Auth service, with custom form validations and error messaging. Once a user is logged in, they are shown the default Ionic 2 Sidemenu Starter App Page1. An additional link has been added to the sidemenu, titled 'Settings', which, when selected, leads the user to a completely functional user settings page which allows the user to update their personal details. Additionally, the settings page example displays a user Gravatar image (if the logged in user has a Gravatar account), and demonstrates managing custom user data (user birthday, collected via ion-datetime) to store additional data not assignable to the Ionic Auth User.details object.

**ANOTHER VERSION OF THIS APP IS AVAILABLE** without the added settings page, which simply opens up to the default Ionic 2 Sidemenu Starter Template page Page1 after logging in. If you would rather use or preview this less involved example, you want to go here instead:
https://github.com/RandyLedbetter/ionic2-cloud-auth-starter-sidemenu.

## Table of Contents
 - [Dependencies](#dependencies)
 - [App Preview](#app-preview)
 - [Getting Started](#getting-started)
 - [File Structure of App](#file-structure-of-app)
 - [Contributing](#contributing)
 
## Dependencies
* [Node.js](https://github.com/nodejs/node)
* [NPM](https://github.com/npm/npm)
* [Angular 2](https://github.com/angular/angular) (2.2.1)
* [Ionic 2](https://github.com/driftyco/ionic/) (2.0.0)
* [Ionic Cloud Auth Service](https://docs.ionic.io/services/auth/) (^0.9.1)

## App Preview
You can view a live demo of this app on iOS and Android mobile devices by downloading the [Ionic View App](http://view.ionic.io) for your desired platform and entering the following code:
**e2e5393d**

##### Sneak Peek
![](http://i.imgur.com/IiZPVzk.png)
![](http://i.imgur.com/y1sSmYI.png)
![](http://i.imgur.com/lJesnc8.png)
![](http://i.imgur.com/L9oCE0U.png)
![](http://i.imgur.com/MMITlUd.png)
![](http://i.imgur.com/XT4duZS.png)
![](http://i.imgur.com/P2XAFxz.png)
![](http://i.imgur.com/ztqFNrq.png)
![](http://i.imgur.com/XksL4z2.png)

## Getting Started
* Install Ionic CLI and Cordova: `npm install -g ionic cordova`. Include [iOS](https://cordova.apache.org/docs/en/latest/guide/platforms/ios/), [Android](https://cordova.apache.org/docs/en/latest/guide/platforms/android/), and/or [Windows](https://cordova.apache.org/docs/en/latest/guide/platforms/win8/index.html) platform support, as appropriate.
* Clone this repository: `git clone -b sidemenu_settings_page --single-branch https://github.com/RandyLedbetter/ionic2-cloud-auth-starter-sidemenu.git`
* Run `npm install` from the project root
* Create an Ionic Cloud account for free at: https://ionic.io/cloud
* Login to your Ionic Cloud account and create a new app along with an Ionic Cloud API Key (you will need your app id, app name, and your Ionic Cloud API key for the next steps).
* Open [ionic.config.json](https://github.com/RandyLedbetter/ionic2-cloud-auth-starter-sidemenu/blob/sidemenu_settings_page/ionic.config.json#L2-L3) in the project root and replace 'YOUR_IONIC_APP_NAME' and 'YOUR_IONIC_APP_ID' with your actual app name and app id created from the previous step.
* Open [.io-config.json](https://github.com/RandyLedbetter/ionic2-cloud-auth-starter-sidemenu/blob/sidemenu_settings_page/.io-config.json#L1) in the project root and replace 'YOUR_IONIC_APP_ID' and 'YOUR_IONIC_CLOUD_API_KEY' with your actual app id and your Ionic Cloud API key.
* Open [config.xml](https://github.com/RandyLedbetter/ionic2-cloud-auth-starter-sidemenu/blob/sidemenu_settings_page/config.xml#L2-L3) in the project root and replace 'com.YOUR_ORGANIZATION_NAME.YOUR_IONIC_APP_NAME' with your unique app store identifier. For example, if my organization's name is 'Jedi Coders' and I named my app 'Padawan Trainer', I would replace 'com.YOUR_ORGANIZATION_NAME.YOUR_IONIC_APP_NAME' with 'com.jedicoders.padawantrainer'. Next, replace the second instance of 'YOUR_IONIC_APP_NAME' with your actual Ionic App name. For example, 'padawantrainer'.
* Finally, open [app.module.ts](https://github.com/RandyLedbetter/ionic2-cloud-auth-starter-sidemenu/blob/sidemenu_settings_page/src/app/app.module.ts#L26) and replace 'YOUR_IONIC_APP_ID' with your actual app id
* Run `ionic serve` in a terminal from the project root to build and launch the app in the browser.
* Optionally, run `ionic platform add ios` and/or `ionic platform add android` and/or `ionic platform add windows` to allow for development with a particular platform. 
* **IMPORTANT:** If you have already added one or more of these platforms to the project, you must run `ionic platform update` for each platform that you have already added. For example, if I already added Android platform support, I would run `ionic platform update android`. This is necessary to update platform configuration files with your actual Ionic App Id and Ionic App Name.
* You're all set.

## File Structure of App

```
ionic2-cloud-auth-starter-sidemenu/
|-- resources/
|-- src/
|    |-- app/
|    |    +-- app.component.ts
|    |    +-- app.html
|    |    +-- app.module.ts
|    |    +-- app.scss
|    |    +-- main.ts
|    |
|    |-- assets/
|    |    +-- icon/
|    |    |    +-- favicon.ico
|    |    |
|    |    +-- images/
|    |         +-- icon.png
|    |         +-- splash.png
|    |
|    |-- pages/                                         * Contains all of our pages
|    |    +-- change-password/                          * Change Password page
|    |    |    +-- change-password.html                 * ChangePasswordPage template
|    |    |    +-- change-password.ts                   * ChangePasswordPage code
|    |    |    +-- change-password.scss                 * ChangePasswordPage stylesheet
|    |    |
|    |    +-- confirm-password-reset/                   * Confirm Password Reset page
|    |    |    +-- confirm-password-reset.html          * ConfirmPasswordResetPage template
|    |    |    +-- confirm-password-reset.ts            * ConfirmPasswordResetPage code
|    |    |    +-- confirm-password-reset.scss          * ConfirmPasswordResetPage stylesheet
|    |    |
|    |    +-- edit-user-details/                        * Edit User Details page
|    |    |    +-- edit-user-details.html               * EditUserDetailsPage template
|    |    |    +-- edit-user-details.ts                 * EditUserDetailsPage code
|    |    |    +-- edit-user-details.scss               * EditUserDetailsPage stylesheet
|    |    |
|    |    +-- forgot-password/                          * Forgot Password page
|    |    |    +-- forgot-password.html                 * ForgotPasswordPage template
|    |    |    +-- forgot-password.ts                   * ForgotPasswordPage code
|    |    |    +-- forgot-password.scss                 * ForgotPasswordPage stylesheet
|    |    |
|    |    +-- login/                                    * Login page
|    |    |    +-- login.html                           * LoginPage template
|    |    |    +-- login.ts                             * LoginPage code
|    |    |    +-- login.scss                           * LoginPage stylesheet
|    |    |
|    |    +-- page1/                                    * Page1 page
|    |    |    +-- page1.html                           * Page1 template
|    |    |    +-- page1.ts                             * Page1 code
|    |    |    +-- page1.scss                           * Page1 stylesheet
|    |    |
|    |    +-- page2/                                    * Page2 page
|    |    |    +-- page2.html                           * Page2 template
|    |    |    +-- page2.ts                             * Page2 code
|    |    |    +-- page2.scss                           * Page2 stylesheet
|    |    |
|    |    +-- settings/                                 * Settings page
|    |    |    +-- settings.html                        * SettingsPage template
|    |    |    +-- settings.ts                          * SettingsPage code
|    |    |    +-- settings.scss                        * SettingsPage stylesheet
|    |    |
|    |    +-- signup/                                   * Signup page
|    |         +-- signup.html                          * SignupPage template
|    |         +-- signup.ts                            * SignupPage code
|    |         +-- signup.scss                          * SignupPage stylesheet
|    |
|    +-- services/                       * Contains all Injectables
|    |     +-- custom-validators.ts      * CustomValidators code
|    |     +-- error-messages.ts         * ErrorMessages code
|    |     +-- user-auth.ts              * UserAuth code
|    +-- theme/                          * App theme files
|    |     +-- variables.scss            * App Shared Sass Variables
|    |
|    |-- index.html
|
+-- .editorconfig                       * Defines coding styles between editors
+-- .gitignore                          * Example git ignore file
+-- io-config.json                      * Ionic Cloud configuration file
+-- LICENSE                             * Apache License
+-- README.md                           * This file
+-- config.xml                          * Cordova configuration file
+-- ionic.config.json                   * Ionic configuration file
+-- package.json                        * Defines our JavaScript dependencies
+-- tsconfig.json                       * Defines the root files and the compiler options
+-- tslint.json                         * Defines the rules for the TypeScript linter
```
## Contributing
Contributions are welcome. If you feel that this project can be improved upon, please feel free to submit a pull request, along with a short explanation of what your proposed modification or addition is designed to do. Alternatively, feel free to fork this repo and do whatever you want.
