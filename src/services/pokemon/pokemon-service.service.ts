import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private url: string = 'https://pokeapi.co/api/v2/type/'
constructor(private http: HttpClient) { }

getPokemon(type: string): Observable<any>{
  const newURl = `${this.url}${type}`
  return this.http.get(newURl)
}

}
