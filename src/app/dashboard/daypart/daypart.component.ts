import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ForecastDay } from 'app/common/classes/forecastday';


@Component({
    selector: 'daypart',
    templateUrl: './daypart.component.html',
    styleUrls: ['./daypart.component.css']
})
export class DaypartComponent {
    @Input() data: ForecastDay[];
    @Input() daynumber: number;
    @Output() onSelect = new EventEmitter<number>();

    public Select(dayNumber: number) {
        this.onSelect.emit(dayNumber);
    }
}
