import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  url: string = '?limit=1025&offset=0'
  pokemons: any = [];
  pokemonsFiltrados: any = [];
  n: number = 1;
  m: number = 25;

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
    } else {
      this.pokemonsFiltrados = [... this.pokemons].splice(0, this.m);
    }
  }

  loadMore() {
    this.pokemonsFiltrados = this.pokemonsFiltrados.concat([... this.pokemons].splice(this.m * this.n, this.m));
    this.n += 1;
  }

  onScroll() {
    this.loadMore();
  }
}
