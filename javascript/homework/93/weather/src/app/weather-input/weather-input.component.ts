import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from '../shared/fetch-weather.service';
import { Observable } from 'rxjs';
import WeatherInfo from '../shared/weatherInfo';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css']
})
export class WeatherInputComponent implements OnInit {

  constructor(private fetchWeatherService: FetchWeatherService) { }

  ngOnInit() {

  }

  zipInput: string;
  weather: Observable<WeatherInfo>;

  getWeather(zip: string){
    this.weather= this.fetchWeatherService.fetchWeather(zip);
    console.log(this.weather);
    this.zipInput = '';
  }

}
