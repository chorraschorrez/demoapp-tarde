import { Component, OnInit } from '@angular/core';
import { HttpdataService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  constructor(private httpdataService:HttpdataService) { }

  ngOnInit() {
  }

  private buscarPeliculaOmdb(){
    console.log("Entrando en buscarPeliculaOmdb...");

    // TODO interface pelicula, y ngModel para vincular campo película entre movie-detais.page.html y movie-details.page.ts
    this.httpdataService.getMovie(this.titulo).subscribe((pelicula:any)=>{
      //Hacer lo que sea con la película
    })
  }

}
