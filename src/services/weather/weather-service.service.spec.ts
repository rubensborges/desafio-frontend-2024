/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeatherServiceService } from './weather-service.service';

describe('Service: WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherServiceService]
    });
  });

  it('should ...', inject([WeatherServiceService], (service: WeatherServiceService) => {
    expect(service).toBeTruthy();
  }));
});
