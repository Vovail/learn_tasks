import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { routing } from "./app.routing"

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { FullResumeComponent } from './full-resume/full-resume.component';
import { CertificatesComponent } from './certificates/certificates.component';

import {CommonService} from "./shared/services/common.service";
import {QuotesModule} from "./quotes/quotes.module";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CvComponent,
    FullResumeComponent,
    CertificatesComponent
  ],
  imports: [
    MaterialModule.forRoot(),
    QuotesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
