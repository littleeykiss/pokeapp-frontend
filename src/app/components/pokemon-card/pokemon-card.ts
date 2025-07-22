import { Component, Input } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { PokemonResponse } from '../../models/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, TitleCasePipe],
  template: `
    <div class="card" *ngIf="pokemon">
      <h2>{{ pokemon.nombre | titlecase }}</h2>
      <img [src]="'data:image/png;base64,' + pokemon.imagenBase64" alt="pokemon" />
      <p><strong>Especie:</strong> {{ pokemon.especie }}</p>
      <p><strong>Tipos:</strong> {{ pokemon.tipos.join(', ') }}</p>
      <p><strong>Habilidades:</strong> {{ pokemon.habilidades.join(', ') }}</p>
      <p><strong>Ataques:</strong> {{ pokemon.ataques.join(', ') }}</p>
      <ul>
        <li *ngFor="let stat of pokemon.estadisticas">
          {{ stat.nombre | titlecase }}: {{ stat.valor }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .card {
      max-width: 500px;
      margin: 1rem auto;
      padding: 1rem;
      border-radius: 8px;
      background: #f0f0f0;
      text-align: center;
    }
    img {
      max-width: 200px;
      margin: 1rem auto;
    }
  `]
})
export class PokemonCard {
  @Input() pokemon!: PokemonResponse;
}
