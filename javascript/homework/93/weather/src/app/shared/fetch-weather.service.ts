import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import WeatherInfo from './weatherInfo';

@Injectable({
  providedIn: 'root'
})
export class FetchWeatherService {

  constructor(private httpClient: HttpClient) { }
  
  fetchWeather(zip: string): Observable<WeatherInfo>{
  return this.httpClient.get<WeatherInfo>(`http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${zip}&units=imperial`)
    
}
}
