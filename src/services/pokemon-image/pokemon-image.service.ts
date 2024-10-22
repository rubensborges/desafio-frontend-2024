import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonImageService {

constructor(private http: HttpClient) { }

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/'

  getImageByName(name: string): Observable<any>{
    const newUrl = `${this.baseUrl}${name}`
    return this.http.get(newUrl)
  }
}
