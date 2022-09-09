import { Component,  EventEmitter,  OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @Output() filtrar = new EventEmitter();
  searchText: string = "";
  constructor() { }


  ngOnInit(): void {
  }

  buscar() {
    this.filtrar.emit(this.searchText);
  }

}
