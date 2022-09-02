import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/core/schema/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  watchedMovies: Movie[] = [];
  allMovies: Movie[] = [];

  constructor(private _movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this._movieService.fetchAllMovies().subscribe( (value) => {
      this.allMovies = value;
    });
  }

  drop(event: CdkDragDrop<Movie[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  showDetails(movieId: Number) {    
    this.router.navigate(['/movie', movieId])
  }

}
