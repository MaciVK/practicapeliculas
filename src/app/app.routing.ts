// 1º (importar modulo con providers desde @angular/core)
import { ModuleWithProviders } from '@angular/core';

// 2º (importar routes y modulo de rutas from @angular/router)
import { Routes, RouterModule } from '@angular/router';
import { HomepeliculasComponent } from './components/homepeliculas/homepeliculas.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';
import { PeliculasgeneroComponent } from './components/peliculasgenero/peliculasgenero.component';
// 10º (importar componentes a mostrar cuando la url coincida con el path)

// 3º (definir rutas, en una constante, para exportarlas como un array de rutas, siendo el proveedor)
const appRoutes: Routes = [
  { path: '', component: HomepeliculasComponent },
  { path: 'generos/:idgenero', component: PeliculasgeneroComponent },
  { path: 'detallespelicula/:idpelicula', component: PeliculaDetalleComponent },
];

// 4º (exportar proveedor de rutas)
export const appRoutingProvider: any[] = [];
// 6º (exportar la constante routing, que es un modulo con el proveedor de rutas, para el root.)
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(
  appRoutes
);
// 7º IR A MODULE.ts
