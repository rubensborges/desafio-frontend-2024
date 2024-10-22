import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareCityNameService {
  private citySubject = new BehaviorSubject<string>('')
  cityName = this.citySubject.asObservable()

  setCity(city: string){
    this.citySubject.next(city)
  }

}
