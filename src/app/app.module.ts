import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatModule } from './matmodule';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { HeaderComponent } from './layout/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { JobsComponent } from './components/jobs/jobs.component';


@NgModule({
  declarations: [AppComponent, NavBarComponent, HeaderComponent, SkillsComponent, ProjectsComponent, JobsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
