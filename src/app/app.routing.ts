import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { ChampionComponent } from './champion/champion.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';


const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'project-details/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'champion',
    component: ChampionComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
