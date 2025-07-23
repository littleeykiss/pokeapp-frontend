import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonResponse } from '../../models/pokemon.model';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  template: `
  <div style="max-width: 500px; margin: auto; padding: 2rem;">
  <mat-card>
    <mat-form-field appearance="outline" style="width: 100%;">
      <mat-label>Buscar Pokémon</mat-label>
      <input matInput [(ngModel)]="nombre" (keyup.enter)="buscar()" />
    </mat-form-field>

    <button mat-raised-button color="primary" (click)="buscar()" style="width: 100%; margin-top: 1rem;">
      Buscar
    </button>
  </mat-card>

  <mat-card *ngIf="pokemon" style="margin-top: 2rem; text-align: center;">
    <mat-card-header>
      <mat-card-title>{{ pokemon.nombre | titlecase }}</mat-card-title>
    </mat-card-header>
    <img [src]="'data:image/png;base64,' + pokemon.imagenBase64" style="max-width: 100px; margin: auto;" />
    <mat-card-content>
      <p><strong>Especie:</strong> {{ pokemon.especie }}</p>
      <p><strong>Tipos:</strong> {{ pokemon.tipos.join(', ') }}</p>
      <p><strong>Habilidades:</strong> {{ pokemon.habilidades.join(', ') }}</p>
      <p><strong>Ataques:</strong> {{ pokemon.ataques.join(', ') }}</p>
      <h4>Estadísticas</h4>
      <ul style="list-style: none; padding: 0;">
        <li *ngFor="let stat of pokemon.estadisticas">
          {{ stat.nombre | titlecase }}: {{ stat.valor }}
        </li>
      </ul>
    </mat-card-content>
  </mat-card>

  <p *ngIf="error" style="color: red; font-weight: bold; text-align: center;">{{ error }}</p>
</div>

  `
})
export class SearchForm {
  nombre = '';
  pokemon?: PokemonResponse;
  error: string | null = null;

  constructor(private pokemonService: PokemonService) {}
  @Output() busquedaExitosa = new EventEmitter<void>();

  buscar() {
    
    if (!this.nombre.trim()) return;
    this.error = null;
    this.pokemon = undefined;
    this.busquedaExitosa.emit();

    this.pokemonService.getPokemon(this.nombre.trim().toLowerCase()).subscribe({
      next: (data) => this.pokemon = data,
      error: () => this.error = 'Pokémon no encontrado 😢',
    });
  }

}
