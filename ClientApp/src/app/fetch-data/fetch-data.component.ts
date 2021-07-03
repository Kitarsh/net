import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherForecast } from './fetch-data';
import { FetchDataService } from './fetch-data.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit, OnDestroy {
  public forecasts: WeatherForecast[];
  subscribed: Subscription;

  constructor(private srv: FetchDataService) { }

  ngOnDestroy(): void {
    this.subscribed.unsubscribe();
  }

  ngOnInit(): void {
    this.subscribed = this.srv.getFetchData().subscribe((result: WeatherForecast[]) => {
      this.forecasts = result;
    });
  }
}
