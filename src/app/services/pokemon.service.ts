import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonResponse } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'http://localhost:8080/pokemon'; // Cambia si tu backend está en otro puerto

  constructor(private http: HttpClient) {}

  getPokemon(nombre: string): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(`${this.baseUrl}/${nombre}`);
  }

  getHistorial(): Observable<{ nombrePokemon: string; fechaConsulta: string }[]> {
    return this.http.get<{ nombrePokemon: string; fechaConsulta: string }[]>(
      `${this.baseUrl}/busquedas`
    );
  }
}
