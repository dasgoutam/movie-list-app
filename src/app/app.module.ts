// Module Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import appRoutes from './core/routes/router-config';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StarRatingModule } from 'angular-star-rating';

// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

// Component Imports
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { McardComponent } from './components/mcard/mcard.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { WatchedCardComponent } from './components/watched-card/watched-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    McardComponent,
    HomeComponent,
    MovieDetailsComponent,
    WatchedCardComponent
  ],
  imports: [
    FlexLayoutModule,
    DragDropModule,
    BrowserModule,
    StarRatingModule.forRoot(),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
