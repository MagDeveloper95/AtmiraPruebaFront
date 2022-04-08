import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NasaRoutingModule } from './nasa-routing.module';
import { NasaCardComponent } from './components/nasa-card/nasa-card.component';
import { NasaInformationComponent } from './components/nasa-information/nasa-information.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetailsComponent } from './pages/details/details.component';
import { LogAtmiraComponent } from './components/log-atmira/log-atmira.component';


@NgModule({
  declarations: [
    NasaCardComponent,
    NasaInformationComponent,
    BackButtonComponent,
    HomePageComponent,
    DashboardComponent,
    DetailsComponent,
    LogAtmiraComponent
  ],
  imports: [
    CommonModule,
    NasaRoutingModule
  ],
  exports: [ HomePageComponent ]
})
export class NasaModule { }
