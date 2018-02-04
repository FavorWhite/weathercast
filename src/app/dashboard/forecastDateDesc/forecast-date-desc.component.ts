import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForecastDateDesc } from 'app/common/classes/forecastdatedesc';
import { WindCharacteristics } from 'app/common/classes/windcharacteristics';


@Component({
    selector: 'forecast-date-desc',
    templateUrl: './forecast-date-desc.component.html',
    styleUrls: ['./forecast-date-desc.component.css']
})
export class ForecastDateDescComponent {
    @Input() dataDescribing: ForecastDateDesc[];
    @Input() maxWind: WindCharacteristics[];
}
