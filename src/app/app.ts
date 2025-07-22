import { Component } from '@angular/core';
import { SearchForm } from './components/search-form/search-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchForm],
  template: `
    <h1 style="text-align: center; color: #ef5350; margin-top: 2rem;">
      PokeAPI Angular
    </h1>
    <app-search-form />
  `,
})
export class AppComponent {}
