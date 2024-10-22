import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../../services/weather/weather-service.service';
import { PokemonServiceService } from '../../services/pokemon/pokemon-service.service';
import { ShareCityNameService } from '../../services/share/share-city-name.service';
import { CommonModule } from '@angular/common';
import { PokemonImageService } from '../../services/pokemon-image/pokemon-image.service';


@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PokemonCardComponent  {
  city: string = ''
  weather: string | undefined = ''
  pokemonName: string = ''
  pokemonType: string = ''
  pokememonId: string = ''
  isRaining: boolean | null = null
  isLoading: boolean = true
  pokemon: any;
  backgroundColor: string = ''
  pokemonImg: string | null = null

  constructor(private weatherService: WeatherServiceService, private pokemonImageService: PokemonImageService, private sharedCity: ShareCityNameService, private pokemonService: PokemonServiceService) {}

  ngOnInit(){
    this.sharedCity.cityName.subscribe((cityName)=> {
      this.city = cityName
      this.getWeatherByCityName(cityName)
    })
  }
  

  getWeatherByCityName(city: string){
    this.weatherService.getWeather(city).subscribe((data) => {
      const temperatureConvertedToCelsius = (data.main.temp - 273.15).toFixed(0)
      this.isRaining = data.weather[0].main === "Rain" ? true : false
      this.weather = temperatureConvertedToCelsius
      this.isLoading = false
      this.determinePokemonType(temperatureConvertedToCelsius)
      this.fetchPokemon()
      this.determineBackgroundColorBasedOnPokemonType(this.pokemonType)
    })
  }

  determinePokemonType(temp: string): void {
    if (this.isRaining) {
      this.pokemonType = 'electric';
    } else if (Number(temp) < 5) {
      this.pokemonType = 'ice';
    } else if (Number(temp) >= 5 && Number(temp) < 10) {
      this.pokemonType = 'water';
    } else if (Number(temp) >= 12 && Number(temp) < 15) {
      this.pokemonType = 'grass';
    } else if (Number(temp) >= 15 && Number(temp) < 21) {
      this.pokemonType = 'ground';
    } else if (Number(temp) >= 23 && Number(temp) < 27) {
      this.pokemonType = 'bug';
    } else if (Number(temp) >= 27 && Number(temp) <= 33) {
      this.pokemonType = 'rock';
    } else if (Number(temp) > 33) {
      this.pokemonType = 'fire';
    } else {
      this.pokemonType = 'normal';
    }
  }

  determineBackgroundColorBasedOnPokemonType(type: string): void{
    switch(type){
      
      case 'ice':
        this.backgroundColor = '#A7D3E0'; 
        break;
      case 'electric':
        this.backgroundColor = '#F6E86E'; 
        break;
      case 'water':
        this.backgroundColor = '#7FD3F7'; 
        break;
      case 'grass':
        this.backgroundColor = '#A8D80D';
        break;
      case 'ground':
        this.backgroundColor = '#D6C5A0'; 
        break;
      case 'bug':
        this.backgroundColor = '#A8D41E'; 
        break;
      case 'rock':
        this.backgroundColor = '#B5A26D';
        break;
      case 'fire':
        this.backgroundColor = '#FB6C6B'; 
        break;
      case 'normal':
        this.backgroundColor = '#D9D9D9';
        break;
      default:
        this.backgroundColor = '#FFFFFF'; 
    }
  
  }



  fetchPokemon(): void {
    this.pokemonService.getPokemon(this.pokemonType).subscribe((data) => {
      const randomIndex = Math.floor(Math.random() * data.pokemon.length);
      this.pokemonName = data.pokemon[randomIndex].pokemon.name;
      this.pokemonImageService.getImageByName(this.pokemonName).subscribe((data)=> {
        this.pokemonImg = data.sprites.front_default
        this.pokememonId = data.id
      })

    });
  }
}
    


