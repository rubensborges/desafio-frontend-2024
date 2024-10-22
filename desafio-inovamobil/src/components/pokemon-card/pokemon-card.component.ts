import { Component } from '@angular/core';
import { WeatherServiceService } from '../../services/weather/weather-service.service';
import { PokemonServiceService } from '../../services/pokemon/pokemon-service.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  standalone: true,
})
export class PokemonCardComponent {
  city: string = ''
  weather: string = ''
  pokemonName: string = ''
  pokemonType: string = ''
  isRaining: boolean = false

  constructor(private weatherService: WeatherServiceService, private pokemonService: PokemonServiceService) {}

}
