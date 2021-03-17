import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/utilities/movie.service';
import { RestApiService } from 'src/app/services/utilities/restapi.service';
import { SpeechRecognitionService } from 'src/app/services/utilities/speech.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  private API_KEY: string = '06203334b59c6a533b36ecd954eb2d14';
  public searchFormControl: FormControl = new FormControl('');
  public movieObjects: Movie[] = [];

  constructor(
    private searchService: RestApiService<any>,
    private movieService: MovieService,
    private speechService: SpeechRecognitionService
  ) {
    this.speechService.initialize();
  }

  ngOnInit(): void {
    this.getSpokenWord();
    this.getSearchValue();
  }

  public getSearchValue(): void {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(1000))
      .subscribe((data: string) => {
        this.searchResult(data);
      });
  }

  public searchResult(searchParameter: string): void {
    const baseUrl: string = 'https://api.themoviedb.org';
    const actionUrl: string = '/3/search/movie?api_key='
      .concat(this.API_KEY)
      .concat('&query=')
      .concat(searchParameter);
    this.searchService.getData(baseUrl, actionUrl).subscribe((data) => {
      this.speechService.textToSpeech(data.results.length, searchParameter);
      this.movieObjects = data.results;
      this.movieService.sendMovieData(this.movieObjects);
      this.speechService.stop();
    });
  }

  public startToListen(): void {
    this.speechService.routeSpeechActive = false;
    this.speechService.movieSearchSpeechActive = true;
    this.speechService.start();
  }

  public stopToListen(): void {
    this.speechService.stop();
  }

  public getSpokenWord(): void {
    this.speechService.stringValue
      .pipe(debounceTime(1000))
      .subscribe((value) => {
        console.log(value);
        this.searchFormControl.setValue(value);
      });
  }
}
