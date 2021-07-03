import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherForecast } from './fetch-data';

@Injectable({
  providedIn: 'root',
})
export class FetchDataService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string) { }

  getFetchData(): Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.baseUrl + 'weatherforecast');
  }
}
