import { Component, OnInit } from '@angular/core';
import { HttpdataService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private httpdataService:HttpdataService) { }

  ngOnInit() {
  }


}
