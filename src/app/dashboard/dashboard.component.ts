import { Component, OnInit } from '@angular/core';
import { WeathercastService } from 'app/services/weathercast.service';
import { ForecastDay } from 'app/common/classes/forecastday';
import { ForecastDateDesc } from 'app/common/classes/forecastdatedesc';
import { Dictionary } from 'app/common/classes/dictionary';
import { WindCharacteristics } from 'app/common/classes/windcharacteristics';

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

    constructor(private weatherService: WeathercastService) {
        this.forcastDayDictionary = new Dictionary<ForecastDateDesc[]>();
        this.weatherService.getForcastData()
            .subscribe(data => {
                var counter = 0;
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
    }


    public onDateSelect(dayNumber: number) {
        this.daynumber = dayNumber;
        this.windProperty = this.data[this.daynumber - 1].maxwind;
        this.dataDescribing =  this.forcastDayDictionary.Item(this.daynumber);
    }
}
