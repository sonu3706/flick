import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { RestApiService } from 'src/app/services/utilities/restapi.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
})
export class RecommendedComponent implements OnInit {
  public movieObject: Movie[] = [];

  constructor(private recommendedService: RestApiService<any>) {}

  ngOnInit(): void {
    this.getRecommendedMovies();
  }

  /**
   * getRecommendedMovies
   */
  public getRecommendedMovies(): void {
    const baseUrl: string = 'https://api.themoviedb.org/';
    const restUrl: string =
      '3/movie/popular?api_key=06203334b59c6a533b36ecd954eb2d14&language=en-US&page=1';
    this.recommendedService.getData(baseUrl, restUrl).subscribe((data) => {
      this.movieObject = data.results;
    });
  }
}
