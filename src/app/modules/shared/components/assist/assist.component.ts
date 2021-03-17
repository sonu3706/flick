import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { SpeechRecognitionService } from 'src/app/services/utilities/speech.service';

@Component({
  selector: 'app-assist',
  templateUrl: './assist.component.html',
  styleUrls: ['./assist.component.scss'],
})
export class AssistComponent implements OnInit {
  constructor(private speechService: SpeechRecognitionService, private router: Router) {
    this.speechService.routeSpeechActive = true;
    this.speechService.initialize();
  }

  ngOnInit(): void {
    this.getSpokenWord();
  }

  public enableRouteSpeech(): void {
    this.speechService.routeSpeechActive = true;
    this.speechService.movieSearchSpeechActive = false;
    this.speechService.start();
  }

  public getSpokenWord(): void {
    this.speechService.routeValue.pipe(debounceTime(1000)).subscribe(value => {
      console.log(value);
      if(value === 'login') {
        this.router.navigate(['/auth/login']);
      } else if (value === 'register') {
        this.router.navigate(['/auth/register']);
      }

      this.speechService.textToSpeechForRoute(value);
      this.speechService.stop();
    });
  }
}
