import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../shared/weatherInfo';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FetchWeatherService } from '../shared/fetch-weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  @Input()
  weather: Weather;

  constructor(private route: ActivatedRoute,
    private router: Router, private fetchWeatherService: FetchWeatherService ) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.fetchWeatherService.fetchWeather(params.get('zipInput'))))
        .subscribe(weather => {
          this.weather = weather;
        });
  }

}
