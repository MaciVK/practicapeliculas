import { Component, OnInit } from '@angular/core';
import { PeliculaService } from './../../services/pelicula.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  /*Hay que meter el servicio como provider. Tambien se puede poner en el Module.ts */
  providers: [],
})
export class NavbarComponent implements OnInit {
  public generos: Array<any>;
  /*Hay que declarar el servicio como argumento de entrada en el constructor */
  constructor(private _service: PeliculaService) {}

  ngOnInit(): void {
    /*Se ejecuta el getGeneros en OnInit para capturar los generos de la API */
    this._service.getGeneros().subscribe(
      (respuesta) => {
        this.generos = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  /*SE HAY QUE DEFINIR EL ROUTING. lo metemos en app */
}
