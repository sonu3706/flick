import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TrendingComponent } from './components/trending/trending.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { MovieService } from 'src/app/services/utilities/movie.service';

@NgModule({
  declarations: [
    RecommendedComponent,
    DashboardComponent,
    TrendingComponent,
    MovieCardComponent,
    MyMoviesComponent,
  ],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
  providers: []
})
export class DashboardModule {}
