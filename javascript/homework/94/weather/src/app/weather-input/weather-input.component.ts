import { Component, OnInit } from '@angular/core';
import { FetchWeatherService } from '../shared/fetch-weather.service';
import { Observable } from 'rxjs';
import { Weather } from '../shared/weatherInfo';

@Component({
  selector: 'app-weather-input',
  templateUrl: './weather-input.component.html',
  styleUrls: ['./weather-input.component.css']
})
export class WeatherInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  zipInput: string;
  //weather: Observable<Weather>;

  getWeather() {
    this.zipInput = '';
  }

}
