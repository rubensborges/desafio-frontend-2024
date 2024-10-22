import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PokemonCardComponent } from "../components/pokemon-card/pokemon-card.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, PokemonCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'desafio-inovamobil';
}
