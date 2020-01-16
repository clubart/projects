import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInputComponent } from './weather-input/weather-input.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInputComponent,
    WeatherDisplayComponent,
    PageNotFoundComponent,
    WeatherDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
