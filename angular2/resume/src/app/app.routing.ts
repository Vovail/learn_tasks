import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { FullResumeComponent } from './full-resume/full-resume.component';
import { CertificatesComponent } from './certificates/certificates.component';

const appRoutes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "cv", component: CvComponent},
  {path: "resume", component: FullResumeComponent},
  {path: "certificates", component: CertificatesComponent},
  {path: "**", redirectTo: "/home", pathMatch: "full"}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
