import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllprojectsComponent } from './allprojects/allprojects.component';
import { FpOverviewComponent } from './fp-overview/fp-overview.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';
import { FpProjectHighlightsComponent } from './fp-project-highlights/fp-project-highlights.component';
import { FpLocationMapComponent } from './fp-location-map/fp-location-map.component';
import { FpFloorPlansComponent } from './fp-floor-plans/fp-floor-plans.component';
import {routing} from './my-module/my-module-routing.module';
import { FpHomeComponent } from './fp-home/fp-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    AllprojectsComponent,
    FpOverviewComponent,
    SubNavComponent,
    FpProjectHighlightsComponent,
    FpLocationMapComponent,
    FpFloorPlansComponent,
    FpHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
