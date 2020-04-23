import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeAndLivingComponent } from './home-and-living/home-and-living.component';
import { SideComponent } from './side/side.component';

const routes: Routes = [
  {
    path: 'home-and-living',
    component: HomeAndLivingComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  },
  {
    path: '',
    redirectTo: '/men',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/men',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
