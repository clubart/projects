import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { WeatherServerData } from './weatherInfo';

@Injectable({
  providedIn: 'root'
})
export class FetchWeatherService {

  constructor(private httpClient: HttpClient) { }
  
  fetchWeather(zip: string){
  return this.httpClient.get<WeatherServerData>(`http://api.openweathermap.org/data/2.5/weather?appid=cb7c71219cf09eb0bb414b932669be97&zip=${zip}&units=imperial`)
  .pipe(
    map(weatherData => {
      return {
        place: weatherData.name,
        temp: weatherData.main.temp,
        description: weatherData.weather[0].description,
        picture: `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
      };
    }));
}
}
