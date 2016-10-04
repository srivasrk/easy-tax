import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { routing } from "./app.routes";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeService } from "./home/home.service";
import { AgmCoreModule } from "angular2-google-maps/core";
import {Ng2PageScrollModule} from "ng2-page-scroll/src/ng2-page-scroll.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2PageScrollModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyALmgl4ViP72v3sQwdF8_Bcaigdl8uxISg'
    }),
    routing
  ],
  providers: [
      HomeService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
