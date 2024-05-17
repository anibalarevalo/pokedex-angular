import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url: string = '?limit=1302&offset=0'
  pokemons: any = [];
  pokemonsFiltrados: any = [];
  n: number = 1;
  m: number = 10;
  mostrarMas = true;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getData(this.url).subscribe({
      next: (data: any) => {
        this.pokemonsFiltrados = [...data.results].splice(0, this.m);
        this.pokemons = data.results;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  searchPokemon(e: string) {
    if (e) {
      this.pokemonsFiltrados = this.pokemons.filter((p: any) => p.name.toLowerCase().includes(e.toLowerCase())).splice(0, this.m);
      this.mostrarMas = false
    } else {
      this.pokemonsFiltrados = [... this.pokemons].splice(0, this.m)
      this.mostrarMas = true
    }
    console.log(this.mostrarMas)
  }

  loadMore() {
    this.pokemonsFiltrados = this.pokemonsFiltrados.concat([... this.pokemons].splice(this.m * this.n, this.m))
    this.n += 1
  }
}
