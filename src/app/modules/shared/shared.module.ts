import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {TokenService} from 'src/app/services/utilities/token.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';
import {SearchComponent} from './components/search/search.component';
import { MovieService } from 'src/app/services/utilities/movie.service';
import { AssistComponent } from './components/assist/assist.component';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, SearchComponent, AssistComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    AssistComponent
  ],
  providers: [TokenService],
})
export class SharedModule {
}
