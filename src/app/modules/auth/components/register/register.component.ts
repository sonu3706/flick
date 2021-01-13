import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/utilities/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.tokenService.numberCalled.subscribe((data) => {
      console.log(data);
    });
  }

}
