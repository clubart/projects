import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'weather/:zipInput',
    component: WeatherDisplayComponent
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
