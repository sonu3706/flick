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
import { FavoriteComponent } from './components/favorite/favorite.component';
import { LatestComponent } from './components/latest/latest.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    RecommendedComponent,
    DashboardComponent,
    TrendingComponent,
    MovieCardComponent,
    MyMoviesComponent,
    FavoriteComponent,
    LatestComponent,
    NowPlayingComponent,
    TopRatedComponent,
    UpcomingComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FlexLayoutModule,
  ],
  providers: [],
})
export class DashboardModule {}
