import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  data?: Pokemon;
  cargando = true;
  cargandoImg = true;
  shiny = false;
  
  @Input() datos?: string;

  constructor(private tarjetaService: PokemonService) { }

  ngOnInit(): void {
    this.tarjetaService.getData(this.datos).subscribe({
      next: (data: Pokemon) => {
        this.data = data;
        this.cargando = false;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  mostrarShiny() {
    this.cargandoImg = true
    this.shiny = !this.shiny
  }
}
