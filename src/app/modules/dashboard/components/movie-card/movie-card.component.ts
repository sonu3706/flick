import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie: Movie;
  @Output() movieEventEmitter: EventEmitter<Movie> = new EventEmitter<Movie>();

  public buttonLabel: string = 'Save';
  public buttonColor: string = 'primary';

  constructor() {}

  ngOnInit(): void {}

  public saveMovie(movie: Movie): void {
    this.movieEventEmitter.emit(movie);
    this.buttonLabel = 'Remove';
    this.buttonColor = 'warn';
  }
}
