import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
