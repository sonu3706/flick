import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/utilities/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: boolean = false;
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.checkIfUserIsLoggedIn();
  }

  public checkIfUserIsLoggedIn(): void {
    this.tokenService.userLoggedIn.subscribe((data: boolean) => {
      this.isUserLoggedIn = data;
    });
  }

  public navigateToLogin(): void {
    this.tokenService.stopBackNavigation(1);
    this.router.navigate(['auth/login']);
  }

  public navigateToHome(): void {
    this.router.navigate(['home']);
  }
}
