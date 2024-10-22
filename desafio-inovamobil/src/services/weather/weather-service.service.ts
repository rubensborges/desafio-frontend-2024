import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiKey: string =  '5723764d68edb7f764d7be3aa599977f'
  private url: string =  'https://api.openweathermap.org/data/2.5/'

constructor(private http: HttpClient) {}
  getWather(city: string): Observable<any>{
    const newURl = `${this.url}?q${city}&appid=${this.apiKey}`
    return this.http.get(newURl)
  }

}
