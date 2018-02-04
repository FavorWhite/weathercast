import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { WeathercastService } from 'app/services/weathercast.service';
import { DaypartComponent } from 'app/dashboard/daypart/daypart.component';
import { ForecastDateDescComponent } from 'app/dashboard/forecastDateDesc/forecast-date-desc.component';
import { NavigationComponent } from 'app/navigation/navigation.component';
import { ConditionsComponent } from 'app/dashboard/conditions/conditions.component';
import { HourlyComponent } from 'app/hourly/hourly.component';
import { appRoutes } from 'app/routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DaypartComponent,
    ForecastDateDescComponent,
    NavigationComponent,
    ConditionsComponent,
    HourlyComponent
  ],
  providers: [WeathercastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
