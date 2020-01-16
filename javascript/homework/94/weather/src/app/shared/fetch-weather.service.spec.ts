import { TestBed } from '@angular/core/testing';

import { FetchWeatherService } from './fetch-weather.service';

describe('FetchWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchWeatherService = TestBed.get(FetchWeatherService);
    expect(service).toBeTruthy();
  });
});
