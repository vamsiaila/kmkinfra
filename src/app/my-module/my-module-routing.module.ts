import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { AllprojectsComponent } from '../allprojects/allprojects.component';
import { FpOverviewComponent } from '../fp-overview/fp-overview.component';
import { SubNavComponent } from '../sub-nav/sub-nav.component';
import { FpProjectHighlightsComponent } from '../fp-project-highlights/fp-project-highlights.component';
import { FpLocationMapComponent } from '../fp-location-map/fp-location-map.component';
import { FpFloorPlansComponent } from '../fp-floor-plans/fp-floor-plans.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'products', component: AllprojectsComponent },
  { path: 'contact', component: FpOverviewComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyModuleRoutingModule { }
export const routing=RouterModule.forRoot(routes);
