import { Component, OnInit, Input } from '@angular/core';
import { WeatherDetails } from '../shared/weatherInfo';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input()
  weatherDetails: WeatherDetails
  constructor() { }

  ngOnInit() {
  }

}
