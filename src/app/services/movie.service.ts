
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// export class MovieService {

//   constructor() { }
// }



////import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
////import { HttpParams } from '@capacitor/core';

// TODO Hay que adaptar nombres, basarse en ejemplos sesiones clase. 
 
// Typescript custom enum for search types (optional)
export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}
 
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://www.omdbapi.com/';
  apiKey = 'cc1e061a'; // <-- Enter your own key here!    
 
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
 
  // /**
  // * Get data from the OmdbApi 
  // * map the result to return only the results that we need
  // * 
  // * @param {string} title Search Term
  // * @param {SearchType} type movie, series, episode or empty
  // * @returns Observable with the search results
  // */
  // searchData(title: string, type: SearchType): Observable<any> {
  //   return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
  //     map(results => results['Search'])
  //   );
  // }
 
  // /**
  // * Get the detailed information for an ID using the "i" parameter
  // * 
  // * @param {string} id imdbID to retrieve information
  // * @returns Observable with detailed information
  // */
  // getDetails(id) {
  //   return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  // }




  // // (References: * "", R:\UserWksp\wks_git\chorraschorrez_gmail\chorraschorrez.github.io\omdb.js  )

  // function findMovie(title){
  //   console.log("Entrando en findMovie...");
  //   const API_KEY = 'cc1e061a';
  //   const URL = `http://www.omdbapi.com&apikey=${API_KEY}&t=${title}`;
  //   var xmlHttp = new XMLHttpRequest();
  //   xmlHttp.onreadystatechange = function () {
  //       if (xmlHttp.readyState == 4) {
  //           if (xmlHttp.status = 200) {
  //               generarFichaProcess(JSON.parse(xmlHttp.responseText))
  //           } else {
  //               console.error("Ha ocurrido un error" + xmlHttp.status);
  //               throw "Ha ocurrido un error " + xmlHttp.status;
  //           }
  //       } 
  //   }    
  //   console.debug(encodeURI(URL));
  //   xmlHttp.open("GET", encodeURI(URL), true); // encodeURI adapta la cadena URL al formato de la web
  //   xmlHttp.send();




  // (References: * "", R:\UserWksp\wks_git\chorraschorrez_gmail\chorraschorrez.github.io\omdb.js  )

//  function findMovie(title){
//    console.log("Entrando en findMovie...");
    // const API_KEY = 'cc1e061a';
    // const URL = `http://www.omdbapi.com&apikey=${API_KEY}&t=${title}`;
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = function () {
    //     if (xmlHttp.readyState == 4) {
    //         if (xmlHttp.status = 200) {
    //             generarFichaProcess(JSON.parse(xmlHttp.responseText))
    //         } else {
    //             console.error("Ha ocurrido un error" + xmlHttp.status);
    //             throw "Ha ocurrido un error " + xmlHttp.status;
    //         }
    //     } 
    }    

    // console.debug(encodeURI(URL));
    // xmlHttp.open("GET", encodeURI(URL), true); // encodeURI adapta la cadena URL al formato de la web
    // xmlHttp.send();


      // References: * "", https://github.com/fpaniaguajavascript/miappionic/blob/main/src/app/services/httpdata.service.ts
    export class HttpdataService {
      static URL = "https://www.omdbapi.com/";
      constructor(private clienteHttp:HttpClient) { }

      // TODO: Mover constante a Environment   (key usada en ejercicio mío de clase: )
      const OMDB_API_KEY = 'cc1e061a';

      getMovie(titulo:string) {
        console.debug("Entrando en getMovie(), titulo="+titulo);
        const parametros = new HttpParams().
          append('apikey', this.OMDB_API_KEY).
          append('t', titulo);
//        return this.clienteHttp?.get<Pelicula>(HttpdataService.URL, {params:parametros});//Devuelve un Observable
      }
    }







}