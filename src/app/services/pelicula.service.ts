/*
2º DEFINES EL SERVICIO. NECESITAMOS:
    -INJECTABLE from @angular/core
    -HTTPCLIENT from @angular/common/http (2.0 IMPORTAR HTTPCLIENTMODULE EN MODULE.TS)
    -OBSERVABLE from rxjs
    -GLOBAL, PARA LAS RUTAS. (2.1 CREAMOS GLOBAL.TS EN SERVICES)
Lo haremos con Routing tambien
    */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global';

/*!!!!!!LO HACEMOS INJECTABLE()!!!!!!!!!!!!!! */
@Injectable()
export class PeliculaService {
  public url: string;
  //Declaramos como argumento de entrada el _http de clase HttpClient
  constructor(private _http: HttpClient) {
    this.url = Global.urlPeliculas;
  }
  /*Definimos los metodos (getters y tal) */
  getPeliculas(): Observable<any> {
    var request = 'api/peliculas';
    return this._http.get(this.url + request);
  }
  getGeneros(): Observable<any> {
    var request = 'api/Generos';
    return this._http.get(this.url + request);
    /*Importamos en la navbar el servicio para usar este getter */
  }
  getPeliculasByGenero(idgenero): Observable<any> {
    var request = 'api/peliculasgenero/' + idgenero;
    return this._http.get(this.url + request);
  }
  getDetallesPelicula(idpelicula): Observable<any> {
    var request = 'api/Peliculas?idpeli=' + idpelicula;
    return this._http.get(this.url + request);
  }
}
