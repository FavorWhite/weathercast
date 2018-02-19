import { Component, Input } from '@angular/core';
import { CurrentObservation } from '../../common/classes/current-observation';

@Component({
    selector: 'conditions',
    templateUrl: './conditions.component.html',
    styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
    @Input() data: CurrentObservation;

}


