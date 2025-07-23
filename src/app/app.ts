import { Component, ViewChild } from '@angular/core';
import { SearchForm } from './components/search-form/search-form';
import { HistoryList } from './components/history-list/history-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchForm, HistoryList],
template: `
  <div style="display: flex; height: 100vh;">
    <div style="width: 250px; background: #1e1e1e; padding: 1rem; overflow-y: auto;">
      <app-history-list />
    </div>
    <div style="flex-grow: 1; padding: 2rem;">
      <h1 style="text-align: center; color: #ef5350;">PokeAPI Angular</h1>
      <app-search-form (busquedaExitosa)="actualizarHistorial()" />
    </div>
  </div>
`

})
export class AppComponent {
  @ViewChild('historialRef') historial!: HistoryList;

  actualizarHistorial() {
    this.historial.actualizarHistorial();
  }
}
