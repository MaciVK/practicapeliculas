// 1º CONSTUIR EL MODELO DE LAS COSAS QUE VAYAS A CREAR, EN ESTE CASO SON PELICULAS
//LE METES EN EL CONSTRUCTORL LAS PROPIEDADES QUE VAYA A TENER.
// 2º IR A SERVICIO (PELICULA.SERVICE.TS)
export class Pelicula {
  constructor(
    public idPelicula: number,
    public idDistribuidor: number,
    public idGenero: number,
    public titulo: string,
    public idNacionalidad: number,
    public argumento: string,
    public foto: string,
    public fechaEstreno: string,
    public actores: string,
    public director: string,
    public duracion: number,
    public precio: number,
    public youTube: string,
    public enlaceVideo: string
  ) {}
}
