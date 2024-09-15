import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'projects',component:ProjectsComponent},
    {path:'about',component:AboutComponent},
    {path:'certifications',component:CertificationsComponent},
    {path:'skills',component:SkillsComponent}

];
