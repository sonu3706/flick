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
    this.checkIfUserIsLoggedIn();
  }

  public checkIfUserIsLoggedIn(): void {
    this.tokenService.userLoggedIn.subscribe((data: boolean) => {
      this.isUserLoggedIn = data;
      // this.isUserLoggedIn = true;
    });
  }

  public navigateToLogin(): void {
    this.router.navigate(['auth/login']);
  }

  public navigateToHome(): void {
    this.router.navigate(['home']);
  }

  public navigateToFavorite(): void {
    this.router.navigate(['dashboard/favorite']);
  }
  public navigateToTrending(): void {
    this.router.navigate(['dashboard/trending']);
  }
  public navigateToRecommended(): void {
    this.router.navigate(['dashboard/recommended']);
  }

  /**
   * logout
   */
  public logout() {
    this.tokenService.removeTokenFromSessionStorage();
    this.router.navigate(['/home']);
  }

  /**
   * navigateToChangePassword
   */
  public navigateToChangePassword() {
    this.router.navigate(['auth/change-password']);
  }

  /**
   * navigateToEditProfile
   */
  public navigateToEditProfile() {
    this.router.navigate(['auth/edit-profile']);
  }

  /**
   * navigateToUpcoming
   */
  public navigateToUpcoming() {
    this.router.navigate(['dashboard/upcoming']);
  }

  /**
   * navigateToTopRated
   */
  public navigateToTopRated() {
    this.router.navigate(['dashboard/top-rated']);
  }
}
