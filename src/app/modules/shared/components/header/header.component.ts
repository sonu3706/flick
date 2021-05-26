import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/utilities/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isUserLoggedIn: boolean = true;

  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
   // this.isUserLoggedIn = true;
    this.checkIfUserIsLoggedIn();
  }

  public checkIfUserIsLoggedIn(): void {
    this.tokenService.userLoggedIn.subscribe((data: boolean) => {
      console.log(data);

      this.isUserLoggedIn = data;
    });
  }

  public navigateToLogin(): void {
    this.router.navigate(['auth/login']).then(r => {
      console.log(r);
    });
  }

  public navigateToHome(): void {
    this.router.navigate(['home']).then(r => {});
  }

  public navigateToFavorite(): void {
    this.router.navigate(['dashboard/favorite']).then(r => {});
  }
  public navigateToTrending(): void {
    this.router.navigate(['dashboard/trending']).then(r => {});
  }
  public navigateToRecommended(): void {
    this.router.navigate(['dashboard/recommended']).then(r => {});
  }

  /**
   * logout
   */
  public logout(): void {
    this.tokenService.removeTokenFromSessionStorage();
    this.router.navigate(['/home']).then(r => {});
  }

  /**
   * navigateToChangePassword
   */
  public navigateToChangePassword(): void {
    this.router.navigate(['auth/change-password']).then(r => {});
  }

  /**
   * navigateToEditProfile
   */
  public navigateToEditProfile(): void {
    this.router.navigate(['auth/edit-profile']).then(r => {});
  }

  /**
   * navigateToUpcoming
   */
  public navigateToUpcoming(): void {
    this.router.navigate(['dashboard/upcoming']).then(r => {});
  }

  /**
   * navigateToTopRated
   */
  public navigateToTopRated(): void {
    this.router.navigate(['dashboard/top-rated']).then(r => {});
  }
}
