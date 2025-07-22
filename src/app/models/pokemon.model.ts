export interface Estadistica {
  nombre: string;
  valor: number;
}

export interface PokemonResponse {
  nombre: string;
  especie: string;
  tipos: string[];
  habilidades: string[];
  ataques: string[];
  estadisticas: Estadistica[];
  imagenBase64: string;
}
