import { Component, OnInit } from '@angular/core';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from './../../models/Pelicula';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-peliculasgenero',
  templateUrl: './peliculasgenero.component.html',
  styleUrls: ['./peliculasgenero.component.css'],
})
export class PeliculasgeneroComponent implements OnInit {
  public peliculas: Array<Pelicula>;
  constructor(
    private _service: PeliculaService,
    private _activeRoute: ActivatedRoute
  ) {}

  buscarPelisGenero(idgenero) {
    this._service.getPeliculasByGenero(idgenero).subscribe(
      (respuesta) => {
        this.peliculas = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe(
      (params: Params) => {
        var idgenero = params.idgenero;
        this.buscarPelisGenero(idgenero);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
