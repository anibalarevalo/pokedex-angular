import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

interface data {
  name:string;
  url:string
}

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  pokemon: any 
  cargando = true;
  cargandoImg = true;
  shiny = false;

  @Input() datos: data = {
    name: '',
    url: ''
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    
    this.http.get(this.datos.url)
    .subscribe( (res:any) => {this.pokemon = res;this.cargando = false}, err => console.log(err))

  }

  mostrarShiny(){
    this.cargandoImg =true
    this.shiny = !this.shiny
  }

}
