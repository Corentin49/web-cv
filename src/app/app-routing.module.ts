import { NgModule } from '@angular/core';
import type { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: 'skills', component: SkillsComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '', redirectTo: '/skills', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
