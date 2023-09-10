import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CvComponent } from './pages/cv/cv.component';
import { PageComponent } from './components/page/page.component';
import { PageTitleComponent } from './components/page/page-title/page-title.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { PillComponent } from './components/pill/pill.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ImageModalComponent } from './components/image-modal/image-modal.component';
import { PillBoxComponent } from './components/pill-box/pill-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomepageComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    CvComponent,
    PageComponent,
    PageTitleComponent,
    ProjectCardComponent,
    PillComponent,
    ToggleComponent,
    SvgIconComponent,
    ImageModalComponent,
    PillBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
