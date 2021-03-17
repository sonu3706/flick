import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyMoviesComponent } from './components/my-movies/my-movies.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { TrendingComponent } from './components/trending/trending.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'recommended', component: RecommendedComponent },
      { path: 'trending', component: TrendingComponent },
      { path: 'my-movies', component: MyMoviesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
