import { TestBed, inject } from '@angular/core/testing';

import { WeathercastService } from './weathercast.service';

describe('WeathercastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeathercastService]
    });
  });

  it('should be created', inject([WeathercastService], (service: WeathercastService) => {
    expect(service).toBeTruthy();
  }));
});
