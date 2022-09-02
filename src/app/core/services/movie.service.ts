import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../schema/movie';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private jsonApiService: JsonApiService) { }

  fetchAllMovies(): Observable<Movie[]> {
    return this.jsonApiService.get('/movies');
  }

  fetchMovieDetail(id: Number): Observable<Movie> {
    return this.jsonApiService.get(`/movies/${id}`)
  }
}
