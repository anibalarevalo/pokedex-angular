import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ConnectableObservable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pokemons: any = [];
  pokemonsFiltrados: any = [];
  n:number = 1
  constructor(private http: HttpClient) { }
  mostrarMas = true;

 

  ngOnInit(): void {
    this.http.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0')
    .subscribe( (res:any) => {this.pokemonsFiltrados=[... res.results].splice(0,25) ; this.pokemons = res.results
    }, err => console.log(err))
  }

  searchPokemon(e:string){
    if (e){
      this.pokemonsFiltrados = this.pokemons.filter( (p:any) => p.name.toLowerCase().includes( e.toLowerCase()) ).splice(0,25);
      this.mostrarMas = false
    }else{
      this.pokemonsFiltrados = [... this.pokemons].splice(0,25)
      this.mostrarMas = true
    } 
    console.log (this.mostrarMas)

  }

  loadMore(){
    this.pokemonsFiltrados = this.pokemonsFiltrados.concat([... this.pokemons].splice(25*this.n, 25))
    this.n+=1
  }
}
