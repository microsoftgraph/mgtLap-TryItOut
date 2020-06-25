# DemoMgtAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.

## Getting Started
The is the sample code explained in Day 14 - How to use Microsoft Graph Toolkit with Angular

1. Run `npm install` (to download all dependant npm packages)
2. Create an Azure App Registration with the following Graph API permissions
    * openid
    * profile
    * user.read
    * calendars.read
2. Modify src/app/app.component.ts and replace [YOUR-CLIENT-ID] with an Azure App Registration client id
3. Run `ng serve` for a local dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
