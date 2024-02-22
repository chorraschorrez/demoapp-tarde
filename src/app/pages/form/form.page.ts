import { Component, OnInit } from '@angular/core';
import { HttpdataService } from 'src/app/services/movie.service';
import { MovieDetailsPage } from '../movie-details/movie-details.page';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  titulo: string = "";
  cargando: boolean = false;
  pelicula: MovieDetailsPage | any;

  constructor(public httpdataService:HttpdataService) { }

  ngOnInit() {
  }

  buscarPeliculaOmdb() {
    console.log("En buscarPeliculaOmdb...")
    let thisFormulario = this;
    this.httpdataService.getMovie(this.titulo).subscribe({
      next:MovieDetailsPage => {
        this.buscarPeliculaOmdb();
      }, 
      error:e => {
        console.error ("Error en buscarPeliculaOmdb()");
      }, 
      complete() {
        console.log("form page ts, buscarPeliculaOmdb() Finalizado. "); 
      }
    })
  }

}
