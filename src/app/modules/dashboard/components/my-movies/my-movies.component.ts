import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/utilities/movie.service';

@Component({
  selector: 'app-my-movies',
  templateUrl: './my-movies.component.html',
  styleUrls: ['./my-movies.component.scss']
})
export class MyMoviesComponent implements OnInit {

  public movieObjects: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
     this.getSearchMoviesData();
  }

  public getSearchMoviesData(): void {
    this.movieService.getMovieData().subscribe(data => {
      if(data) {
        console.log(data);
        this.movieObjects = data;
      }
    })
  }
}
