import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { AllprojectsComponent } from '../allprojects/allprojects.component';
import { FpOverviewComponent } from '../fp-overview/fp-overview.component';
import { FpProjectHighlightsComponent } from '../fp-project-highlights/fp-project-highlights.component';
import { FpLocationMapComponent } from '../fp-location-map/fp-location-map.component';
import { FpFloorPlansComponent } from '../fp-floor-plans/fp-floor-plans.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'About', component: AboutusComponent },
  { path: 'FeaturedProject', component: FpOverviewComponent },
  { path: 'AllProjects', component: AllprojectsComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'about', component: AboutusComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
export const routing=RouterModule.forRoot(routes);
