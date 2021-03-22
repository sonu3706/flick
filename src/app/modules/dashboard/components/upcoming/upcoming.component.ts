import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { RestApiService } from 'src/app/services/utilities/restapi.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  public movieObject: Movie[] = [];

  constructor(private topRatedService: RestApiService<any>) { }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  /**
   * getUpcomingMovies
   */
  public getUpcomingMovies() {
    const baseUrl: string = 'https://api.themoviedb.org/'
    const resetUrl: string = '3/movie/upcoming?api_key=06203334b59c6a533b36ecd954eb2d14';
    this.topRatedService.getData(baseUrl, resetUrl).subscribe(data => {
      this.movieObject = data.results;
    });
  }

}
