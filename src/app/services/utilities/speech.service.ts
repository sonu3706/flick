import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class SpeechRecognitionService {
  public recognition = new webkitSpeechRecognition();
  public stringValue: BehaviorSubject<string> = new BehaviorSubject('');
  public routeValue: BehaviorSubject<string> = new BehaviorSubject('');
  public isStoppedSpeechRecognition = false;
  public routeSpeechActive: boolean = false;
  public movieSearchSpeechActive: boolean = false;
  public text: string;
  public tempWords: string;
  public synth = window.speechSynthesis;

  /* Constructor */
  constructor() {}

  /* Initialize speech recognition */
  public initialize(): void {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log(transcript);
      
      if (this.routeSpeechActive) {
        this.routeValue.next(this.tempWords);
      } else if (this.movieSearchSpeechActive) {
        this.stringValue.next(this.tempWords);
      }
      if (transcript === 'stop') {
        this.stop();
      }
    });
  }

  public start() {
    this.isStoppedSpeechRecognition = false;
    this.recognition.start();
    console.log('Speech recognition started');
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecognition) {
        this.recognition.stop();
        console.log('End speech recognition');
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }

  public stop() {
    this.isStoppedSpeechRecognition = true;
    this.wordConcat();
    this.recognition.stop();
    console.log('End speech recognition');
  }

  public wordConcat() {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';
  }

  public textToSpeech(dataLength: number, movieName: string): void {
    let utterWord = new SpeechSynthesisUtterance('Found' + dataLength + 'results' + 'for movie' + movieName);
    this.synth.speak(utterWord);
  }

  public textToSpeechForRoute(pageName: string): void {
    let utterWord = new SpeechSynthesisUtterance('Here is ' + pageName + 'page for you');
    this.synth.speak(utterWord);
  }
}
