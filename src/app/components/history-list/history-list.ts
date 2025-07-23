import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-history-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="margin-top: 1rem;">
      <h3 style="text-align: center;">Historial de búsquedas</h3>
      <ul style="list-style: none; padding: 0; max-height: 80vh; overflow-y: auto;">
        <li
          *ngFor="let item of historial"
          [ngStyle]="{ backgroundColor: item === historial[0] ? '#292929' : 'transparent' }"
          style="padding: 0.5rem 1rem; border-bottom: 1px solid #555; transition: background 0.3s ease;"
        >
          <strong>{{ item.nombrePokemon | titlecase }}</strong>
          <br />
          <small>{{ item.fechaConsulta | date:'short' }}</small>
        </li>
      </ul>
    </div>
  `
})
export class HistoryList implements OnInit, OnDestroy {
  historial: { nombrePokemon: string; fechaConsulta: string }[] = [];
  private autoRefreshSub?: Subscription;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.actualizarHistorial();

    // Actualización automática cada 10 segundos
    this.autoRefreshSub = interval(10000).subscribe(() => {
      this.actualizarHistorial();
    });
  }

  actualizarHistorial(): void {
    this.pokemonService.getHistorial().subscribe((data) => {
      this.historial = data.reverse(); // Mostrar los más recientes arriba
    });
  }

  ngOnDestroy(): void {
    this.autoRefreshSub?.unsubscribe(); // Limpieza para evitar fugas
  }
}
