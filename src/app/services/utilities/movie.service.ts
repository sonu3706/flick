import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  public movieData: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  public sendMovieData(movies: Movie[]): void {
    this.movieData.next(movies);
  }

  public getMovieData(): Observable<Movie[]> {
    return this.movieData.asObservable();
  }
}
