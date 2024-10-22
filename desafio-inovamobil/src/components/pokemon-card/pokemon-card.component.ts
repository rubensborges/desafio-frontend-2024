import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather/weather-service.service';
import { PokemonServiceService } from '../../services/pokemon/pokemon-service.service';
import { ShareCityNameService } from '../../services/share/share-city-name.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  standalone: true,
})
export class PokemonCardComponent  {
  city: string = ''
  weather: string = ''
  pokemonName: string = ''
  pokemonType: string = ''
  pokememonId: string = ''
  isRaining: boolean = false

  constructor(private weatherService: WeatherServiceService, private sharedCity: ShareCityNameService, private pokemonService: PokemonServiceService) {}

  ngOnInit(){
    this.sharedCity.cityName.subscribe((cityName)=> {
      this.city = cityName
      this.getWeatherByCityName(cityName)
    })
  }
  

  getWeatherByCityName(city: string){
    console.log(city)
    this.weatherService.getWeather(city).subscribe((data) => {
      console.log(data)
    })
  }
    

}
