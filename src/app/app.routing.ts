import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { ChampionComponent } from './champion/champion.component';
import { ContactComponent } from './contact/contact.component';




const appRoutes: Routes = [

  {
    path: '',
    component: HomeComponent
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
  }

];






export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
