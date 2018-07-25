import { Component, OnInit } from '@angular/core';
import { WeathercastService } from '../services/weathercast.service';
import { ForecastDay } from '../common/classes/forecastday';
import { ForecastDateDesc } from '../common/classes/forecastdatedesc';
import { Dictionary } from '../common/classes/dictionary';
import { WindCharacteristics } from '../common/classes/windcharacteristics';
import { CurrentObservation } from '../common/classes/current-observation';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    data: ForecastDay[];

    dataDescribingCollection: ForecastDateDesc[];
    forcastDayDictionary: Dictionary<ForecastDateDesc[]>;
    dataDescribing: ForecastDateDesc[];
    daynumber = 1;
    windProperty: WindCharacteristics;
    currentObservation: CurrentObservation;


    constructor(private weatherService: WeathercastService) {
        this.forcastDayDictionary = new Dictionary<ForecastDateDesc[]>();
        this.weatherService.getForcastData()
            .subscribe(data => {
                let counter = 0;
                this.data = data.forecast.simpleforecast.forecastday;
                this.dataDescribingCollection = data.forecast.txt_forecast.forecastday;
                // Redo
                this.data.forEach(element => {
                    this.forcastDayDictionary
                    .Add(element.period, [this.dataDescribingCollection[counter], this.dataDescribingCollection[counter + 1]]);
                    counter += 2;
                });
                this.onDateSelect(this.daynumber);
            });
            this.weatherService.getConditionsData()
            .subscribe(data => {
                this.currentObservation = data.current_observation;
            })
    }


    public onDateSelect(dayNumber: number) {
        this.daynumber = dayNumber;
        this.windProperty = this.data[this.daynumber - 1].maxwind;
        this.dataDescribing =  this.forcastDayDictionary.Item(this.daynumber);
    }
}
