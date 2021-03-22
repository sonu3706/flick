import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/utilities/movie.service';
import { RestApiService } from 'src/app/services/utilities/restapi.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  public trendingMovieObject: Movie[] = [];

  constructor(private trendingService: RestApiService<any>) {}

  ngOnInit(): void {
    this.getTrendingList();
  }

  /**
   * Get Trending movie list from TMDB server
   */
  public getTrendingList(): void {
    const baseUrl: string = 'https://api.themoviedb.org/';
    const restUrl: string = '3/trending/all/day?api_key=06203334b59c6a533b36ecd954eb2d14';
    this.trendingService.getData(baseUrl, restUrl).subscribe((data) => {
      this.trendingMovieObject = data.results;
    });
  }
}
