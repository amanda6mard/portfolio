import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ProjectsComponent} from "./pages/projects/projects.component";
import {CvComponent} from "./pages/cv/cv.component";

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "about", component: AboutComponent},
  {path: "contact", component: ContactComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "cv", component: CvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
