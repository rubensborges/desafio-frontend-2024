import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PokemonCardComponent } from "../components/pokemon-card/pokemon-card.component";
import { ShareCityNameService } from '../services/share/share-city-name.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MatIconModule, PokemonCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-inovamobil';
  
  city: string = ''
  
  constructor(private shareCityName: ShareCityNameService){}

  onSubmit(){
    this.shareCityName.setCity(this.city)
  }

}
