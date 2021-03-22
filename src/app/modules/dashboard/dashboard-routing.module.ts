import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';
import { TrendingComponent } from './components/trending/trending.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'recommended', component: RecommendedComponent },
      { path: 'trending', component: TrendingComponent },
      { path: 'my-movies', component: MyMoviesComponent },
      { path: 'favorite', component: FavoriteComponent },
      { path: 'top-rated', component: TopRatedComponent },
      { path: 'upcoming', component: UpcomingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
