/* import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
 */





// import { NgModule } from "@angular/core";
// import { AppComponent } from "../app.component";
// import { BrowserModule } from "@angular/platform-browser";
// import { AppRoutingModule } from "../app-routing.module";
// import { HttpClientModule } from "@angular/common/http";
// import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
// import { App } from "@capacitor/app";
// import { StatusBar } from "@capacitor/status-bar";
// import { RouteReuseStrategy } from "@angular/router";

// @NgModule ({
//   declarations: [AppComponent], 
//   // entryComponents: [],       // Deprecated, not necesary anymore
//   imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule], 
//   /* DEPRECATED-> providers: [StatusBar, SplashScreen], {provide: RouteReuseStrategy, useClass: IonicRouteStrategy} */
//   bootstrap: [AppComponent] 
// })
// export class AppModule {}





import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
 
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}