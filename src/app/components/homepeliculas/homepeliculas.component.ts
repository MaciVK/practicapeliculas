import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-homepeliculas',
  templateUrl: './homepeliculas.component.html',
  styleUrls: ['./homepeliculas.component.css'],
})
export class HomepeliculasComponent implements OnInit {
  public peliculas: Array<Pelicula>;

  public peliculasBuscadas: Array<Pelicula>;
  @ViewChild('cajaBusqueda') cajaBusqueda: ElementRef;
  constructor(private _service: PeliculaService) {
    this.peliculasBuscadas = [];
  }

  buscarPelisTitulo() {
    var busqueda = this.cajaBusqueda.nativeElement.value;
    this.peliculasBuscadas = [];
    console.log(this.cajaBusqueda.nativeElement.value);
    if (busqueda.length != 0) {
      for (var i = 0; i < this.peliculas.length; i++) {
        if (
          this.peliculas[i].titulo
            .toLowerCase()
            .includes(busqueda.toLowerCase())
        ) {
          this.peliculasBuscadas.push(this.peliculas[i]);
        }
      }
    }
    console.log(this.peliculasBuscadas);
  }
  ngOnInit(): void {
    this._service.getPeliculas().subscribe(
      (respuesta) => {
        this.peliculas = respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
