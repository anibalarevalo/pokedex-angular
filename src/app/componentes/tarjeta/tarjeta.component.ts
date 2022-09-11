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
  shiny = false;

  @Input() datos: data = {
    name: '',
    url: ''
  };

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    
    this.http.get(this.datos.url)
    .subscribe( (res:any) => {this.pokemon = res;}, err => console.log(err))

  }

  mostrarShiny(){
    this.cargando =true
    this.shiny = !this.shiny
  }

}
