import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css'],
})
export class PeliculaDetalleComponent implements OnInit {
  public pelicula: Pelicula;
  constructor(
    private _service: PeliculaService,
    private _activeRoute: ActivatedRoute
  ) {}

  detallesPelicula(idpelicula) {
    this._service.getDetallesPelicula(idpelicula).subscribe((respuesta) => {
      this.pelicula = respuesta;
    });
  }
  ngOnInit(): void {
    this._activeRoute.params.subscribe(
      (params: Params) => {
        this.detallesPelicula(params.idpelicula);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
