import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeathercastService {
  private keyId = 'df78853a92b10b37';
  private forcastDataUrl = '/assets/source/forcast.json';
  private conditionsDataUrl = '/assets/source/conditions.json';

  // Data from the Weather API
  // private dataUrl = 'http://api.wunderground.com/api/' + this.keyId + '/forecast/lang:UA/q/autoip.json';

  constructor(private http: Http) {
  }

  getForcastData() { // Taking Data from the Weather API

    return this.http.get(this.forcastDataUrl)
      .map((res: Response) => res.json());

  }
  getConditionsData() { // Taking Data from the Weather API

    return this.http.get(this.conditionsDataUrl)
      .map((res: Response) => res.json());

  }
}
