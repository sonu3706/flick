import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { RestApiService } from 'src/app/services/utilities/restapi.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss'],
})
export class TopRatedComponent implements OnInit {
  public movieObject: Movie[] = [];

  constructor(private topRatedService: RestApiService<any>) {}

  ngOnInit(): void {
    this.getTopRatedMovies();
  }

  /**
   * getTopRatedMovies
   */
  public getTopRatedMovies() {
    const baseUrl: string = 'https://api.themoviedb.org/';
    const resetUrl: string =
      '3/movie/top_rated?api_key=06203334b59c6a533b36ecd954eb2d14&language=en-US&page=1';
    this.topRatedService.getData(baseUrl, resetUrl).subscribe((data) => {
      this.movieObject = data.results;
    });
  }
}
