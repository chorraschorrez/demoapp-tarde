import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/movies',  // E.g. if browser box: http://localhost:8101/pages/movies , then redirect to: http://localhost:8101/pages/movies
    pathMatch: 'full'
  }
,
  {  
    path: 'pages/movies',
    loadChildren: () => import('./pages/movies/movies.module').then(x => x.MoviesPageModule)
  },
  {
    path: 'movies-details/:id', 
    loadChildren: () => import('./pages/movie-details/movie-details.module').then(x=> x.MovieDetailsPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
