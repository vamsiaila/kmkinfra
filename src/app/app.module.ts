import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
    FpLocationMapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
