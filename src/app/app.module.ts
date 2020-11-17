import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider } from './app.routing';
import { AppComponent } from './app.component';
/*Importar tambien FormsModule para control de formularios. Y los metemos en los imports*/
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PeliculasgeneroComponent } from './components/peliculasgenero/peliculasgenero.component';
import { PeliculaService } from './services/pelicula.service';
import { HomepeliculasComponent } from './components/homepeliculas/homepeliculas.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PeliculasgeneroComponent, HomepeliculasComponent, PeliculaDetalleComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, routing],
  providers: [PeliculaService, appRoutingProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
