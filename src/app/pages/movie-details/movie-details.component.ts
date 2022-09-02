import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/schema/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  id:any = "";
  movie: Movie = {} as Movie;

  constructor(private _activatedRoute: ActivatedRoute, private _movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get("id");
    console.log("Route", this.id);
    this._movieService.fetchMovieDetail(this.id).subscribe( data => {
      this.movie = data;
      console.log("movie", this.movie)
    } )
  }

}
